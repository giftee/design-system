import StyleDictionaryPackage from 'style-dictionary';

const PATH = 'tokens';
const getStyleDictionaryConfig = (brand) => {
  return {
    source: [
      `${PATH}/globals/**/*.json`,
      `${PATH}/semantics/common/**/*.json`,
      `${PATH}/semantics/brands/${brand}/*.json`,
    ],
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
StyleDictionaryPackage.registerParser({
  pattern: /\.json$|\.tokens\.json$|\.tokens$/,
  parse: ({ contents }) => {
    const preparedContent = (contents || '{}')
      .replace(/"\$?value"\s*:/g, '"value":')
      .replace(/"\$?type"\s*:/g, '"type":')
      .replace(/"\$?description"\s*:/g, '"comment":');
    return JSON.parse(preparedContent);
  },
});

// グローバルトークンとセマンティクストークンのファイルを分けるためのフィルター
StyleDictionaryPackage.registerFilter({
  name: 'isGlobal',
  matcher: function (token) {
    return token?.attributes?.category === 'global';
  },
});
StyleDictionaryPackage.registerFilter({
  name: 'isSemantic',
  matcher: function (token) {
    return token?.attributes?.category === 'semantic';
  },
});

// token.attributes.category は global/semantics になり size/px のデフォルトマッチャーに合わないのでカスタマイズ
// https://amzn.github.io/style-dictionary/#/transforms?id=sizepx
StyleDictionaryPackage.registerTransform({
  name: 'size/px',
  type: 'value',
  matcher: function (token) {
    return token.attributes.type === 'size';
  },
  transformer: function (token) {
    return `${token.value}px`;
  },
});

StyleDictionaryPackage.registerTransformGroup({
  name: 'js',
  transforms: ['attribute/cti', 'name/cti/kebab', 'size/px', 'color/hex'],
});

// マルチブランド対応：ブランド名をセレクタに追加
// https://github.com/amzn/style-dictionary/blob/main/examples/advanced/multi-brand-multi-platform/build.js
StyleDictionaryPackage.registerFormat({
  name: 'css/variables',
  formatter: function ({ dictionary, options }) {
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
      if (dictionary.usesReference(token.original.value)) {
        const refs = dictionary.getReferences(token.original.value);
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

BRANDS.map((brand) => {
  console.log('\n==============================================');
  console.log(`\nProcessing: ${brand}`);

  const StyleDictionary = StyleDictionaryPackage.extend(
    getStyleDictionaryConfig(brand),
  );
  StyleDictionary.buildAllPlatforms();

  console.log('\nEnd processing');
});

console.log('\nBuild completed!');
