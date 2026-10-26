// TypeScript 7 は JS Compiler API を提供しないため、typescript-eslint には TS 6 の API を使わせる。
// tsc / vite-plugin-dts 以外の `typescript` 参照 (typescript-eslint 系・Storybook docgen) だけを @typescript/typescript6 に差し替える。
const TS6 = 'npm:@typescript/typescript6@6.0.2';
const TARGETS = /^@typescript-eslint\/(eslint-plugin|parser|type-utils|typescript-estree|utils|project-service|tsconfig-utils)$|^ts-api-utils$|^react-docgen-typescript$|^@joshwooding\/vite-plugin-react-docgen-typescript$/;

module.exports = {
  hooks: {
    readPackage(pkg) {
      if (TARGETS.test(pkg.name) && pkg.peerDependencies?.typescript) {
        delete pkg.peerDependencies.typescript;
        pkg.dependencies = { ...pkg.dependencies, typescript: TS6 };
      }
      return pkg;
    },
  },
};
