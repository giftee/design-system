import { Menu } from '@/index';
import { AngleRight, User } from '@/storyAssets/inlineSvgs';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Menu',
  tags: ['autodocs'],
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

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Item>
        <Menu.ItemLink href="#">MenuItem</Menu.ItemLink>
      </Menu.Item>
      <Menu.Item>
        <Menu.ItemLink href="#">MenuItem</Menu.ItemLink>
      </Menu.Item>
      <Menu.Item>
        <Menu.ItemLink href="#">MenuItem</Menu.ItemLink>
      </Menu.Item>
    </Menu.Root>
  ),
};

export const Type: Story = {
  render: () => (
    <div className="ab-flex ab-gap-4">
      <div className="ab-p-2" style={{ width: '250px' }}>
        <Menu.Root>
          <Menu.Item>
            <Menu.ItemLink href="#">Link</Menu.ItemLink>
          </Menu.Item>
          <Menu.Item>
            <Menu.ItemLink href="#">
              Link with Right Icon
              <AngleRight className="ab-Icon ab-ml-auto" />
            </Menu.ItemLink>
          </Menu.Item>
          <Menu.Item>
            <Menu.ItemLink href="#">
              <User className="ab-Icon ab-mr-2" />
              Link with Left Icon
            </Menu.ItemLink>
          </Menu.Item>
          <Menu.Item>
            <Menu.ItemLink href="#">
              <User className="ab-Icon ab-mr-2" />
              Link with Both Icon
              <AngleRight className="ab-Icon ab-ml-auto" />
            </Menu.ItemLink>
          </Menu.Item>
        </Menu.Root>
      </div>
      <div className="ab-p-2" style={{ width: '250px' }}>
        <Menu.Root>
          <Menu.Item>
            <Menu.ItemLabel>Label</Menu.ItemLabel>
          </Menu.Item>
          <Menu.Item>
            <Menu.ItemLabel>
              Label with Right Icon
              <AngleRight className="ab-Icon ab-ml-auto" />
            </Menu.ItemLabel>
          </Menu.Item>
          <Menu.Item>
            <Menu.ItemLabel>
              <User className="ab-Icon ab-mr-2" />
              Label with Left Icon
            </Menu.ItemLabel>
          </Menu.Item>
          <Menu.Item>
            <Menu.ItemLabel>
              <User className="ab-Icon ab-mr-2" />
              Label with Both Icon
              <AngleRight className="ab-Icon ab-ml-auto" />
            </Menu.ItemLabel>
          </Menu.Item>
        </Menu.Root>
      </div>
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="ab-flex ab-gap-4">
      <div className="ab-p-2" style={{ width: '250px' }}>
        <Menu.Root size="medium">
          <Menu.Item>
            <Menu.ItemLink href="#">MenuItem</Menu.ItemLink>
          </Menu.Item>
          <Menu.Item>
            <Menu.ItemLink href="#">MenuItem</Menu.ItemLink>
          </Menu.Item>
          <Menu.Item>
            <Menu.ItemLink href="#">MenuItem</Menu.ItemLink>
          </Menu.Item>
        </Menu.Root>
      </div>
      <div className="ab-p-2" style={{ width: '250px' }}>
        <Menu.Root size="small">
          <Menu.Item>
            <Menu.ItemLink href="#">MenuItem</Menu.ItemLink>
          </Menu.Item>
          <Menu.Item>
            <Menu.ItemLink href="#">MenuItem</Menu.ItemLink>
          </Menu.Item>
          <Menu.Item>
            <Menu.ItemLink href="#">MenuItem</Menu.ItemLink>
          </Menu.Item>
        </Menu.Root>
      </div>
    </div>
  ),
};

export const Collapsible: Story = {
  render: () => (
    <div className="ab-p-2" style={{ width: '250px' }}>
      <Menu.Root size="medium">
        <Menu.Item>
          <Menu.ItemLink href="#">
            通常メニュー
            <AngleRight className="ab-Icon ab-ml-auto" />
          </Menu.ItemLink>
        </Menu.Item>
        <Menu.Item>
          <Menu.ItemLink href="#">
            通常メニュー
            <AngleRight className="ab-Icon ab-ml-auto" />
          </Menu.ItemLink>
        </Menu.Item>
        <Menu.CollapseItem label="開閉メニュー" defaultOpen={true}>
          <Menu.SubMenu>
            <Menu.Item>
              <Menu.ItemLink href="#">
                通常メニュー
                <AngleRight className="ab-Icon ab-ml-auto" />
              </Menu.ItemLink>
            </Menu.Item>
            <Menu.Item>
              <Menu.ItemLink href="#">
                通常メニュー
                <AngleRight className="ab-Icon ab-ml-auto" />
              </Menu.ItemLink>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.CollapseItem>
        <Menu.CollapseItem label="開閉メニュー" defaultOpen={false}>
          <Menu.SubMenu>
            <Menu.Item>
              <Menu.ItemLink href="#">
                通常メニュー
                <AngleRight className="ab-Icon ab-ml-auto" />
              </Menu.ItemLink>
            </Menu.Item>
            <Menu.Item>
              <Menu.ItemLink href="#">
                通常メニュー
                <AngleRight className="ab-Icon ab-ml-auto" />
              </Menu.ItemLink>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.CollapseItem>
      </Menu.Root>
    </div>
  ),
};
