import type { BadgeProps } from '@/index';
import { Badge } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { Badge };
export type { BadgeProps };

export const meta = {
  component: Badge,
  argTypes: {
    isDot: {
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
      description: 'ドットバッジ',
    },
  },
} satisfies Meta<typeof Badge>;

export type Story = StoryObj<typeof meta>;
