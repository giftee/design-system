import type { CircularProgressProps } from '@/index';
import { CircularProgress } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { CircularProgress };
export type { CircularProgressProps };

export const meta = {
  component: CircularProgress,
  args: {
    variant: 'brand',
    size: 'large',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['brand', 'disabled'],
      table: {
        defaultValue: {
          summary: 'brand',
        },
      },
      description: '種類',
    },
    size: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'large', 'xlarge'],
      table: {
        defaultValue: {
          summary: 'large',
        },
      },
      description: 'サイズ',
    },
  },
} satisfies Meta<typeof CircularProgress>;

export type Story = StoryObj<typeof meta>;
