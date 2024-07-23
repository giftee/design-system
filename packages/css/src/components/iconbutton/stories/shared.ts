import type { Meta, StoryObj } from '@storybook/html';
import { plus } from '../../../../story_assets/inlines';

export type Args = {
  type: 'default' | 'outlined' | 'negative' | 'neutral' | 'text';
  size: 'small' | 'medium' | 'large';
};

export const meta: Meta<Args> = {
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'negative', 'neutral', 'text'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  parameters: {},
};

export type Story = StoryObj<Args>;

type ComponentArgs = Args & {
  id?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
};

export const createComponent = ({
  size = 'small',
  type = 'default',
  id = 'default',
}: ComponentArgs): string => {
  const typeClass =
    type === 'default' ? 'ab-IconButton' : `ab-IconButton-${type}`;
  const sizeClass = `ab-IconButton-${size}`;

  return `<button id="${id}" ${
    id === 'disabled' && 'disabled="true"'
  } class="${typeClass} ${sizeClass}">
  ${plus('ab-Icon')}
</button>`;
};
