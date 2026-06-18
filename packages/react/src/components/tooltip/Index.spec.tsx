import { render, fireEvent } from '@testing-library/react';
import { createRef } from 'react';
import { describe, test, expect } from 'vitest';

import { Root, Content, Trigger } from './Index';

describe('Tooltip', () => {
  test('Tooltipをレンダリングする', () => {
    const { getByRole } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    expect(getByRole('button', { name: 'トリガー' })).toBeInTheDocument();
  });

  test('Rootに ab-Tooltip クラスが付与される', () => {
    const { container } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    expect(container.querySelector('.ab-Tooltip')).toBeInTheDocument();
  });

  test('Contentは常にDOMにレンダリングされ ab-Tooltip-description クラスが付与される', () => {
    const { getByText } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content>ツールチップテキスト</Content>
      </Root>,
    );

    expect(getByText('ツールチップテキスト')).toHaveClass(
      'ab-Tooltip-description',
    );
  });

  test('デフォルトのpositionはtopである', () => {
    const { container } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    expect(container.querySelector('.ab-Tooltip')).toHaveClass(
      'ab-Tooltip-top',
    );
  });

  test('positionプロパティが正しくCSSクラスに反映される', () => {
    const { container: rightContainer } = render(
      <Root position="right">
        <Trigger>右トリガー</Trigger>
        <Content>右</Content>
      </Root>,
    );
    expect(rightContainer.querySelector('.ab-Tooltip')).toHaveClass(
      'ab-Tooltip-right',
    );

    const { container: bottomContainer } = render(
      <Root position="bottom">
        <Trigger>下トリガー</Trigger>
        <Content>下</Content>
      </Root>,
    );
    expect(bottomContainer.querySelector('.ab-Tooltip')).toHaveClass(
      'ab-Tooltip-bottom',
    );

    const { container: leftContainer } = render(
      <Root position="left">
        <Trigger>左トリガー</Trigger>
        <Content>左</Content>
      </Root>,
    );
    expect(leftContainer.querySelector('.ab-Tooltip')).toHaveClass(
      'ab-Tooltip-left',
    );
  });

  test('classNameプロパティが追加で指定できる（Root）', () => {
    const { container } = render(
      <Root className="custom-class">
        <Trigger>トリガー</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    expect(container.querySelector('.ab-Tooltip')).toHaveClass(
      'ab-Tooltip',
      'custom-class',
    );
  });

  test('Contentにtooltipロールとidが付与され、Triggerのaria-describedbyと一致する', () => {
    const { getByRole } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    const tooltip = getByRole('tooltip');
    const trigger = getByRole('button', { name: 'トリガー' });

    expect(tooltip).toHaveAttribute('id');
    expect(trigger).toHaveAttribute('aria-describedby', tooltip.id);
  });

  test('Contentにidが指定されても生成されたidでTriggerと紐づく', () => {
    const { getByRole } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content id="custom-tooltip-id">ツールチップ</Content>
      </Root>,
    );

    const tooltip = getByRole('tooltip');
    const trigger = getByRole('button', { name: 'トリガー' });

    expect(tooltip).not.toHaveAttribute('id', 'custom-tooltip-id');
    expect(trigger).toHaveAttribute('aria-describedby', tooltip.id);
  });

  test('classNameプロパティが追加で指定できる（Content）', () => {
    const { getByText } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content className="custom-content-class">ツールチップ</Content>
      </Root>,
    );

    expect(getByText('ツールチップ')).toHaveClass(
      'ab-Tooltip-description',
      'custom-content-class',
    );
  });

  test('フォーカス時にContentのインラインスタイルで表示状態になる', () => {
    const { getByRole } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    const trigger = getByRole('button');
    const tooltip = getByRole('tooltip');

    fireEvent.focus(trigger);
    expect(tooltip).toHaveStyle({ opacity: 1, visibility: 'visible' });

    fireEvent.blur(trigger);
    expect(tooltip).not.toHaveStyle({ opacity: 1, visibility: 'visible' });
  });

  test('Contentのstyleにopacityとvisibilityが指定されてもフォーカス時は表示状態になる', () => {
    const { getByRole, getByText } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content style={{ opacity: 0, visibility: 'hidden' }}>
          ツールチップ
        </Content>
      </Root>,
    );

    const trigger = getByRole('button');
    const tooltip = getByText('ツールチップ');

    fireEvent.focus(trigger);
    expect(tooltip).toHaveStyle({ opacity: 1, visibility: 'visible' });
  });

  test('Escapeキー押下でフォーカス由来の表示状態が解除される', () => {
    const { getByRole } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    const trigger = getByRole('button');
    const tooltip = getByRole('tooltip');

    fireEvent.focus(trigger);
    expect(tooltip).toHaveStyle({ opacity: 1, visibility: 'visible' });

    fireEvent.keyDown(trigger, { key: 'Escape' });
    expect(tooltip).not.toHaveStyle({ opacity: 1, visibility: 'visible' });
  });

  test('Contentのstyleにopacityとvisibilityが指定されてもEscapeキー押下で非表示になる', () => {
    const { getByRole } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content style={{ opacity: 1, visibility: 'visible' }}>
          ツールチップ
        </Content>
      </Root>,
    );

    const trigger = getByRole('button');
    const tooltip = getByRole('tooltip');

    fireEvent.focus(trigger);
    fireEvent.keyDown(trigger, { key: 'Escape' });
    expect(tooltip).toHaveStyle({ opacity: 0, visibility: 'hidden' });
  });

  test('Escape以外のキーでは表示状態が維持される', () => {
    const { getByRole } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    const trigger = getByRole('button');
    const tooltip = getByRole('tooltip');

    fireEvent.focus(trigger);
    fireEvent.keyDown(trigger, { key: 'Enter' });
    expect(tooltip).toHaveStyle({ opacity: 1, visibility: 'visible' });
  });

  test('Triggerにrefが転送される', () => {
    const ref = createRef<HTMLButtonElement>();
    const { getByRole } = render(
      <Root>
        <Trigger ref={ref}>トリガー</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    expect(ref.current).toBe(getByRole('button', { name: 'トリガー' }));
  });

  test('ホバー中にdocument経由のEscapeでも非表示になる', () => {
    const { getByRole } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    const trigger = getByRole('button');
    const tooltip = getByRole('tooltip');

    fireEvent.mouseEnter(trigger);
    expect(tooltip).toHaveStyle({ opacity: 1, visibility: 'visible' });

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(tooltip).toHaveStyle({ opacity: 0, visibility: 'hidden' });
  });
});
