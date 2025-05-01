import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  direction: 'horizontal' | 'vertical';
  size: 'small' | 'medium';
};

export const meta: Meta<Args> = {
  parameters: {},
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
  },
};

export type Story = StoryObj<Args>;
