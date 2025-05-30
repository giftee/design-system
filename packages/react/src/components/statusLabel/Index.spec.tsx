import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';

import { StatusLabel } from './Index';

describe('StatusLabel', () => {
  test('ステータスラベルをレンダリングする', () => {
    const { getByText } = render(<StatusLabel>テストラベル</StatusLabel>);

    const label = getByText('テストラベル');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('ab-StatusLabel');
  });

  test('バリアントプロパティが正しくCSSクラスに反映される', () => {
    const { getByText } = render(
      <StatusLabel variant="positive">成功ステータス</StatusLabel>,
    );

    const label = getByText('成功ステータス');
    expect(label).toHaveClass('ab-StatusLabel-positive');
  });

  test('サイズプロパティが正しくCSSクラスに反映される', () => {
    const { getByText } = render(
      <StatusLabel size="small">小さいラベル</StatusLabel>,
    );

    const label = getByText('小さいラベル');
    expect(label).toHaveClass('ab-StatusLabel-small');
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { getByText } = render(
      <StatusLabel className="custom-class">カスタムクラスラベル</StatusLabel>,
    );

    const label = getByText('カスタムクラスラベル');
    expect(label).toHaveClass('ab-StatusLabel', 'custom-class');
  });
});
