import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  required: boolean;
};

export const meta: Meta<Args> = {
  parameters: {},
  argTypes: {
    required: {
      type: 'boolean',
    },
  },
};

export type Story = StoryObj<Args>;
