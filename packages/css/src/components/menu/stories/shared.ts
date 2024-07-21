import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  size: 'small' | 'medium';
};

export const meta: Meta<Args> = {
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
    },
  },
  parameters: {},
};

export type Story = StoryObj<Args>;
