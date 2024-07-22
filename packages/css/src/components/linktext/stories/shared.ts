import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  type: 'default' | 'brand';
};

export const meta: Meta<Args> = {
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'brand'],
    },
  },
  parameters: {},
};

export type Story = StoryObj<Args>;

type ComponentArgs = Args & {
  children?: React.ReactNode;
  id?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
};

export const createComponent = ({
  children,
  type = 'default',
  id = 'default',
}: ComponentArgs): string => {
  const typeClass = type === 'default' ? '' : `ab-LinkText-${type}`;

  return `<a id="${id}" class="ab-LinkText ${
    id === 'disabled' ? 'is-disabled' : ''
  } ${typeClass}">${children}</a>`;
};
