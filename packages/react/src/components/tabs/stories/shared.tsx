import { Tabs } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { Tabs };

export const meta = {
  component: Tabs.Root,
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
    align: {
      control: { type: 'select' },
      options: ['left', 'center'],
      table: {
        defaultValue: {
          summary: 'left',
        },
      },
      description: '配置',
    },
    fullWidth: {
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
      description: '全幅表示',
    },
  },
} satisfies Meta<Tabs.RootProps>;

export type Story = StoryObj<typeof meta>;
