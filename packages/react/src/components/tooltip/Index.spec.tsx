import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';

import { Tooltip } from './Index';

describe('Tooltip', () => {
  test('Tooltipをレンダリングする', () => {
    const { getByText } = render(
      <Tooltip content="ツールチップ">トリガー</Tooltip>,
    );

    const trigger = getByText('トリガー');
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveClass('ab-Tooltip');
  });

  test('ツールチップのテキストが表示される', () => {
    const { getByText } = render(
      <Tooltip content="ツールチップテキスト">トリガー</Tooltip>,
    );

    const description = getByText('ツールチップテキスト');
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('ab-Tooltip-description');
  });

  test('デフォルトのpositionはtopである', () => {
    const { container } = render(
      <Tooltip content="ツールチップ">トリガー</Tooltip>,
    );

    const tooltip = container.querySelector('.ab-Tooltip');
    expect(tooltip).toHaveClass('ab-Tooltip-top');
  });

  test('positionプロパティが正しくCSSクラスに反映される', () => {
    const { container: rightContainer } = render(
      <Tooltip content="右" position="right">
        右トリガー
      </Tooltip>,
    );
    expect(rightContainer.querySelector('.ab-Tooltip')).toHaveClass(
      'ab-Tooltip-right',
    );

    const { container: bottomContainer } = render(
      <Tooltip content="下" position="bottom">
        下トリガー
      </Tooltip>,
    );
    expect(bottomContainer.querySelector('.ab-Tooltip')).toHaveClass(
      'ab-Tooltip-bottom',
    );

    const { container: leftContainer } = render(
      <Tooltip content="左" position="left">
        左トリガー
      </Tooltip>,
    );
    expect(leftContainer.querySelector('.ab-Tooltip')).toHaveClass(
      'ab-Tooltip-left',
    );
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { container } = render(
      <Tooltip content="ツールチップ" className="custom-class">
        トリガー
      </Tooltip>,
    );

    const tooltip = container.querySelector('.ab-Tooltip');
    expect(tooltip).toHaveClass('ab-Tooltip', 'custom-class');
  });

  test('子要素が正しくレンダリングされる', () => {
    const { getByText } = render(
      <Tooltip content="ツールチップ">子要素テキスト</Tooltip>,
    );

    const trigger = getByText('子要素テキスト');
    expect(trigger).toBeInTheDocument();
  });
});
