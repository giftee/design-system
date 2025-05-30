import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';

import { Root, Title, Description } from './Index';

describe('InlineAlert', () => {
  test('インラインアラートをレンダリングする', () => {
    const { container } = render(
      <Root>
        <Title>アラートタイトル</Title>
        <Description>アラートの説明文</Description>
      </Root>,
    );

    const alert = container.querySelector('.ab-InlineAlert');
    expect(alert).toBeInTheDocument();
  });

  test('バリアントプロパティが正しくCSSクラスに反映される', () => {
    const { container } = render(
      <Root variant="info">
        <Title>情報アラート</Title>
        <Description>情報の説明</Description>
      </Root>,
    );

    const alert = container.querySelector('.ab-InlineAlert');
    expect(alert).toHaveClass('ab-InlineAlert-info');
  });

  test('タイトルが正しく表示される', () => {
    const { getByText } = render(
      <Root>
        <Title>アラートタイトル</Title>
        <Description>アラートの説明文</Description>
      </Root>,
    );

    const title = getByText('アラートタイトル');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('ab-InlineAlert-title');
  });

  test('説明文が正しく表示される', () => {
    const { getByText } = render(
      <Root>
        <Title>アラートタイトル</Title>
        <Description>アラートの説明文</Description>
      </Root>,
    );

    const description = getByText('アラートの説明文');
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('ab-InlineAlert-description');
  });

  test('classNameプロパティが追加で指定できる（Root）', () => {
    const { container } = render(
      <Root className="custom-class">
        <Title>タイトル</Title>
        <Description>説明</Description>
      </Root>,
    );

    const alert = container.querySelector('.ab-InlineAlert');
    expect(alert).toHaveClass('ab-InlineAlert', 'custom-class');
  });

  test('classNameプロパティが追加で指定できる（Title）', () => {
    const { getByText } = render(
      <Root>
        <Title className="custom-title-class">カスタムタイトル</Title>
        <Description>説明</Description>
      </Root>,
    );

    const title = getByText('カスタムタイトル');
    expect(title).toHaveClass('ab-InlineAlert-title', 'custom-title-class');
  });

  test('classNameプロパティが追加で指定できる（Description）', () => {
    const { getByText } = render(
      <Root>
        <Title>タイトル</Title>
        <Description className="custom-desc-class">カスタム説明</Description>
      </Root>,
    );

    const description = getByText('カスタム説明');
    expect(description).toHaveClass(
      'ab-InlineAlert-description',
      'custom-desc-class',
    );
  });
});
