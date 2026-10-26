// TypeScript 7 は JS Compiler API を提供しないため、typescript-eslint には TS 6 の API を使わせる。
// tsc は TS 7 のまま、typescript-eslint 系・Storybook docgen の `typescript` 参照だけを @typescript/typescript6 に差し替える。
// unplugin-dts (vite-plugin-dts) は TS 7 を使いつつ、fallback として @typescript/typescript6 を自身の位置から解決するため、依存として追加する。
const TS6 = 'npm:@typescript/typescript6@6.0.2';
const TARGETS = /^@typescript-eslint\/(eslint-plugin|parser|type-utils|typescript-estree|utils|project-service|tsconfig-utils)$|^ts-api-utils$|^react-docgen-typescript$|^@joshwooding\/vite-plugin-react-docgen-typescript$/;

const TS6_FALLBACK = '@typescript/typescript6';

module.exports = {
  hooks: {
    readPackage(pkg) {
      if (TARGETS.test(pkg.name) && pkg.peerDependencies?.typescript) {
        delete pkg.peerDependencies.typescript;
        pkg.dependencies = { ...pkg.dependencies, typescript: TS6 };
      }
      if (pkg.name === 'unplugin-dts') {
        pkg.dependencies = { ...pkg.dependencies, [TS6_FALLBACK]: '6.0.2' };
      }
      return pkg;
    },
  },
};
