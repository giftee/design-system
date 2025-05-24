import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';

import { Divider } from './Index';

describe('Divider', () => {
  test('区切り線をレンダリングする', () => {
    const { container } = render(<Divider />);
    
    const divider = container.querySelector('.ab-Divider');
    expect(divider).toBeInTheDocument();
  });

  test('デフォルトの方向が正しく適用される', () => {
    const { container } = render(<Divider />);
    
    const divider = container.querySelector('.ab-Divider');
    expect(divider).toHaveClass('ab-Divider-horizontal');
  });

  test('方向プロパティが正しくCSSクラスに反映される', () => {
    const { container } = render(<Divider direction="vertical" />);
    
    const divider = container.querySelector('.ab-Divider');
    expect(divider).toHaveClass('ab-Divider-vertical');
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { container } = render(<Divider className="custom-class" />);
    
    const divider = container.querySelector('.ab-Divider');
    expect(divider).toHaveClass('ab-Divider', 'custom-class');
  });
});
