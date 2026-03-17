import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';

import { Root, Trigger, Content } from './Index';

describe('Tooltip', () => {
  test('Tooltipをレンダリングする', () => {
    const { getByText } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    const trigger = getByText('トリガー');
    expect(trigger).toBeInTheDocument();
  });

  test('Rootに ab-Tooltip クラスが付与される', () => {
    const { container } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    const tooltip = container.querySelector('.ab-Tooltip');
    expect(tooltip).toBeInTheDocument();
  });

  test('Contentに ab-Tooltip-description クラスが付与される', () => {
    const { getByText } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content>ツールチップテキスト</Content>
      </Root>,
    );

    const description = getByText('ツールチップテキスト');
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('ab-Tooltip-description');
  });

  test('デフォルトのpositionはtopである', () => {
    const { container } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    const tooltip = container.querySelector('.ab-Tooltip');
    expect(tooltip).toHaveClass('ab-Tooltip-top');
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

    const tooltip = container.querySelector('.ab-Tooltip');
    expect(tooltip).toHaveClass('ab-Tooltip', 'custom-class');
  });

  test('classNameプロパティが追加で指定できる（Content）', () => {
    const { getByText } = render(
      <Root>
        <Trigger>トリガー</Trigger>
        <Content className="custom-content-class">ツールチップ</Content>
      </Root>,
    );

    const content = getByText('ツールチップ');
    expect(content).toHaveClass(
      'ab-Tooltip-description',
      'custom-content-class',
    );
  });
});
