import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/react-vite';
import { beforeAll } from 'vitest';
import * as projectAnnotations from './preview';

// Storybook の preview 設定（グローバル CSS・デコレーター・a11y）を
// Vitest のブラウザモードで実行されるストーリーテストにも適用する
const project = setProjectAnnotations([
  a11yAddonAnnotations,
  projectAnnotations,
]);

beforeAll(project.beforeAll);
