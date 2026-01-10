# Dependency Audit Report

**Date:** 2026-01-10
**Total node_modules size:** 297MB
**Package manager:** pnpm 10.27.0

---

## Security Vulnerabilities

### HIGH Severity

| Package | Vulnerability | Affected Versions | Patched Version | Path |
|---------|--------------|-------------------|-----------------|------|
| `glob` | Command injection via `-c/--cmd` executes matches with `shell:true` | `>=11.0.0 <11.1.0` | `>=11.1.0` | `markuplint` -> `@markuplint/file-resolver` -> `glob@11.0.3` |

**Details:** [GHSA-5j98-mcp5-4vw2](https://github.com/advisories/GHSA-5j98-mcp5-4vw2)

**Recommended Action:** The vulnerability is in a transitive dependency of markuplint. The latest `@markuplint/file-resolver@4.9.17` still uses `glob@11.0.3`. Options:
1. Add a `pnpm.overrides` to force `glob@11.1.0`
2. Wait for markuplint to update their dependency
3. Consider if markuplint is essential for the project

---

## Outdated Packages

Minor version updates available:

| Package | Current | Latest | Location |
|---------|---------|--------|----------|
| `@eslint/compat` | 2.0.0 | 2.0.1 | react |
| `@storybook/*` (all) | 10.1.10 | 10.1.11 | css, react |
| `@types/react` | 19.2.7 | 19.2.8 | css, react |
| `globals` | 16.5.0 | 17.0.0 | react |

---

## Potentially Unnecessary Dependencies

### packages/css

#### 1. `@babel/core` and `babel-loader`
- **Status:** Likely unnecessary
- **Reason:** Storybook 10 uses Vite as its builder, not webpack. These babel dependencies appear to be legacy from an older Storybook version.
- **Evidence:** `.storybook/main.ts` uses `@storybook/html-vite` framework, no babel config files exist in the package.
- **Recommendation:** Remove both packages and verify Storybook still builds correctly.
- **Potential savings:** ~15-20MB

### packages/react

#### 1. `dialog-polyfill`
- **Status:** Likely unnecessary
- **Reason:** Only used in Storybook stories (`Modal.stories.tsx`), not in the production library code. The `<dialog>` element has excellent browser support since 2022:
  - Chrome 37+ (2014)
  - Safari 15.4+ (2022)
  - Firefox 98+ (2022)
- **Recommendation:** Remove from dependencies and update the Modal story to not use the polyfill, or document that it's only for Storybook demonstration purposes.
- **Potential savings:** ~93KB

#### 2. `.eslintrc.json` (redundant file)
- **Status:** Redundant
- **Reason:** Both `.eslintrc.json` and `eslint.config.mjs` exist. ESLint 9+ uses flat config by default (`eslint.config.mjs`), and the current setup uses `FlatCompat` from `@eslint/eslintrc` to bridge the old format.
- **Recommendation:** Delete `.eslintrc.json` as it's not being used.

---

## Duplicate Dependencies Across Packages

These dev dependencies are duplicated in multiple packages. This is common in monorepos but could be hoisted to root if desired:

| Dependency | Locations |
|------------|-----------|
| `prettier` | css, designTokens, react |
| `typescript` | css, react |
| `vite` | css, react |
| `react`, `react-dom` | css, react |
| `@types/react`, `@types/react-dom` | css, react |
| `@storybook/addon-a11y` | css, react |
| `@storybook/addon-docs` | css, react |
| `storybook` | css, react |

**Note:** pnpm efficiently deduplicates these in `node_modules`, so there's no disk space waste. Keeping them per-package maintains explicit dependencies, which is a valid pattern.

---

## Recommended Actions

### Immediate (Security)

1. **Fix glob vulnerability** by adding to root `package.json`:
   ```json
   {
     "pnpm": {
       "overrides": {
         "glob@>=11.0.0 <11.1.0": "11.1.0"
       }
     }
   }
   ```

### Short-term (Cleanup)

2. **Remove unused babel dependencies from css package:**
   ```bash
   cd packages/css
   pnpm remove @babel/core babel-loader
   ```

3. **Delete redundant eslint config:**
   ```bash
   rm packages/react/.eslintrc.json
   ```

4. **Update minor versions:**
   ```bash
   pnpm update @eslint/compat @types/react globals
   pnpm update @storybook/addon-a11y @storybook/addon-docs @storybook/html-vite @storybook/react-vite storybook storybook-addon-pseudo-states eslint-plugin-storybook
   ```

### Consider (Optimization)

5. **Evaluate dialog-polyfill necessity** - If browser support for `<dialog>` meets your requirements, remove it from react package.

6. **Modernize ESLint config** - The current flat config uses `FlatCompat` for backwards compatibility. Consider migrating to native flat config to eventually remove `@eslint/eslintrc` dependency.

---

## Summary

| Category | Count | Severity |
|----------|-------|----------|
| Security vulnerabilities | 1 | HIGH |
| Outdated packages | 8 | Low (minor versions) |
| Potentially unnecessary deps | 3 | Low |
| Redundant files | 1 | Low |

**Total estimated savings from cleanup:** ~15-20MB in node_modules
