import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, test, expect } from 'vitest';

import { Root, Content, Summary } from './Index';

describe('Accordion', () => {
  test('アコーディオンをレンダリングする', () => {
    const { getByText } = render(
      <Root>
        <Summary>アコーディオンタイトル</Summary>
        <Content>アコーディオンコンテンツ</Content>
      </Root>,
    );

    const summary = getByText('アコーディオンタイトル');
    const content = getByText('アコーディオンコンテンツ');

    expect(summary).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(summary).toHaveClass('ab-Accordion-summary');
    expect(content).toHaveClass('ab-Accordion-content');
  });

  test('サイズプロパティが正しくCSSクラスに反映される', () => {
    const { container } = render(
      <Root size="small">
        <Summary>小さいアコーディオン</Summary>
        <Content>コンテンツ</Content>
      </Root>,
    );

    const accordion = container.querySelector('.ab-Accordion');
    expect(accordion).toHaveClass('ab-Accordion-small');
  });

  test('無効化状態が正しくCSSクラスに反映される', () => {
    const { container } = render(
      <Root disabled>
        <Summary>無効化アコーディオン</Summary>
        <Content>コンテンツ</Content>
      </Root>,
    );

    const accordion = container.querySelector('.ab-Accordion');
    expect(accordion).toHaveClass('is-disabled');
  });

  test('classNameプロパティが追加で指定できる（Root）', () => {
    const { container } = render(
      <Root className="custom-class">
        <Summary>カスタムクラスアコーディオン</Summary>
        <Content>コンテンツ</Content>
      </Root>,
    );

    const accordion = container.querySelector('.ab-Accordion');
    expect(accordion).toHaveClass('ab-Accordion', 'custom-class');
  });

  test('classNameプロパティが追加で指定できる（Summary）', () => {
    const { getByText } = render(
      <Root>
        <Summary className="custom-summary-class">サマリー</Summary>
        <Content>コンテンツ</Content>
      </Root>,
    );

    const summary = getByText('サマリー');
    expect(summary).toHaveClass('ab-Accordion-summary', 'custom-summary-class');
  });

  test('classNameプロパティが追加で指定できる（Content）', () => {
    const { getByText } = render(
      <Root>
        <Summary>サマリー</Summary>
        <Content className="custom-content-class">コンテンツ</Content>
      </Root>,
    );

    const content = getByText('コンテンツ');
    expect(content).toHaveClass('ab-Accordion-content', 'custom-content-class');
  });

  test('アコーディオンの開閉が正しく動作する', async () => {
    const user = userEvent.setup();

    const { getByText } = render(
      <Root>
        <Summary>クリック可能サマリー</Summary>
        <Content>表示されるコンテンツ</Content>
      </Root>,
    );

    const summary = getByText('クリック可能サマリー');
    await user.click(summary);

    const details = summary.closest('details');
    expect(details).toHaveAttribute('open');
  });
});
