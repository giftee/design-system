import { meta, Menu, type Story } from './shared';

export default {
  ...meta,
  title: 'Menu/Base',
};

export const Base: Story = {
  render: () => (
    <nav aria-label="サイドメニュー" style={{ width: '250px' }}>
      <Menu.Root>
        <Menu.Item selected>
          <Menu.ItemLink href="/dashboard">ダッシュボード</Menu.ItemLink>
        </Menu.Item>
        <Menu.Item>
          <Menu.ItemLink href="/orders">注文一覧</Menu.ItemLink>
        </Menu.Item>
        <Menu.Item>
          <Menu.ItemLink href="/gift-settings">ギフト設定</Menu.ItemLink>
        </Menu.Item>
        <Menu.Item disabled>
          <Menu.ItemLink href="/billing">請求情報</Menu.ItemLink>
        </Menu.Item>
      </Menu.Root>
    </nav>
  ),
};
