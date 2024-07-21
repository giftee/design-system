import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  type: 'neutral' | 'info' | 'positive' | 'notice' | 'negative';
};

export const meta: Meta<Args> = {
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['neutral', 'info', 'positive', 'notice', 'negative'],
    },
  },
  parameters: {},
};

export type Story = StoryObj<Args>;
