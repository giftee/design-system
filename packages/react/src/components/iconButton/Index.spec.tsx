import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi, describe, test, expect } from 'vitest';

import { IconButton } from './Index';

describe('IconButton', () => {
  test('アイコンボタンをレンダリングする', () => {
    const { container } = render(<IconButton>🔍</IconButton>);

    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('ab-IconButton');
  });

  test('バリアントプロパティが正しくCSSクラスに反映される', () => {
    const { container } = render(
      <IconButton variant="outlined">🔍</IconButton>,
    );

    const button = container.querySelector('button');
    expect(button).toHaveClass('ab-IconButton-outlined');
  });

  test('サイズプロパティが正しくCSSクラスに反映される', () => {
    const { container } = render(<IconButton size="small">🔍</IconButton>);

    const button = container.querySelector('button');
    expect(button).toHaveClass('ab-IconButton-small');
  });

  test('無効化状態が正しく設定される', () => {
    const { container } = render(<IconButton disabled>🔍</IconButton>);

    const button = container.querySelector('button');
    expect(button).toBeDisabled();
  });

  test('clickイベントが正しく処理される', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    const { container } = render(
      <IconButton onClick={handleClick}>🔍</IconButton>,
    );

    const button = container.querySelector('button');
    await user.click(button as HTMLElement);

    expect(handleClick).toHaveBeenCalledOnce();
  });

  test('無効化状態ではclickイベントが発火しない', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    const { container } = render(
      <IconButton disabled onClick={handleClick}>
        🔍
      </IconButton>,
    );

    const button = container.querySelector('button');
    await user.click(button as HTMLElement);

    expect(handleClick).not.toHaveBeenCalled();
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { container } = render(
      <IconButton className="custom-class">🔍</IconButton>,
    );

    const button = container.querySelector('button');
    expect(button).toHaveClass('ab-IconButton', 'custom-class');
  });

  test('typeプロパティが正しく設定される', () => {
    const { container } = render(<IconButton type="submit">🔍</IconButton>);

    const button = container.querySelector('button');
    expect(button).toHaveAttribute('type', 'submit');
  });
});
