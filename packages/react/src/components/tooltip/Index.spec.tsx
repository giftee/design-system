import { render, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { Root, Content, Trigger } from './Index';

describe('Tooltip', () => {
  test('Tooltipをレンダリングする', () => {
    const { getByRole } = render(
      <Root>
        <Trigger>{(props) => <button {...props}>トリガー</button>}</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    expect(getByRole('button', { name: 'トリガー' })).toBeInTheDocument();
  });

  test('Rootに ab-Tooltip クラスが付与される', () => {
    const { container } = render(
      <Root>
        <Trigger>{(props) => <button {...props}>トリガー</button>}</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    expect(container.querySelector('.ab-Tooltip')).toBeInTheDocument();
  });

  test('Contentに ab-Tooltip-description クラスが付与される', () => {
    const { getByRole, getByText } = render(
      <Root>
        <Trigger>{(props) => <button {...props}>トリガー</button>}</Trigger>
        <Content>ツールチップテキスト</Content>
      </Root>,
    );

    fireEvent.mouseEnter(getByRole('button'));
    expect(getByText('ツールチップテキスト')).toHaveClass('ab-Tooltip-description');
  });

  test('デフォルトのpositionはtopである', () => {
    const { container } = render(
      <Root>
        <Trigger>{(props) => <button {...props}>トリガー</button>}</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    expect(container.querySelector('.ab-Tooltip')).toHaveClass('ab-Tooltip-top');
  });

  test('positionプロパティが正しくCSSクラスに反映される', () => {
    const { container: rightContainer } = render(
      <Root position="right">
        <Trigger>{(props) => <button {...props}>右トリガー</button>}</Trigger>
        <Content>右</Content>
      </Root>,
    );
    expect(rightContainer.querySelector('.ab-Tooltip')).toHaveClass('ab-Tooltip-right');

    const { container: bottomContainer } = render(
      <Root position="bottom">
        <Trigger>{(props) => <button {...props}>下トリガー</button>}</Trigger>
        <Content>下</Content>
      </Root>,
    );
    expect(bottomContainer.querySelector('.ab-Tooltip')).toHaveClass('ab-Tooltip-bottom');

    const { container: leftContainer } = render(
      <Root position="left">
        <Trigger>{(props) => <button {...props}>左トリガー</button>}</Trigger>
        <Content>左</Content>
      </Root>,
    );
    expect(leftContainer.querySelector('.ab-Tooltip')).toHaveClass('ab-Tooltip-left');
  });

  test('classNameプロパティが追加で指定できる（Root）', () => {
    const { container } = render(
      <Root className="custom-class">
        <Trigger>{(props) => <button {...props}>トリガー</button>}</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    expect(container.querySelector('.ab-Tooltip')).toHaveClass('ab-Tooltip', 'custom-class');
  });

  test('Contentにtooltipロールとidが付与され、Triggerのaria-describedbyと一致する', () => {
    const { getByRole } = render(
      <Root>
        <Trigger>{(props) => <button {...props}>トリガー</button>}</Trigger>
        <Content>ツールチップ</Content>
      </Root>,
    );

    const trigger = getByRole('button', { name: 'トリガー' });
    fireEvent.mouseEnter(trigger);

    const tooltip = getByRole('tooltip');
    expect(tooltip).toHaveAttribute('id');
    expect(trigger).toHaveAttribute('aria-describedby', tooltip.id);
  });

  test('classNameプロパティが追加で指定できる（Content）', () => {
    const { getByRole, getByText } = render(
      <Root>
        <Trigger>{(props) => <button {...props}>トリガー</button>}</Trigger>
        <Content className="custom-content-class">ツールチップ</Content>
      </Root>,
    );

    fireEvent.mouseEnter(getByRole('button'));
    expect(getByText('ツールチップ')).toHaveClass('ab-Tooltip-description', 'custom-content-class');
  });
});
