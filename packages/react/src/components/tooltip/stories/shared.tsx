import { Tooltip } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { Tooltip };

export const meta = {
  component: Tooltip.Root,
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      table: {
        defaultValue: {
          summary: 'top',
        },
        type: {
          summary: "'top' | 'right' | 'bottom' | 'left'",
        },
      },
      description: 'ツールチップの表示位置',
    },
  },
} satisfies Meta<Tooltip.RootProps>;

export type Story = StoryObj<typeof meta>;
