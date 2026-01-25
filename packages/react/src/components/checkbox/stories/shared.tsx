import type { CheckboxProps } from '@/index';
import { Checkbox } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { Checkbox };
export type { CheckboxProps };

export const meta = {
  component: Checkbox,
  args: {
    position: 'right',
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      table: {
        defaultValue: {
          summary: 'right',
        },
      },
      description: 'ラベル位置',
    },
    name: {
      control: { type: 'text' },
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'string',
        },
      },
      description: 'Checkbox の name。label と input を紐づけるのに必須',
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
      description: '非活性',
    },
  },
} satisfies Meta<typeof Checkbox>;

export type Story = StoryObj<typeof meta>;
