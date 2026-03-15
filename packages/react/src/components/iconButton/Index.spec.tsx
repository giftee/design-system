import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi, describe, test, expect } from 'vitest';

import { IconButton } from './Index';

describe('IconButton', () => {
  test('アイコンボタンをレンダリングする', () => {
    const { getByRole } = render(<IconButton aria-label="検索">🔍</IconButton>);

    const button = getByRole('button', { name: '検索' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('ab-IconButton');
  });

  test('バリアントプロパティが正しくCSSクラスに反映される', () => {
    const { getByRole } = render(
      <IconButton variant="outlined" aria-label="検索">
        🔍
      </IconButton>,
    );

    const button = getByRole('button', { name: '検索' });
    expect(button).toHaveClass('ab-IconButton-outlined');
  });

  test('サイズプロパティが正しくCSSクラスに反映される', () => {
    const { getByRole } = render(
      <IconButton size="small" aria-label="検索">
        🔍
      </IconButton>,
    );

    const button = getByRole('button', { name: '検索' });
    expect(button).toHaveClass('ab-IconButton-small');
  });

  test('無効化状態が正しく設定される', () => {
    const { getByRole } = render(
      <IconButton disabled aria-label="検索">
        🔍
      </IconButton>,
    );

    const button = getByRole('button', { name: '検索' });
    expect(button).toBeDisabled();
  });

  test('clickイベントが正しく処理される', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    const { getByRole } = render(
      <IconButton onClick={handleClick} aria-label="検索">
        🔍
      </IconButton>,
    );

    const button = getByRole('button', { name: '検索' });
    await user.click(button as HTMLElement);

    expect(handleClick).toHaveBeenCalledOnce();
  });

  test('無効化状態ではclickイベントが発火しない', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    const { getByRole } = render(
      <IconButton disabled onClick={handleClick} aria-label="検索">
        🔍
      </IconButton>,
    );

    const button = getByRole('button', { name: '検索' });
    await user.click(button as HTMLElement);

    expect(handleClick).not.toHaveBeenCalled();
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { getByRole } = render(
      <IconButton className="custom-class" aria-label="検索">
        🔍
      </IconButton>,
    );

    const button = getByRole('button', { name: '検索' });
    expect(button).toHaveClass('ab-IconButton', 'custom-class');
  });

  test('typeプロパティが正しく設定される', () => {
    const { getByRole } = render(
      <IconButton type="submit" aria-label="検索">
        🔍
      </IconButton>,
    );

    const button = getByRole('button', { name: '検索' });
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('aria-labelがアクセシブルネームとして利用される', () => {
    const { getByRole } = render(
      <IconButton aria-label="閉じる">
        <span aria-hidden="true">X</span>
      </IconButton>,
    );

    expect(getByRole('button', { name: '閉じる' })).toBeInTheDocument();
  });
});
