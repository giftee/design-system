import type { Meta, StoryObj } from '@storybook/html';
import { user } from '../../../../story_assets/inlines';

export type Args = {
  size: 'xxsmall' | 'xsmall' | 'small' | 'medium';
};

export const meta: Meta<Args> = {
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xxsmall', 'xsmall', 'small', 'medium'],
    },
  },
  parameters: {},
};

export type Story = StoryObj<Args>;

type ComponentArgs = Args & {
  id?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
};

export const createComponent = ({ size = 'small' }: ComponentArgs): string => {
  const sizeClass = `ab-Icon-${size}`;

  return `${user(`ab-Icon ${sizeClass}`)}`;
};
