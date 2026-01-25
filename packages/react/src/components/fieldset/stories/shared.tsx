import type { FieldsetProps } from '@/index';
import { Fieldset, Radio, Checkbox } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { Fieldset, Radio, Checkbox };
export type { FieldsetProps };

export const meta = {
  component: Fieldset,
  args: {
    direction: 'horizontal',
  },
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      table: {
        defaultValue: {
          summary: 'horizontal',
        },
      },
      description: '方向',
    },
    title: {
      control: { type: 'text' },
      description: 'フィールドセットのタイトル',
    },
  },
} satisfies Meta<typeof Fieldset>;

export type Story = StoryObj<typeof meta>;
