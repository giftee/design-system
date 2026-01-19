import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { Root, Item } from './Index';

describe('Tabs', () => {
  test('タブをレンダリングする', () => {
    const { getByText } = render(
      <Root>
        <Item>タブ1</Item>
        <Item>タブ2</Item>
      </Root>,
    );

    const tab1 = getByText('タブ1');
    const tab2 = getByText('タブ2');

    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();
  });

  test('Rootにrole="tablist"が設定される', () => {
    const { container } = render(
      <Root>
        <Item>タブ</Item>
      </Root>,
    );

    const tablist = container.querySelector('[role="tablist"]');
    expect(tablist).toBeInTheDocument();
    expect(tablist).toHaveClass('ab-Tabs');
  });

  test('Itemにrole="tab"が設定される', () => {
    const { getByRole } = render(
      <Root>
        <Item>タブ</Item>
      </Root>,
    );

    const tab = getByRole('tab');
    expect(tab).toBeInTheDocument();
  });

  test('Itemにtype="button"がデフォルトで設定される', () => {
    const { getByRole } = render(
      <Root>
        <Item>タブ</Item>
      </Root>,
    );

    const tab = getByRole('tab');
    expect(tab).toHaveAttribute('type', 'button');
  });

  test('sizeプロパティが正しくCSSクラスに反映される', () => {
    const { container: small } = render(
      <Root size="small">
        <Item>タブ</Item>
      </Root>,
    );
    expect(small.querySelector('.ab-Tabs')).toHaveClass('ab-Tabs-small');

    const { container: medium } = render(
      <Root size="medium">
        <Item>タブ</Item>
      </Root>,
    );
    expect(medium.querySelector('.ab-Tabs')).toHaveClass('ab-Tabs-medium');
  });

  test('alignプロパティが正しくCSSクラスに反映される', () => {
    const { container: left } = render(
      <Root align="left">
        <Item>タブ</Item>
      </Root>,
    );
    expect(left.querySelector('.ab-Tabs')).toHaveClass('is-left');

    const { container: center } = render(
      <Root align="center">
        <Item>タブ</Item>
      </Root>,
    );
    expect(center.querySelector('.ab-Tabs')).toHaveClass('is-center');
  });

  test('fullWidthプロパティが正しくCSSクラスに反映される', () => {
    const { container } = render(
      <Root fullWidth>
        <Item>タブ</Item>
      </Root>,
    );

    expect(container.querySelector('.ab-Tabs')).toHaveClass('is-fullwidth');
  });

  test('selectedプロパティが正しくCSSクラスとaria属性に反映される', () => {
    const { getByText } = render(
      <Root>
        <Item selected>選択タブ</Item>
        <Item>非選択タブ</Item>
      </Root>,
    );

    const selectedTab = getByText('選択タブ').closest('button');
    const unselectedTab = getByText('非選択タブ').closest('button');

    expect(selectedTab).toHaveClass('is-selected');
    expect(selectedTab).toHaveAttribute('aria-selected', 'true');
    expect(unselectedTab).not.toHaveClass('is-selected');
  });

  test('disabledプロパティが正しくCSSクラスと属性に反映される', () => {
    const { getByText } = render(
      <Root>
        <Item disabled>無効タブ</Item>
      </Root>,
    );

    const disabledTab = getByText('無効タブ').closest('button');
    expect(disabledTab).toHaveClass('is-disabled');
    expect(disabledTab).toBeDisabled();
  });

  test('classNameプロパティが追加で指定できる（Root）', () => {
    const { container } = render(
      <Root className="custom-root-class">
        <Item>タブ</Item>
      </Root>,
    );

    expect(container.querySelector('.ab-Tabs')).toHaveClass(
      'ab-Tabs',
      'custom-root-class',
    );
  });

  test('classNameプロパティが追加で指定できる（Item）', () => {
    const { getByText } = render(
      <Root>
        <Item className="custom-item-class">タブ</Item>
      </Root>,
    );

    const tab = getByText('タブ').closest('button');
    expect(tab).toHaveClass('ab-Tabs-item', 'custom-item-class');
  });

  test('追加のpropsが要素に渡される', () => {
    const { container, getByRole } = render(
      <Root data-testid="tabs-root">
        <Item data-testid="tabs-item">タブ</Item>
      </Root>,
    );

    expect(container.querySelector('.ab-Tabs')).toHaveAttribute(
      'data-testid',
      'tabs-root',
    );
    expect(getByRole('tab')).toHaveAttribute('data-testid', 'tabs-item');
  });
});
