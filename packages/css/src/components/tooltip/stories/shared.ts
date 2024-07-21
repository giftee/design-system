import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  position: 'top' | 'left' | 'right' | 'bottom';
};

export const meta: Meta<Args> = {
  parameters: {},
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'left', 'right', 'bottom'],
    },
  },
};

export type Story = StoryObj<Args>;
