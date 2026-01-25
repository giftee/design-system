import type { LinkTextProps } from '@/index';
import { LinkText } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { LinkText };
export type { LinkTextProps };

export const meta = {
  component: LinkText,
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'brand'],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
      description: '種類',
    },
  },
} satisfies Meta<typeof LinkText>;

export type Story = StoryObj<typeof meta>;
