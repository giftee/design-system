import { expect, fn, userEvent, within } from 'storybook/test';
import { meta, Menu, type Story } from './shared';
import type { MouseEvent } from 'react';

export default {
  ...meta,
  title: 'Menu/Interaction',
};

// テスト環境では href への遷移がテスト用 iframe を再読み込みしてしまうため、
// onClick が呼ばれたことを検証したうえで遷移だけを抑止する
const onClick = fn((event: MouseEvent<HTMLAnchorElement>) =>
  event.preventDefault(),
);

export const Collapse: Story = {
  render: () => (
    <div style={{ width: '250px' }}>
      <Menu.Root size="medium">
        <Menu.CollapseItem label="開閉メニュー" defaultOpen={false}>
          <Menu.SubMenu>
            <Menu.Item>
              <Menu.ItemLink href="#child">子メニュー</Menu.ItemLink>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.CollapseItem>
      </Menu.Root>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('button', { name: '開閉メニュー' });

    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(
      canvas.queryByRole('link', { name: '子メニュー' }),
    ).not.toBeInTheDocument();

    await userEvent.click(toggle);

    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    const child = canvas.getByRole('link', { name: '子メニュー' });
    await expect(child).toBeVisible();
    await expect(
      document.getElementById(toggle.getAttribute('aria-controls')!),
    ).toContainElement(child);

    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(
      canvas.queryByRole('link', { name: '子メニュー' }),
    ).not.toBeInTheDocument();
  },
};

export const CollapseByKeyboard: Story = {
  render: Collapse.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('button', { name: '開閉メニュー' });

    await userEvent.tab();
    await expect(toggle).toHaveFocus();

    await userEvent.keyboard('{Enter}');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');

    await userEvent.tab();
    await expect(
      canvas.getByRole('link', { name: '子メニュー' }),
    ).toHaveFocus();
  },
};

export const SelectedAndDisabled: Story = {
  render: () => (
    <div style={{ width: '250px' }}>
      <Menu.Root size="medium">
        <Menu.Item selected>
          <Menu.ItemLink href="#current" onClick={onClick}>
            選択中
          </Menu.ItemLink>
        </Menu.Item>
        <Menu.Item disabled>
          <Menu.ItemLink href="#disabled" onClick={onClick}>
            無効
          </Menu.ItemLink>
        </Menu.Item>
      </Menu.Root>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onClick.mockClear();

    const current = canvas.getByRole('link', { name: '選択中' });
    await expect(current).toHaveAttribute('aria-current', 'page');

    const disabled = canvas.getByRole('link', { name: '無効' });
    await expect(disabled).toHaveAttribute('aria-disabled', 'true');
    await expect(disabled).toHaveAttribute('tabindex', '-1');

    await userEvent.click(disabled, { pointerEventsCheck: 0 });
    await expect(onClick).not.toHaveBeenCalled();

    await userEvent.click(current);
    await expect(onClick).toHaveBeenCalledTimes(1);
  },
};
