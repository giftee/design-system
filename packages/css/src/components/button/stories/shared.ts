import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  type: 'default' | 'outlined' | 'negative' | 'neutral' | 'text';
  size: 'xsmall' | 'small' | 'large';
};

export const meta: Meta<Args> = {
  parameters: {},
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'negative', 'neutral', 'text'],
    },
    size: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'large'],
    },
  },
};

export type Story = StoryObj<Args>;

type ComponentArgs = Args & {
  children?: React.ReactNode;
  id?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
};

export const createComponent = ({
  type = 'default',
  size = 'small',
  children = 'Label',
  id = 'default',
}: ComponentArgs): string => {
  const typeClass = type === 'default' ? 'ab-Button' : `ab-Button-${type}`;
  const sizeClass = `ab-Button-${size}`;
  const disabled = id === 'disabled';

  return disabled
    ? `<button id="${id}" disabled="true" class="${typeClass} ${sizeClass}">${children}</button>`
    : `<button id="${id}" class="${typeClass} ${sizeClass}">${children}</button>`;
};
