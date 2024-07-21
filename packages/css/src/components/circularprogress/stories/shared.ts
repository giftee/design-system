import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  size?: 'xsmall' | 'small' | 'large' | 'xlarge';
  type?: 'brand' | 'disabled';
};

export const meta: Meta<Args> = {
  parameters: {},
  argTypes: {},
};

export type Story = StoryObj<Args>;

type ComponentArgs = Args;

export const createComponent = ({
  size = 'xlarge',
  type = 'brand',
}: ComponentArgs): string => {
  const sizeClass = `ab-CircularProgress-${size}`;
  const typeClass = `ab-CircularProgress-${type}`;

  return `<div class="ab-CircularProgress ${sizeClass} ${typeClass}"></div>`;
};
