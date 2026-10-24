import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      projects: [
        {
          // 既存のユニットテスト (happy-dom)
          extends: true,
          test: {
            name: 'unit',
            globals: true,
            environment: 'happy-dom',
            include: ['src/**/*.spec.{ts,tsx}'],
            setupFiles: './src/tests/vitest.setup.ts',
          },
        },
        {
          // Storybook の play 関数 + a11y をブラウザ (Chromium) で実行
          extends: true,
          plugins: [
            storybookTest({
              configDir: path.join(dirname, '.storybook'),
              storybookScript: 'pnpm storybook --no-open',
            }),
          ],
          test: {
            name: 'storybook',
            browser: {
              enabled: true,
              // PLAYWRIGHT_CHANNEL=chrome を指定するとローカルの Google Chrome を使う（Chromium の DL 不要）
              provider: playwright({
                launchOptions: process.env.PLAYWRIGHT_CHANNEL
                  ? { channel: process.env.PLAYWRIGHT_CHANNEL }
                  : undefined,
              }),
              headless: true,
              instances: [{ browser: 'chromium' }],
            },
            setupFiles: ['./.storybook/vitest.setup.ts'],
          },
        },
      ],
    },
  }),
);
