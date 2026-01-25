import { InlineAlert } from '@/index';
import {
  CircleInfo,
  CircleExclamation,
  TriangleExclamation,
  CircleCheck,
} from '@/storyAssets/inlineSvgs';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { InlineAlert, CircleInfo, CircleExclamation, TriangleExclamation, CircleCheck };

export const meta = {
  component: InlineAlert.Root,
  args: {
    variant: 'neutral',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['neutral', 'info', 'notice', 'positive', 'negative'],
      table: {
        defaultValue: {
          summary: 'neutral',
        },
      },
      description: '種類',
    },
  },
} satisfies Meta<InlineAlert.RootProps>;

export type Story = StoryObj<typeof meta>;
