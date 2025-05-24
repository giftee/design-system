import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';

import { CircularProgress } from './Index';

describe('CircularProgress', () => {
  test('サーキュラープログレスをレンダリングする', () => {
    const { container } = render(<CircularProgress />);
    
    const progress = container.querySelector('.ab-CircularProgress');
    expect(progress).toBeInTheDocument();
  });

  test('サイズプロパティが正しくCSSクラスに反映される', () => {
    const { container } = render(<CircularProgress size="small" />);
    
    const progress = container.querySelector('.ab-CircularProgress');
    expect(progress).toHaveClass('ab-CircularProgress-small');
  });

  test('バリアントプロパティが正しくCSSクラスに反映される', () => {
    const { container } = render(<CircularProgress variant="disabled" />);
    
    const progress = container.querySelector('.ab-CircularProgress');
    expect(progress).toHaveClass('ab-CircularProgress-disabled');
  });

  test('デフォルトのバリアントが正しく適用される', () => {
    const { container } = render(<CircularProgress />);
    
    const progress = container.querySelector('.ab-CircularProgress');
    expect(progress).toHaveClass('ab-CircularProgress-brand');
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { container } = render(<CircularProgress className="custom-class" />);
    
    const progress = container.querySelector('.ab-CircularProgress');
    expect(progress).toHaveClass('ab-CircularProgress', 'custom-class');
  });
});
