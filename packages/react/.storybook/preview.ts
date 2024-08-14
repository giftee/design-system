import type { Preview } from '@storybook/react';
import '@giftee/abukuma-css';

const preview: Preview = {
  beforeEach: () => {
    const stories = document.getElementsByClassName('docs-story');
    for (const story of stories) {
      story?.setAttribute('class', 'ab-bg-base');
    }
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'g4b-light',
      values: [
        {
          name: 'g4b-light',
          value: '#f6f7f8',
        },
        {
          name: 'skeleton-light',
          value: '#f6f7f8',
        },
      ],
    },
  },
};

export default preview;
