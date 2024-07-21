import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  type: 'horizontal' | 'vertical';
  size: 'small' | 'medium' | 'large';
};

export const meta: Meta<Args> = {
  parameters: {},
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export type Story = StoryObj<Args>;

type ComponentArgs = Args & {
  id?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
};

export const createComponent = ({
  type = 'horizontal',
  size = 'small',
}: ComponentArgs): string => {
  const typeClass = type === 'horizontal' ? 'ab-Divider' : `ab-Divider-${type}`;
  const sizeClass = `ab-Divider-${size}`;

  return `<hr class="${typeClass} ${sizeClass}" />`;
};
