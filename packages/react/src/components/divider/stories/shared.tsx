import type { DividerProps } from '@/index';
import { Divider } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { Divider };
export type { DividerProps };

export const meta = {
  component: Divider,
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
  },
} satisfies Meta<typeof Divider>;

export type Story = StoryObj<typeof meta>;
