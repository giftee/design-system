import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';

import { Typography } from './Index';

describe('Typography', () => {
  test('タイポグラフィをレンダリングする', () => {
    const { getByText } = render(<Typography>テキスト</Typography>);

    const text = getByText('テキスト');
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('ab-text-body-m');
  });

  test('バリアントプロパティが正しくCSSクラスに反映される', () => {
    const { getByText } = render(
      <Typography variant="headline-l">見出し1</Typography>,
    );

    const heading = getByText('見出し1');
    expect(heading).toHaveClass('ab-text-headline-l');
  });

  test('コンポーネントプロパティが正しく適用される', () => {
    const { container } = render(
      <Typography component="h2">見出し2</Typography>,
    );

    const heading = container.querySelector('h2');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('見出し2');
  });

  test('カラープロパティが正しくCSSクラスに反映される', () => {
    const { getByText } = render(
      <Typography color="brand">ブランドカラーテキスト</Typography>,
    );

    const text = getByText('ブランドカラーテキスト');
    expect(text).toHaveClass('ab-text-brand');
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { getByText } = render(
      <Typography className="custom-class">カスタムクラステキスト</Typography>,
    );

    const text = getByText('カスタムクラステキスト');
    expect(text).toHaveClass('ab-text-body-m', 'custom-class');
  });
});
