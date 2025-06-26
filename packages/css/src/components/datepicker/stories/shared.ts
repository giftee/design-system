import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  required: boolean;
  disabled?: boolean;
};

export const meta: Meta<Args> = {
  argTypes: {
    required: {
      type: 'boolean',
    },
    disabled: {
      type: 'boolean',
    },
  },
  parameters: {},
};

export type Story = StoryObj<Args>;
