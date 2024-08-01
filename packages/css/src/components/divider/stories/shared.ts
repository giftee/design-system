import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  type: 'horizontal' | 'vertical';
};

export const meta: Meta<Args> = {
  parameters: {},
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
};

export type Story = StoryObj<Args>;

type ComponentArgs = Args & {
  id?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
};

export const createComponent = ({
  type = 'horizontal',
}: ComponentArgs): string => {
  const typeClass = type === 'horizontal' ? 'ab-Divider' : `ab-Divider-${type}`;

  return `<hr class="${typeClass}" />`;
};
