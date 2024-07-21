import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  type:
    | 'primary'
    | 'outlined'
    | 'neutral'
    | 'info'
    | 'notice'
    | 'positive'
    | 'negative'
    | 'disabled';
  size: 'small' | 'medium' | 'large';
  label: string;
};

export const meta: Meta<Args> = {
  parameters: {},
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'primary',
        'outlined',
        'neutral',
        'info',
        'notice',
        'positive',
        'negative',
        'disabled',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    label: {
      type: 'string',
    },
  },
};

export type Story = StoryObj<Args>;

type ComponentArgs = Args & {
  id?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
};

export const createComponent = ({
  type = 'primary',
  size = 'small',
  label = 'label',
}: ComponentArgs): string => {
  const typeClass = `ab-StatusLabel-${type}`;
  const sizeClass = `ab-StatusLabel-${size}`;

  return `<div class="ab-StatusLabel ${typeClass} ${sizeClass}">
  <div>${label}</div>
</div>`;
};
