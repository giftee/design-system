import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi, describe, test, expect } from 'vitest';

import { Switch } from './Index';

describe('Switch', () => {
  test('スイッチをレンダリングする', () => {
    const { getByRole } = render(<Switch name="test">テストスイッチ</Switch>);

    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass('ab-Switch-input');
  });

  test('ラベルが正しく表示される', () => {
    const { getByText } = render(<Switch name="test">テストラベル</Switch>);

    const label = getByText('テストラベル');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('ab-Switch-label');
  });

  test('デフォルトのポジションが正しく適用される', () => {
    const { container } = render(<Switch name="test">テストスイッチ</Switch>);

    const switchWrapper = container.querySelector('.ab-Switch-wrapper');
    expect(switchWrapper).toHaveClass('position-right');
  });

  test('ポジションプロパティが正しくCSSクラスに反映される', () => {
    const { container } = render(
      <Switch name="test" position="left">
        テストスイッチ
      </Switch>,
    );

    const switchWrapper = container.querySelector('.ab-Switch-wrapper');
    expect(switchWrapper).toHaveClass('position-left');
  });

  test('clickイベントが正しく処理される', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    const { getByRole } = render(
      <Switch name="test" onChange={handleChange}>
        クリック可能スイッチ
      </Switch>,
    );

    const checkbox = getByRole('checkbox');
    await user.click(checkbox);

    expect(handleChange).toHaveBeenCalledOnce();
  });

  test('disabledプロパティが正しく動作する', () => {
    const { getByRole } = render(
      <Switch name="test" disabled>
        無効化スイッチ
      </Switch>,
    );

    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { container } = render(
      <Switch name="test" className="custom-class">
        カスタムクラススイッチ
      </Switch>,
    );

    const switchWrapper = container.querySelector('.ab-Switch-wrapper');
    expect(switchWrapper).toHaveClass('ab-Switch-wrapper', 'custom-class');
  });

  test('チェック状態が正しく設定される', async () => {
    const user = userEvent.setup();

    const { getByRole } = render(
      <Switch name="test">チェック可能スイッチ</Switch>,
    );

    const checkbox = getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
