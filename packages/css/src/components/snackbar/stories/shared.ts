import type { Meta, StoryObj } from '@storybook/html';
import { xmark } from '../../../../story_assets/inlines';

export type Args = {
  type: 'neutral' | 'info' | 'notice' | 'positive' | 'negative';
  hasClose: boolean;
  description: string;
};

export const meta: Meta<Args> = {
  parameters: {},
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['neutral', 'info', 'notice', 'positive', 'negative'],
    },
    hasClose: {
      type: 'boolean',
    },
    description: {
      type: 'string',
    },
  },
};

export type Story = StoryObj<Args>;

type ComponentArgs = Args & {
  id?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
};

export const createComponent = ({
  type = 'neutral',
  hasClose = false,
  description = 'description',
}: ComponentArgs): string => {
  const typeClass = `ab-Snackbar-${type}`;

  return `<div class="ab-Snackbar ${typeClass}">
  <p class="ab-Snackbar-label">${description}</p>
  ${
    hasClose
      ? `<button class="ab-IconButton-text ab-Snackbar-close">
    ${xmark('ab-Icon')}
  </button>`
      : ''
  }
</div>`;
};
