import { Typography } from '@/components/typography/Index';
import { Table } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { Table, Typography };

export const meta = {
  component: Table.Root,
  args: {
    isStripe: false,
    isSelectable: false,
  },
  argTypes: {
    isStripe: {
      type: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
      description: 'ストライプ',
    },
    isSelectable: {
      type: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
      description: '行選択',
    },
  },
} satisfies Meta<Table.RootProps>;

export type Story = StoryObj<typeof meta>;
