import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  required: boolean;
  disabledType?: 'class' | 'attribute';
};

export const meta: Meta<Args> = {
  argTypes: {
    required: {
      type: 'boolean',
    },
    disabledType: {
      control: { type: 'select' },
      options: ['class', 'attribute'],
    },
  },
  parameters: {},
};

export type Story = StoryObj<Args>;
