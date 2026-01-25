import { meta, Menu, type Story } from './shared';

export default {
  ...meta,
  title: 'Menu/Size',
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
