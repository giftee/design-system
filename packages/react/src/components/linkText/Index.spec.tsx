import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi, describe, test, expect } from 'vitest';

import { LinkText } from './Index';

describe('LinkText', () => {
  test('リンクテキストをレンダリングする', () => {
    const { getByText } = render(<LinkText href="#">リンクテキスト</LinkText>);
    
    const link = getByText('リンクテキスト');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('ab-LinkText');
  });

  test('バリアントプロパティが正しくCSSクラスに反映される', () => {
    const { getByText } = render(
      <LinkText href="#" variant="brand">ブランドリンク</LinkText>
    );
    
    const link = getByText('ブランドリンク');
    expect(link).toHaveClass('ab-LinkText-brand');
  });

  test('下線なしプロパティが正しくCSSクラスに反映される', () => {
    const { getByText } = render(
      <LinkText href="#" underline={false}>下線なしリンク</LinkText>
    );
    
    const link = getByText('下線なしリンク');
    expect(link).toHaveClass('ab-LinkText-quiet');
  });

  test('無効化状態が正しくCSSクラスに反映される', () => {
    const { getByText } = render(
      <LinkText href="#" disabled>無効化リンク</LinkText>
    );
    
    const link = getByText('無効化リンク');
    expect(link).toHaveClass('is-disabled');
  });

  test('clickイベントが正しく処理される', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    
    const { getByText } = render(
      <LinkText href="#" onClick={handleClick}>クリック可能リンク</LinkText>
    );
    
    const link = getByText('クリック可能リンク');
    await user.click(link);
    
    expect(handleClick).toHaveBeenCalledOnce();
  });

  test('無効化状態ではclickイベントが発火しない', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    
    const { getByText } = render(
      <LinkText href="#" disabled onClick={handleClick}>無効化リンク</LinkText>
    );
    
    const link = getByText('無効化リンク');
    await user.click(link);
    
    expect(handleClick).toHaveBeenCalledOnce();
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { getByText } = render(
      <LinkText href="#" className="custom-class">カスタムクラスリンク</LinkText>
    );
    
    const link = getByText('カスタムクラスリンク');
    expect(link).toHaveClass('ab-LinkText', 'custom-class');
  });

  test('hrefプロパティが正しく設定される', () => {
    const { getByText } = render(
      <LinkText href="https://example.com">外部リンク</LinkText>
    );
    
    const link = getByText('外部リンク');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  test('targetプロパティが正しく設定される', () => {
    const { getByText } = render(
      <LinkText href="https://example.com" target="_blank">新しいタブで開くリンク</LinkText>
    );
    
    const link = getByText('新しいタブで開くリンク');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
