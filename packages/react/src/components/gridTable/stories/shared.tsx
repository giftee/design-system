import { Typography } from '@/components/typography/Index';
import { GridTable } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { GridTable, Typography };

export const meta = {
  component: GridTable.Root,
  args: {
    columnsCount: 4,
    isSelectable: false,
    isBordered: false,
  },
  argTypes: {
    columnsCount: {
      type: 'number',
      table: {
        defaultValue: {
          summary: '4',
        },
        category: 'GridTable.Root',
      },
      description: 'ヘッダーカラム数',
    },
    isSelectable: {
      type: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
        category: 'GridTable.Root',
      },
      description: '行選択',
    },
    isBordered: {
      type: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
        category: 'GridTable.Root',
      },
      description: '行ボーダー',
    },
  },
} satisfies Meta<GridTable.RootProps>;

export type Story = StoryObj<typeof meta>;
