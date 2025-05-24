import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi, describe, test, expect } from 'vitest';

import { Checkbox } from './Index';

describe('Checkbox', () => {
  test('チェックボックスをレンダリングする', () => {
    const { getByRole } = render(<Checkbox name="test">テストチェックボックス</Checkbox>);
    
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass('ab-Checkbox-input');
  });

  test('ラベルが正しく表示される', () => {
    const { getByText } = render(<Checkbox name="test">テストラベル</Checkbox>);
    
    const label = getByText('テストラベル');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('ab-Checkbox-label');
  });

  test('デフォルトのポジションが正しく適用される', () => {
    const { container } = render(<Checkbox name="test">テストチェックボックス</Checkbox>);
    
    const checkboxWrapper = container.querySelector('.ab-Checkbox-wrapper');
    expect(checkboxWrapper).toHaveClass('position-right');
  });

  test('ポジションプロパティが正しくCSSクラスに反映される', () => {
    const { container } = render(
      <Checkbox name="test" position="left">テストチェックボックス</Checkbox>
    );
    
    const checkboxWrapper = container.querySelector('.ab-Checkbox-wrapper');
    expect(checkboxWrapper).toHaveClass('position-left');
  });

  test('clickイベントが正しく処理される', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    const { getByRole } = render(
      <Checkbox name="test" onChange={handleChange}>クリック可能チェックボックス</Checkbox>
    );
    
    const checkbox = getByRole('checkbox');
    await user.click(checkbox);
    
    expect(handleChange).toHaveBeenCalledOnce();
  });

  test('disabledプロパティが正しく動作する', () => {
    const { getByRole } = render(
      <Checkbox name="test" disabled>無効化チェックボックス</Checkbox>
    );
    
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { container } = render(
      <Checkbox name="test" className="custom-class">カスタムクラスチェックボックス</Checkbox>
    );
    
    const checkboxWrapper = container.querySelector('.ab-Checkbox-wrapper');
    expect(checkboxWrapper).toHaveClass('ab-Checkbox-wrapper', 'custom-class');
  });

  test('チェック状態が正しく設定される', async () => {
    const user = userEvent.setup();
    
    const { getByRole } = render(
      <Checkbox name="test">チェック可能チェックボックス</Checkbox>
    );
    
    const checkbox = getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
