import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi, describe, test, expect } from 'vitest';

import { Radio } from './Index';

describe('Radio', () => {
  test('ラジオボタンをレンダリングする', () => {
    const { getByRole } = render(<Radio name="test">テストラジオ</Radio>);
    
    const radio = getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveClass('ab-Radio-input');
  });

  test('ラベルが正しく表示される', () => {
    const { getByText } = render(<Radio name="test">テストラベル</Radio>);
    
    const label = getByText('テストラベル');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('ab-Radio-label');
  });

  test('デフォルトのポジションが正しく適用される', () => {
    const { container } = render(<Radio name="test">テストラジオ</Radio>);
    
    const radioWrapper = container.querySelector('.ab-Radio-wrapper');
    expect(radioWrapper).toHaveClass('position-right');
  });

  test('ポジションプロパティが正しくCSSクラスに反映される', () => {
    const { container } = render(
      <Radio name="test" position="left">テストラジオ</Radio>
    );
    
    const radioWrapper = container.querySelector('.ab-Radio-wrapper');
    expect(radioWrapper).toHaveClass('position-left');
  });

  test('clickイベントが正しく処理される', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    const { getByRole } = render(
      <Radio name="test" onChange={handleChange}>クリック可能ラジオ</Radio>
    );
    
    const radio = getByRole('radio');
    await user.click(radio);
    
    expect(handleChange).toHaveBeenCalledOnce();
  });

  test('disabledプロパティが正しく動作する', () => {
    const { getByRole } = render(
      <Radio name="test" disabled>無効化ラジオ</Radio>
    );
    
    const radio = getByRole('radio');
    expect(radio).toBeDisabled();
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { container } = render(
      <Radio name="test" className="custom-class">カスタムクラスラジオ</Radio>
    );
    
    const radioWrapper = container.querySelector('.ab-Radio-wrapper');
    expect(radioWrapper).toHaveClass('ab-Radio-wrapper', 'custom-class');
  });

  test('チェック状態が正しく設定される', async () => {
    const user = userEvent.setup();
    
    const { getByRole } = render(
      <Radio name="test">チェック可能ラジオ</Radio>
    );
    
    const radio = getByRole('radio');
    expect(radio).not.toBeChecked();
    
    await user.click(radio);
    expect(radio).toBeChecked();
  });
});
