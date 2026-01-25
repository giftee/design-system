import type { RadioProps } from '@/index';
import { Radio } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { Radio };
export type { RadioProps };

export const meta = {
  component: Radio,
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
} satisfies Meta<typeof Radio>;

export type Story = StoryObj<typeof meta>;
