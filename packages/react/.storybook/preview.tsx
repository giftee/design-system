import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/blocks';
import * as React from 'react';
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
    docs: {
      toc: true,
      page: () => (
        <>
          <div>
            <select
              name="mode"
              id="mode-select"
              style={{
                color: 'gray',
                fontSize: '0.9rem',
                padding: 8,
                borderStyle: 'solid',
                borderWidth: '2px',
                borderColor: 'lightgrey',
                borderRadius: 8,
                paddingRight: 45,
                backgroundImage:
                  'linear-gradient(45deg, transparent 50%, gray 50%),linear-gradient(135deg, gray 50%, transparent 50%),linear-gradient(to right, #ccc, #ccc)',
                backgroundPosition:
                  'calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),calc(100% - 2.5em) 0.5em',
                backgroundSize: '5px 5px,5px 5px,1px 1.5em',
                backgroundRepeat: 'no-repeat',
                display: 'block',
                marginLeft: 'auto',
                marginTop: -50,
              }}
              onChange={(e) =>
                document
                  .getElementById('canvas-root')
                  ?.setAttribute('data-theme', e.target.value)
              }
            >
              <option value="">テーマを選択</option>
              <option value="marine-light">marine-light </option>
              <option value="marine-dark">marine-dark</option>
              <option value="skeleton-light">skeleton-light</option>
              <option value="coral-light">coral-light</option>
            </select>
            <div id="canvas-root">
              <Title />
              <Subtitle />
              <Description />
              <Primary />
              <Controls />
              <Stories />
            </div>
          </div>
        </>
      ),
    },
  },
};

export default preview;
