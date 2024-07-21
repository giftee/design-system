import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  type: 'basic' | 'dot';
};

export const meta: Meta<Args> = {
  parameters: {},
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['basic', 'dot'],
    },
  },
};

export type Story = StoryObj<Args>;

type ComponentArgs = Args & {
  text?: string;
  hasIcon?: boolean;
  id?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
};

export const createComponent = ({
  type = 'basic',
  hasIcon = false,
  text = '1',
  id = 'default',
}: ComponentArgs): string => {
  const typeClass = type === 'dot' ? 'ab-Badge-dot' : '';
  const finalText = type === 'dot' ? '' : text;
  const iconClass = hasIcon ? 'ab-Badge-icon' : '';

  return `<span id=${id} class="ab-Badge ${typeClass} ${iconClass}">${finalText}</span>`;
};
