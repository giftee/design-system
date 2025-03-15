import fs from 'node:fs';

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;

const fetchFigmaVariables = async () => {
  const response = await fetch(
    `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/local`,
    {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN,
      },
    },
  );
  const data = await response.json();
  return data;
};

const result = await fetchFigmaVariables();
const collections = Object.values(result.meta.variableCollections).filter(
  (collection) => !collection.hiddenFromPublishing,
);
const variables = result.meta.variables;

collections.forEach((collection) => {
  if (collection.name === 'globals') {
    const defaultModeId = collection.defaultModeId;
    const tokenJson = convert(collection, defaultModeId);
    createFile(tokenJson, `./tokens/globals`);
  } else if (collection.name === 'semantic-common') {
    const defaultModeId = collection.defaultModeId;
    const tokenJson = convert(collection, defaultModeId);
    createFile(tokenJson, `./tokens/semantics/common`);
  } else if (collection.name === 'semantic-theme') {
    collection.modes.forEach((mode) => {
      // TODO: 命名を精査
      if (mode.name !== 'c-light') {
        const tokenJson = convert(collection, mode.modeId);
        createFile(tokenJson, `./tokens/semantics/brands/${mode.name}`);
      }
    });
  }
});

function convert(collection, modeId) {
  const tokenJson = {};
  collection.variableIds.forEach((variableId) => {
    const variable = variables[variableId];
    const value = variable.valuesByMode[modeId];
    const type = variable.resolvedType.toLowerCase();

    // ["semantic", "color", "text", "contrast"]
    const nameParts = variable.name.split('/');

    // 参照を使った実装
    // 1. current は tokenJson を参照。current　の変更が tokenJson に反映
    //    tokenJson = { semantic: {} }
    // 2. current = tokenJson["semantic"] で参照を tokenJson["semantic"] に変更。current の変更が tokenJson["semantic"] に反映
    //    tokenJson = { semantic: { color: {}}}
    // 3. current = tokenJson["semantic"]["color"] を参照....
    let current = tokenJson;
    nameParts.forEach((part, index) => {
      if (index === nameParts.length - 1) {
        current[part] = createValue(value, type);
      } else {
        current[part] = current[part] || {};
        current = current[part];
      }
    });
  });

  return tokenJson;
}

function createValue(value, type) {
  if (value['type'] === 'VARIABLE_ALIAS') {
    const aliasVariable = variables[value['id']];
    const aliasNameParts = aliasVariable.name.split('/');
    return {
      $type: convertFigmaType(type),
      $value: `{${aliasNameParts.join('.')}}`,
    };
  } else if (type === 'color') {
    return {
      $type: convertFigmaType(type),
      $value: figmaColorToDesignToken(value),
    };
  } else {
    return {
      $type: convertFigmaType(type),
      $value: value,
    };
  }
}

function convertFigmaType(type) {
  return type === 'float' ? 'number' : type;
}

function figmaColorToDesignToken(value) {
  const opacity = value['a'];
  if (opacity === 1) {
    return rgbToHex({ r: value['r'], g: value['g'], b: value['b'] });
  } else {
    return rgbTo255(value);
  }
}

function rgbToHex({ r, g, b }) {
  const toHex = (value) => {
    const hex = Math.round(value * 255).toString(16);

    return hex.length === 1 ? '0' + hex : hex;
  };

  const hex = [toHex(r), toHex(g), toHex(b)].join('');
  return `#${hex}`;
}

function rgbTo255(value) {
  return `rgba(${Math.round(value['r'] * 255)}, ${Math.round(
    value['g'] * 255,
  )}, ${Math.round(value['b'] * 255)}, ${
    Math.floor(value['a'] * 100000) / 100000
  })`;
}

function createFile(tokenJson, dirName) {
  fs.mkdirSync(dirName, { recursive: true }, (err) => {
    if (err) throw err;
  });
  fs.writeFileSync(
    `${dirName}/index.tokens.json`,
    JSON.stringify(tokenJson),
    (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    },
  );
}
