import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';

import { Badge } from './Index';

describe('Badge', () => {
  test('バッジをレンダリングする', () => {
    const { getByText } = render(<Badge>テストバッジ</Badge>);
    
    const badge = getByText('テストバッジ');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('ab-Badge');
  });

  test('isDotプロパティが正しくCSSクラスに反映される', () => {
    const { getByText } = render(<Badge isDot>ドットバッジ</Badge>);
    
    const badge = getByText('ドットバッジ');
    expect(badge).toHaveClass('ab-Badge', 'ab-Badge-dot');
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { getByText } = render(
      <Badge className="custom-class">カスタムクラスバッジ</Badge>
    );
    
    const badge = getByText('カスタムクラスバッジ');
    expect(badge).toHaveClass('ab-Badge', 'custom-class');
  });

  test('子要素が正しくレンダリングされる', () => {
    const { getByText } = render(<Badge>子要素テキスト</Badge>);
    
    const badge = getByText('子要素テキスト');
    expect(badge).toBeInTheDocument();
  });
});
