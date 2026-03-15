import type { Meta, StoryObj } from '@storybook/html';
import { plus } from '../../../../story_assets/inlines';

export type Args = {
  type: 'default' | 'outlined' | 'neutral' | 'text' | 'negative';
  size: 'small' | 'medium' | 'large';
};

export const meta: Meta<Args> = {
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'neutral', 'text', 'negative'],
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
  label?: string;
};

export const createComponent = ({
  size = 'small',
  type = 'default',
  id = 'default',
  label = '追加',
}: ComponentArgs): string => {
  const typeClass =
    type === 'default' ? 'ab-IconButton' : `ab-IconButton-${type}`;
  const sizeClass = `ab-IconButton-${size}`;

  return `<button id="${id}" ${
    id === 'disabled' && 'disabled="true"'
  } type="button" aria-label="${label}" class="${typeClass} ${sizeClass}">
  ${plus('ab-Icon')}
</button>`;
};
