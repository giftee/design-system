import type { StorybookConfig } from '@storybook/html-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
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
    'storybook-addon-pseudo-states',
    '@storybook/addon-a11y',
  ],


  staticDirs: ['../dist'],
};

export default config;
