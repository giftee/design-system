import { Menu } from '@/index';
import { AngleRight, User, CircleInfo } from '@/storyAssets/inlineSvgs';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { Menu, AngleRight, User, CircleInfo };

export const meta = {
  component: Menu.Root,
  args: {},
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['medium', 'small'],
      table: {
        defaultValue: {
          summary: 'medium',
        },
        category: 'Menu.Root',
      },
      description: 'サイズ',
    },
    // @ts-expect-error Subcomponent 用
    disabled: {
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
        category: 'Menu.Item',
      },
      description: 'Item非活性',
    },
    selected: {
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
        category: 'Menu.Item',
      },
      description: 'Item選択状態',
    },
    label: {
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'string',
        },
        category: 'Menu.CollapseItem',
      },
      description: 'サブメニューラベル',
    },
    defaultOpen: {
      table: {
        defaultValue: {
          summary: 'true',
        },
        type: {
          summary: 'boolean',
        },
        category: 'Menu.CollapseItem',
      },
      description: 'サブメニューデフォルト開閉',
    },
  },
} satisfies Meta<Menu.RootProps>;

export type Story = StoryObj<typeof meta>;
