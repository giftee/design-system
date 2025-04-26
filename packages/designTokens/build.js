import StyleDictionaryPackage from 'style-dictionary';
import { usesReferences, getReferences } from 'style-dictionary/utils';

const PATH = 'tokens';
const getStyleDictionaryConfig = (brand) => {
  return {
    source: [
      `${PATH}/globals/**/*.json`,
      `${PATH}/semantics/common/**/*.json`,
      `${PATH}/semantics/brands/${brand}/*.json`,
    ],
    hooks: {
      parsers: {
        // style-dictionary は W3C spec に準拠していないため、W3C spec を style-dictionary に合わせる
        // https://github.com/lukasoppermann/style-dictionary-utils/blob/main/src/parser/w3c-token-json-parser.ts
        'w3c-token-parser': {
          pattern: /\.tokens\.json$/,
          parser: ({ contents }) => {
            const preparedContent = (contents || '{}')
              .replace(/"\$?value"\s*:/g, '"value":')
              .replace(/"\$?type"\s*:/g, '"type":')
              .replace(/"\$?description"\s*:/g, '"comment":');

            return JSON.parse(preparedContent);
          },
        },
      },
      transforms: {
        // token.attributes.category は global/semantics になり size/px のデフォルトマッチャーに合わないのでカスタマイズ
        // https://amzn.github.io/style-dictionary/#/transforms?id=sizepx
        'size/px': {
          type: 'value',
          filter: (token) => {
            return (
              token.attributes.type === 'size' ||
              (token.attributes.type === 'font' &&
                token.attributes.item === 'size')
            );
          },
          transform: (token) => {
            return typeof token.value === 'number'
              ? `${token.value}px`
              : token.value;
          },
        },
      },
      filters: {
        // グローバルトークンとセマンティクストークンのファイルを分けるためのフィルター
        isGlobal: (token) => token?.attributes?.category === 'global',
        isSemantic: (token) => token?.attributes?.category === 'semantic',
      },
      transformGroups: {
        js: ['attribute/cti', 'name/kebab', 'size/px', 'color/hex'],
      },
      formats: {
        // マルチブランド対応：ブランド名をセレクタに追加
        // https://github.com/amzn/style-dictionary/blob/main/examples/advanced/multi-brand-multi-platform/build.js
        'css/variables': ({ dictionary, options, file }) => {
          const selector =
            file.selector === `[data-theme='${DEFAULT_BRAND}']`
              ? `${file.selector},${NOT_DEFAULT_BRANDS.map(
                  (b) => `:root:not([data-theme='${b}'])`,
                ).join(',')}`
              : file.selector;

          return `${selector} {
${dictionary.allTokens
  .map((token) => {
    let value =
      typeof token.value === 'string'
        ? token.value
        : JSON.stringify(token.value);

    if (options.outputReferences) {
      if (usesReferences(token.original.value, dictionary.tokens)) {
        const refs = getReferences(
          token.original.value,
          dictionary.unfilteredTokens,
        );
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
      },
    },
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
            transforms: ['size/px'],
            selector: ':root',
            options: {
              outputReferences: false,
            },
          },
          {
            destination: `css/${brand}.css`,
            format: 'css/variables',
            transforms: ['size/px'],
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
            transforms: ['size/px'],
            selector: ':root',
            options: {
              outputReferences: false,
            },
          },
          {
            destination: `scss/${brand}.scss`,
            format: 'css/variables',
            filter: 'isSemantic',
            transforms: ['size/px'],
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
      mjs: {
        transformGroup: 'js',
        buildPath: 'dist/',
        files: [
          {
            destination: `mjs/${brand}.js`,
            format: 'javascript/esm',
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

console.log('Build started...');

const DEFAULT_BRAND = 'marine-light';
const NOT_DEFAULT_BRANDS = ['marine-dark', 'skeleton-light', 'coral-light'];
const BRANDS = [DEFAULT_BRAND, ...NOT_DEFAULT_BRANDS];

for (const brand of BRANDS) {
  console.log('\n==============================================');
  console.log(`\nProcessing: ${brand}`);

  const sd = new StyleDictionaryPackage(getStyleDictionaryConfig(brand));
  await sd.buildAllPlatforms();

  console.log('\nEnd processing');
}

console.log('\nBuild completed!');
