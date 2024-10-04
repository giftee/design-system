import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  type: 'default' | 'brand';
  quiet: boolean;
};

export const meta: Meta<Args> = {
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'brand'],
    },
    quiet: {
      type: 'boolean',
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
  quiet = false,
  id = 'default',
}: ComponentArgs): string => {
  const typeClass = type === 'default' ? '' : `ab-LinkText-${type}`;
  const quietClass = quiet && 'ab-LinkText-quiet';

  return `<a id="${id}" class="ab-LinkText ${
    id === 'disabled' ? 'is-disabled' : ''
  } ${typeClass} ${quietClass}">${children}</a>`;
};
