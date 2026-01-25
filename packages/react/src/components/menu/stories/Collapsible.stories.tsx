import { meta, Menu, AngleRight, User, CircleInfo, type Story } from './shared';

export default {
  ...meta,
  title: 'Menu/Collapsible',
};

export const Collapsible: Story = {
  render: () => (
    <div className="ab-flex ab-gap-4">
      <div className="ab-p-2" style={{ width: '250px' }}>
        <Menu.Root size="medium">
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
            </Menu.SubMenu>
          </Menu.CollapseItem>
        </Menu.Root>
      </div>
      <div className="ab-p-2" style={{ width: '250px' }}>
        <Menu.Root size="medium">
          <Menu.Item>
            <Menu.ItemLink href="#">
              通常メニュー
              <AngleRight className="ab-Icon ab-ml-auto" />
            </Menu.ItemLink>
          </Menu.Item>
          <Menu.CollapseItem
            label={
              <div className="ab-flex ab-flex-row ab-flex-justify-between ab-flex-items-center">
                <CircleInfo className="ab-Icon" />
                <span className="ab-ml-2">ギフト購入</span>
              </div>
            }
            defaultOpen={true}
          >
            <Menu.SubMenu>
              <Menu.Item>
                <Menu.ItemLink href="#">
                  デジタルギフト
                  <AngleRight className="ab-Icon ab-ml-auto" />
                </Menu.ItemLink>
              </Menu.Item>
              <Menu.Item>
                <Menu.ItemLink href="#">
                  物理ギフト
                  <AngleRight className="ab-Icon ab-ml-auto" />
                </Menu.ItemLink>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu.CollapseItem>
          <Menu.CollapseItem
            label={
              <div className="ab-flex ab-flex-row ab-flex-justify-between ab-flex-items-center">
                <User className="ab-Icon" />
                <span className="ab-ml-2">ユーザー管理</span>
              </div>
            }
            defaultOpen={false}
          >
            <Menu.SubMenu>
              <Menu.Item>
                <Menu.ItemLink href="#">
                  プロフィール
                  <AngleRight className="ab-Icon ab-ml-auto" />
                </Menu.ItemLink>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu.CollapseItem>
        </Menu.Root>
      </div>
    </div>
  ),
};
