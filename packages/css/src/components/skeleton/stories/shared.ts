import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  type: 'text' | 'circular' | 'rectangular';
};

export const meta: Meta<Args> = {
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'circular', 'rectangular'],
    },
  },
};

type ComponentArgs = Args & {
  classNames?: string;
};

export const createComponent = ({
  type = 'text',
  classNames,
}: ComponentArgs): string => {
  const typeClass = `ab-Skeleton-${type}`;

  return `<div class="ab-Skeleton ${typeClass} ${classNames}"></div>`;
};

export type Story = StoryObj<Args>;
