import type { StorybookConfig } from '@storybook/types';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  framework: '@storybook/html-vite',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false,
      },
    },
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-interactions',
    'storybook-addon-pseudo-states',
  ],

  features: {
    storyStoreV7: true,
  },

  docs: {
    autodocs: true,
  },
  staticDirs: ['../dist'],
};

export default config;
