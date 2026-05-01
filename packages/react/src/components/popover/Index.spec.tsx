import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom';

import { PopOver } from './Index';

describe('PopOver', () => {
  test('PopOverをレンダリングする', () => {
    const { container } = render(<PopOver>content</PopOver>);

    const popover = container.querySelector('.ab-Popover');
    expect(popover).toBeInTheDocument();
  });

  test('デフォルトの表示位置（placement=top, align=center）が適用される', () => {
    const { container } = render(<PopOver>content</PopOver>);

    const popover = container.querySelector('.ab-Popover');
    expect(popover).toHaveClass('ab-Popover-top');
    expect(popover).not.toHaveClass('ab-Popover-top-center');
  });

  test('placementプロパティがCSSクラスに反映される', () => {
    const { container } = render(<PopOver placement="bottom">content</PopOver>);

    const popover = container.querySelector('.ab-Popover');
    expect(popover).toHaveClass('ab-Popover-bottom');
  });

  test('alignがstartのとき位置クラスにstartサフィックスが付く', () => {
    const { container } = render(
      <PopOver placement="top" align="start">
        content
      </PopOver>,
    );

    const popover = container.querySelector('.ab-Popover');
    expect(popover).toHaveClass('ab-Popover-top-start');
  });

  test('alignがendのとき位置クラスにendサフィックスが付く', () => {
    const { container } = render(
      <PopOver placement="bottom" align="end">
        content
      </PopOver>,
    );

    const popover = container.querySelector('.ab-Popover');
    expect(popover).toHaveClass('ab-Popover-bottom-end');
  });

  test('open時にis-openクラスが付与され、hidden属性が外れる', () => {
    const { container } = render(<PopOver open>content</PopOver>);

    const popover = container.querySelector('.ab-Popover');
    expect(popover).toHaveClass('is-open');
    expect(popover).not.toHaveAttribute('hidden');
  });

  test('閉じている時はis-openクラスが付与されず、hidden属性が付与される', () => {
    const { container } = render(<PopOver>content</PopOver>);

    const popover = container.querySelector('.ab-Popover');
    expect(popover).not.toHaveClass('is-open');
    expect(popover).toHaveAttribute('hidden');
  });

  test('childrenが描画される', () => {
    const { getByText } = render(
      <PopOver open>
        <span>popover content</span>
      </PopOver>,
    );

    expect(getByText('popover content')).toBeInTheDocument();
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { container } = render(
      <PopOver className="custom-class">content</PopOver>,
    );

    const popover = container.querySelector('.ab-Popover');
    expect(popover).toHaveClass('ab-Popover', 'custom-class');
  });

  test('PopOver.RootとしてRootコンポーネントを参照できる', () => {
    const { container } = render(<PopOver.Root>content</PopOver.Root>);

    expect(container.firstChild).toHaveClass(
      'ab-position-relative',
      'ab-inline-block',
    );
  });

  test('PopOver.TriggerとしてTriggerコンポーネントを参照できる', () => {
    const { getByRole } = render(
      <PopOver.Root>
        <PopOver.Trigger>trigger</PopOver.Trigger>
      </PopOver.Root>,
    );

    expect(getByRole('button', { name: 'trigger' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  test('PopOver.ContentとしてContentコンポーネントを参照できる', () => {
    const { container } = render(
      <PopOver.Root defaultOpen>
        <PopOver.Content>content</PopOver.Content>
      </PopOver.Root>,
    );

    const content = container.querySelector('.ab-Popover');

    expect(content).toHaveClass('is-open');
    expect(content).not.toHaveAttribute('hidden');
  });
});
