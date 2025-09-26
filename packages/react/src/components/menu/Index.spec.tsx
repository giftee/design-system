import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, test, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { User } from '@/storyAssets/inlineSvgs';

import {
  Root,
  Item,
  ItemLabel,
  ItemLink,
  CollapseItem,
  SubMenu,
} from './Index';

describe('Menu', () => {
  test('メニューをレンダリングする', () => {
    const { container } = render(
      <Root>
        <Item>
          <ItemLabel>メニュー項目</ItemLabel>
        </Item>
      </Root>,
    );

    const menu = container.querySelector('.ab-Menu');
    expect(menu).toBeInTheDocument();
    expect(menu).toHaveAttribute('role', 'menu');
  });

  test('サイズプロパティが正しくCSSクラスに反映される', () => {
    const { container } = render(
      <Root size="small">
        <Item>
          <ItemLabel>小さいメニュー</ItemLabel>
        </Item>
      </Root>,
    );

    const menu = container.querySelector('.ab-Menu');
    expect(menu).toHaveClass('ab-Menu-small');
  });

  test('メニュー項目が正しくレンダリングされる', () => {
    const { getByText } = render(
      <Root>
        <Item>
          <ItemLabel>メニュー項目</ItemLabel>
        </Item>
      </Root>,
    );

    const menuItem = getByText('メニュー項目').closest('.ab-Menu-item');
    expect(menuItem).toBeInTheDocument();
    expect(menuItem).toHaveAttribute('role', 'menuitem');
  });

  test('メニュー項目のラベルが正しくレンダリングされる', () => {
    const { getByText } = render(
      <Root>
        <Item>
          <ItemLabel>メニューラベル</ItemLabel>
        </Item>
      </Root>,
    );

    const menuItemLabel = getByText('メニューラベル');
    expect(menuItemLabel).toBeInTheDocument();
    expect(menuItemLabel).toHaveClass('ab-Menu-item-label');
  });

  test('メニュー項目のリンクが正しくレンダリングされる', () => {
    const { getByText } = render(
      <Root>
        <Item>
          <ItemLink href="/test">メニューリンク</ItemLink>
        </Item>
      </Root>,
    );

    const menuItemLink = getByText('メニューリンク');
    expect(menuItemLink).toBeInTheDocument();
    expect(menuItemLink).toHaveClass('ab-Menu-item-link');
    expect(menuItemLink.closest('a')).toHaveAttribute('href', '/test');
  });

  test('折りたたみメニュー項目が正しくレンダリングされる', () => {
    const { getByText } = render(
      <Root>
        <CollapseItem label="折りたたみメニュー">
          <SubMenu>
            <Item>
              <ItemLabel>サブ項目</ItemLabel>
            </Item>
          </SubMenu>
        </CollapseItem>
      </Root>,
    );

    const collapseSummary = getByText('折りたたみメニュー');
    expect(collapseSummary).toBeInTheDocument();
    expect(collapseSummary.closest('.ab-Menu-item')).toBeInTheDocument();
  });

  test('アイコン付き折りたたみメニュー項目が正しくレンダリングされる', () => {
    const { getByRole } = render(
      <Root>
        <CollapseItem
          label={
            <div className="ab-flex ab-flex-row ab-flex-justify-between ab-flex-items-center">
              <User className="ab-Icon" />
              <span className="ab-ml-2">アイコン付きメニュー</span>
            </div>
          }
        >
          <SubMenu>
            <Item>
              <ItemLabel>サブ項目</ItemLabel>
            </Item>
          </SubMenu>
        </CollapseItem>
      </Root>,
    );

    const menuButton = getByRole('button', { name: /アイコン付きメニュー/i });
    const icon = menuButton.querySelector('svg.ab-Icon');
    expect(menuButton).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  test('サブメニューが正しくレンダリングされる', () => {
    const { container } = render(
      <Root>
        <Item>
          <ItemLabel>メニュー項目</ItemLabel>
          <SubMenu>
            <Item>
              <ItemLabel>サブメニュー項目</ItemLabel>
            </Item>
          </SubMenu>
        </Item>
      </Root>,
    );

    const subMenu = container.querySelector('.ab-Menu-sub-menu');
    expect(subMenu).toBeInTheDocument();
  });

  test('クリックイベントが正しく処理される', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    const { getByText } = render(
      <Root>
        <Item onClick={handleClick}>
          <ItemLabel>クリック可能項目</ItemLabel>
        </Item>
      </Root>,
    );

    const menuItem = getByText('クリック可能項目').closest('li');
    await user.click(menuItem as HTMLElement);

    expect(handleClick).toHaveBeenCalledOnce();
  });

  test('classNameプロパティが追加で指定できる（Root）', () => {
    const { container } = render(
      <Root className="custom-class">
        <Item>
          <ItemLabel>メニュー項目</ItemLabel>
        </Item>
      </Root>,
    );

    const menu = container.querySelector('.ab-Menu');
    expect(menu).toHaveClass('ab-Menu', 'custom-class');
  });

  test('classNameプロパティが追加で指定できる（Item）', () => {
    const { getByText } = render(
      <Root>
        <Item className="custom-item-class">
          <ItemLabel>メニュー項目</ItemLabel>
        </Item>
      </Root>,
    );

    const menuItem = getByText('メニュー項目').closest('.ab-Menu-item');
    expect(menuItem).toHaveClass('ab-Menu-item', 'custom-item-class');
  });

  test('classNameプロパティが追加で指定できる（ItemLabel）', () => {
    const { getByText } = render(
      <Root>
        <Item>
          <ItemLabel className="custom-label-class">カスタムラベル</ItemLabel>
        </Item>
      </Root>,
    );

    const label = getByText('カスタムラベル');
    expect(label).toHaveClass('ab-Menu-item-label', 'custom-label-class');
  });

  test('classNameプロパティが追加で指定できる（ItemLink）', () => {
    const { getByText } = render(
      <Root>
        <Item>
          <ItemLink href="/test" className="custom-link-class">
            カスタムリンク
          </ItemLink>
        </Item>
      </Root>,
    );

    const link = getByText('カスタムリンク');
    expect(link).toHaveClass('ab-Menu-item-link', 'custom-link-class');
  });
});
