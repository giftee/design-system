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
});
