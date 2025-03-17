import StyleDictionary from 'style-dictionary';

const PATH = 'tokens';
const getStyleDictionaryConfig = (brand) => {
  return {
    source: [
      `${PATH}/globals/**/*.json`,
      `${PATH}/semantics/common/**/*.json`,
      `${PATH}/semantics/brands/${brand}/*.json`,
    ],
    parsers: ['w3c-token-parser'],
    platforms: {
      web: {
        transformGroup: 'web',
        buildPath: 'dist/',
        prefix: 'ab',
        files: [
          {
            destination: `css/globals.css`,
            format: 'css/variables',
            filter: 'isGlobal',
            selector: ':root',
            options: {
              outputReferences: false,
            },
          },
          {
            destination: `css/${brand}.css`,
            format: 'css/variables',
            filter: 'isSemantic',
            selector: `[data-theme='${brand}']`,
            options: {
              outputReferences: true,
            },
          },
          {
            destination: `scss/globals.scss`,
            format: 'css/variables',
            filter: 'isGlobal',
            selector: ':root',
            options: {
              outputReferences: false,
            },
          },
          {
            destination: `scss/${brand}.scss`,
            format: 'css/variables',
            filter: 'isSemantic',
            selector: `[data-theme='${brand}']`,
            options: {
              outputReferences: true,
            },
          },
        ],
      },
      cjs: {
        transformGroup: 'js',
        buildPath: 'dist/',
        files: [
          {
            destination: `cjs/${brand}.js`,
            format: 'javascript/module',
          },
        ],
      },
      types: {
        transformGroup: 'js',
        buildPath: `dist/`,
        files: [
          {
            destination: `types/${brand}.d.ts`,
            format: 'typescript/module-declarations',
          },
        ],
      },
    },
  };
};

// style-dictionary は W3C spec に準拠していないため、W3C spec を style-dictionary に合わせる
// https://github.com/lukasoppermann/style-dictionary-utils/blob/main/src/parser/w3c-token-json-parser.ts
StyleDictionary.registerParser({
  name: 'w3c-token-parser',
  pattern: /\.json$|\.tokens\.json$|\.tokens$/,
  parser: ({ contents }) => {
    const preparedContent = (contents || '{}')
      .replace(/"\$?value"\s*:/g, '"value":')
      .replace(/"\$?type"\s*:/g, '"type":')
      .replace(/"\$?description"\s*:/g, '"comment":');
    return JSON.parse(preparedContent);
  },
});

// グローバルトークンとセマンティクストークンのファイルを分けるためのフィルター
StyleDictionary.registerFilter({
  name: 'isGlobal',
  filter: function (token) {
    return token?.attributes?.category === 'global';
  },
});
StyleDictionary.registerFilter({
  name: 'isSemantic',
  filter: function (token) {
    return token?.attributes?.category === 'semantic';
  },
});

// token.attributes.category は global/semantics になり size/px のデフォルトマッチャーに合わないのでカスタマイズ
// https://amzn.github.io/style-dictionary/#/transforms?id=sizepx
StyleDictionary.registerTransform({
  name: 'size/px',
  type: 'value',
  filter: function (token) {
    return token.attributes.type === 'size';
  },
  transform: function (token) {
    return `${token.value}px`;
  },
});

StyleDictionary.registerTransformGroup({
  name: 'js',
  transforms: ['attribute/cti', 'name/kebab', 'size/px', 'color/hex'],
});

import { usesReferences, getReferences } from 'style-dictionary/utils';

// マルチブランド対応：ブランド名をセレクタに追加
// https://github.com/amzn/style-dictionary/blob/main/examples/advanced/multi-brand-multi-platform/build.js
StyleDictionary.registerFormat({
  name: 'css/variables',
  format: function ({ dictionary, options }) {
    const selector =
      this.selector === `[data-theme='${DEFAULT_BRAND}']`
        ? `${this.selector},${NOT_DEFAULT_BRANDS.map(
            (b) => `:root:not([data-theme='${b}'])`,
          ).join(',')}`
        : this.selector;

    return `${selector} {
${dictionary.allTokens
  .map((token) => {
    let value =
      typeof token.value === 'string'
        ? token.value
        : JSON.stringify(token.value);

    if (options.outputReferences) {
      if (usesReferences(token.original.value, dictionary.tokens)) {
        const refs = getReferences(token.original.value, dictionary.tokens);
        refs.forEach((ref) => {
          value = value.replace(ref.value, function () {
            return ref.name;
          });
        });

        return `  --${token.name}: var(--${value});`;
      }
    }
    return `  --${token.name}: ${token.value};`;
  })
  .join('\n')}
}`;
  },
});

console.log('Build started...');

const DEFAULT_BRAND = 'g4b-light';
const NOT_DEFAULT_BRANDS = ['g4b-dark', 'skeleton-light'];
const BRANDS = [DEFAULT_BRAND, ...NOT_DEFAULT_BRANDS];

// Use Promise.all to run all builds in parallel
await Promise.all(BRANDS.map(async (brand) => {
  console.log('\n==============================================');
  console.log(`\nProcessing: ${brand}`);

  const sd = new StyleDictionary(getStyleDictionaryConfig(brand));
  await sd.hasInitialized;
  await sd.buildAllPlatforms();

  console.log('\nEnd processing');
}));

console.log('\nBuild completed!');
