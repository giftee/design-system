import type { StatusLabelProps } from '@/index';
import { StatusLabel } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { StatusLabel };
export type { StatusLabelProps };

export const meta = {
  component: StatusLabel,
  args: {
    variant: 'primary',
    size: 'small',
    children: 'StatusLabelText',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'outlined',
        'neutral',
        'info',
        'notice',
        'positive',
        'negative',
        'disabled',
      ],
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
      description: '種類',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: {
          summary: 'small',
        },
      },
      description: 'サイズ',
    },
  },
} satisfies Meta<typeof StatusLabel>;

export type Story = StoryObj<typeof meta>;
