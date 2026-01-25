import type { TypographyProps } from '@/index';
import { Typography } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { Typography };
export type { TypographyProps };

export const meta = {
  component: Typography,
  args: {
    variant: 'headline-l',
    fontWeight: 'normal',
    color: 'default',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'headline-l',
        'headline-m',
        'headline-s',
        'body-m',
        'body-s',
        'body-xs',
      ],
      table: {
        defaultValue: {
          summary: 'body-m',
        },
      },
      description: '種類',
    },
    fontWeight: {
      control: { type: 'select' },
      options: ['normal', 'bold'],
      table: {
        defaultValue: {
          summary: 'normal',
        },
      },
      description: 'font-weight',
    },
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'secondary',
        'brand',
        'contrast',
        'info',
        'notice',
        'positive',
        'negative',
      ],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
      description: 'color',
    },
  },
} satisfies Meta<typeof Typography>;

export type Story = StoryObj<typeof meta>;
