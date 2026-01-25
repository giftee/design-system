import type { ButtonProps } from '@/index';
import { Button, CircularProgress } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { Button, CircularProgress };
export type { ButtonProps };

export const meta = {
  component: Button,
  args: {
    children: 'ラベル',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'neutral', 'negative', 'text'],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
      description: '種類',
    },
    size: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'large'],
      table: {
        defaultValue: {
          summary: 'small',
        },
      },
      description: 'サイズ',
    },
    component: {
      control: { type: 'select' },
      options: [undefined, 'a'],
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'React.ElementType',
        },
      },
      description: 'component',
    },
    onClick: {
      control: { disable: true },
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary:
            '(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void',
        },
      },
      description: 'onClick',
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
} satisfies Meta<typeof Button>;

export type Story = StoryObj<typeof meta>;
