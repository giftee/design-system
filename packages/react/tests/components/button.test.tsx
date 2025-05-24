import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, test, expect } from 'vitest';
import { Button } from '../../src/components/button/Index';

describe('Button', () => {
  test('ボタンをレンダリングする', () => {
    render(<Button>テストボタン</Button>);
    
    const button = screen.getByRole('button', { name: 'テストボタン' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('ab-Button');
  });

  test('variantプロパティが正しくCSSクラスに反映される', () => {
    render(<Button variant="outlined">アウトラインボタン</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('ab-Button', 'ab-Button-outlined');
  });

  test('sizeプロパティが正しくCSSクラスに反映される', () => {
    render(<Button size="large">大きなボタン</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('ab-Button', 'ab-Button-large');
  });

  test('clickイベントが正しく処理される', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    
    render(<Button onClick={handleClick}>クリック可能ボタン</Button>);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalledOnce();
  });

  test('disabledプロパティが正しく動作する', () => {
    render(<Button disabled>無効化ボタン</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });
});
