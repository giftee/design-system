import { meta, Menu, type Story } from './shared';

export default {
  ...meta,
  title: 'Menu/Base',
};

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
