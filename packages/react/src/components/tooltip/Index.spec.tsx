import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { Root, Content } from './Index';

describe('Tooltip', () => {
  test('Tooltipをレンダリングする', () => {
    const { getByText } = render(
      <Root>
        トリガー
        <Content>ツールチップ</Content>
      </Root>,
    );

    const trigger = getByText('トリガー');
    expect(trigger).toBeInTheDocument();
  });

  test('Rootに ab-Tooltip クラスが付与される', () => {
    const { container } = render(
      <Root>
        トリガー
        <Content>ツールチップ</Content>
      </Root>,
    );

    const tooltip = container.querySelector('.ab-Tooltip');
    expect(tooltip).toBeInTheDocument();
  });

  test('Contentに ab-Tooltip-description クラスが付与される', () => {
    const { getByText } = render(
      <Root>
        トリガー
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
        トリガー
        <Content>ツールチップ</Content>
      </Root>,
    );

    const tooltip = container.querySelector('.ab-Tooltip');
    expect(tooltip).toHaveClass('ab-Tooltip-top');
  });

  test('positionプロパティが正しくCSSクラスに反映される', () => {
    const { container: rightContainer } = render(
      <Root position="right">
        右トリガー
        <Content>右</Content>
      </Root>,
    );
    expect(rightContainer.querySelector('.ab-Tooltip')).toHaveClass(
      'ab-Tooltip-right',
    );

    const { container: bottomContainer } = render(
      <Root position="bottom">
        下トリガー
        <Content>下</Content>
      </Root>,
    );
    expect(bottomContainer.querySelector('.ab-Tooltip')).toHaveClass(
      'ab-Tooltip-bottom',
    );

    const { container: leftContainer } = render(
      <Root position="left">
        左トリガー
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
        トリガー
        <Content>ツールチップ</Content>
      </Root>,
    );

    const tooltip = container.querySelector('.ab-Tooltip');
    expect(tooltip).toHaveClass('ab-Tooltip', 'custom-class');
  });

  test('Contentにtooltipロールとidが付与され、Rootのaria-describedbyと一致する', () => {
    const { getByRole, container } = render(
      <Root>
        トリガー
        <Content>ツールチップ</Content>
      </Root>,
    );

    const tooltip = getByRole('tooltip');
    const root = container.querySelector('.ab-Tooltip');
    expect(tooltip).toHaveAttribute('id');
    expect(root).toHaveAttribute('aria-describedby', tooltip.id);
  });

  test('classNameプロパティが追加で指定できる（Content）', () => {
    const { getByText } = render(
      <Root>
        トリガー
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
