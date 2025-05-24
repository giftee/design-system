import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi, describe, test, expect } from 'vitest';

import { Button } from './Index';

describe('Button', () => {
  test('ボタンをレンダリングする', () => {
    const { getByRole } = render(<Button>テストボタン</Button>);
    
    const button = getByRole('button', { name: 'テストボタン' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('ab-Button');
  });

  test('variantプロパティが正しくCSSクラスに反映される', () => {
    const { getByRole } = render(<Button variant="outlined">アウトラインボタン</Button>);
    
    const button = getByRole('button');
    expect(button).toHaveClass('ab-Button', 'ab-Button-outlined');
  });

  test('sizeプロパティが正しくCSSクラスに反映される', () => {
    const { getByRole } = render(<Button size="large">大きなボタン</Button>);
    
    const button = getByRole('button');
    expect(button).toHaveClass('ab-Button', 'ab-Button-large');
  });

  test('clickイベントが正しく処理される', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    
    const { getByRole } = render(<Button onClick={handleClick}>クリック可能ボタン</Button>);
    
    const button = getByRole('button');
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalledOnce();
  });

  test('disabledプロパティが正しく動作する', () => {
    const { getByRole } = render(<Button disabled>無効化ボタン</Button>);
    
    const button = getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { getByRole } = render(
      <Button className="custom-class">カスタムクラスボタン</Button>
    );
    
    const button = getByRole('button');
    expect(button).toHaveClass('ab-Button', 'custom-class');
  });

  test('componentプロパティが指定された場合、そのタグでレンダリングされる', () => {
    const { container } = render(
      <Button component="div">DIVボタン</Button>
    );
    
    const divButton = container.querySelector('div.ab-Button');
    expect(divButton).toBeInTheDocument();
    expect(divButton).toHaveTextContent('DIVボタン');
  });

  test('componentなしでhrefがある場合、aタグでレンダリングされる', () => {
    const { container } = render(
      <Button href="https://example.com">リンクボタン</Button>
    );
    
    const linkButton = container.querySelector('a.ab-Button');
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveAttribute('href', 'https://example.com');
  });

  test('componentもhrefもない場合、buttonタグでレンダリングされる', () => {
    const { container } = render(
      <Button>デフォルトボタン</Button>
    );
    
    const defaultButton = container.querySelector('button.ab-Button');
    expect(defaultButton).toBeInTheDocument();
  });
});
