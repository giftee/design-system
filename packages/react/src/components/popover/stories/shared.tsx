import { PopOver, Menu, Button } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { PopOver, Menu, Button };

export const meta = {
  component: PopOver,
  args: {
    open: true,
    placement: 'top',
    align: 'center',
  },
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      table: {
        defaultValue: { summary: 'top' },
      },
      description: 'トリガー要素を基準とした表示位置',
    },
    align: {
      control: { type: 'select' },
      options: ['center', 'start', 'end'],
      table: {
        defaultValue: { summary: 'center' },
      },
      description: 'トリガー要素の主軸方向に対する整列',
    },
    open: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
      description: '開閉状態',
    },
  },
} satisfies Meta<typeof PopOver>;

export type Story = StoryObj<typeof meta>;

export const PopOverMenu = (
  <nav aria-label="Popover links">
    <Menu.Root size="small">
      <Menu.Item>
        <Menu.ItemLink href="#">MenuItem1</Menu.ItemLink>
      </Menu.Item>
      <Menu.Item>
        <Menu.ItemLink href="#">MenuItem2</Menu.ItemLink>
      </Menu.Item>
    </Menu.Root>
  </nav>
);
