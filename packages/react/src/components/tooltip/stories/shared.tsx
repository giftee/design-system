import * as React from 'react';
import type { TooltipProps } from '@/index';
import { Tooltip } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { React, Tooltip };
export type { TooltipProps };

export const meta = {
  component: Tooltip,
  args: {
    position: 'top',
    content: 'ツールチップ',
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      table: {
        defaultValue: {
          summary: 'top',
        },
        type: {
          summary: "'top' | 'right' | 'bottom' | 'left'",
        },
      },
      description: 'ツールチップの表示位置',
    },
    content: {
      control: { type: 'text' },
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'ReactNode',
        },
      },
      description: 'ツールチップに表示するテキスト',
    },
  },
} satisfies Meta<typeof Tooltip>;

export type Story = StoryObj<typeof meta>;
