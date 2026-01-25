import { Accordion } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { Accordion };

export const meta = {
  component: Accordion.Root,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
      description: 'サイズ',
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
      description: '非活性',
    },
  },
} satisfies Meta<Accordion.RootProps>;

export type Story = StoryObj<typeof meta>;
