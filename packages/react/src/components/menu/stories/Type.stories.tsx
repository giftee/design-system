import { meta, Menu, AngleRight, User, type Story } from './shared';

export default {
  ...meta,
  title: 'Menu/Type',
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
