import type { SkeletonProps } from '@/index';
import { Skeleton } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { Skeleton };
export type { SkeletonProps };

export const meta = {
  component: Skeleton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'circular', 'rectangular'],
      table: {
        defaultValue: {
          summary: 'text',
        },
      },
      description: '形状',
    },
  },
} satisfies Meta<typeof Skeleton>;

export type Story = StoryObj<typeof meta>;
