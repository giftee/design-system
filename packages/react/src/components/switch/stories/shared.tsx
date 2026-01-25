import type { SwitchProps } from '@/index';
import { Switch } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { Switch };
export type { SwitchProps };

export const meta = {
  component: Switch,
  args: {
    position: 'right',
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      table: {
        defaultValue: {
          summary: 'right',
        },
      },
      description: 'ラベル位置',
    },
  },
} satisfies Meta<typeof Switch>;

export type Story = StoryObj<typeof meta>;
