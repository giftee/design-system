import type { IconButtonProps } from '@/index';
import { IconButton } from '@/index';
import { Xmark } from '@/storyAssets/inlineSvgs';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { IconButton, Xmark };
export type { IconButtonProps };

export const meta = {
  component: IconButton,
  args: {
    variant: 'default',
    size: 'small',
    children: <Xmark className="ab-Icon" />,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'neutral', 'text', 'negative'],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
      description: '種類',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
      table: {
        defaultValue: {
          summary: 'small',
        },
      },
      description: 'サイズ',
    },
    children: {
      control: { disable: true },
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'React.ReactNode',
        },
      },
      description: 'children',
    },
  },
} satisfies Meta<typeof IconButton>;

export type Story = StoryObj<typeof meta>;
