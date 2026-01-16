import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { Skeleton } from './Index';

describe('Skeleton', () => {
  test('スケルトンをレンダリングする', () => {
    const { container } = render(<Skeleton />);

    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('ab-Skeleton', 'ab-Skeleton-text');
  });

  test('variantプロパティが正しくCSSクラスに反映される', () => {
    const { container: circular } = render(<Skeleton variant="circular" />);
    expect(circular.firstChild).toHaveClass('ab-Skeleton-circular');

    const { container: rectangular } = render(
      <Skeleton variant="rectangular" />,
    );
    expect(rectangular.firstChild).toHaveClass('ab-Skeleton-rectangular');
  });

  test('width, heightがstyleに反映される', () => {
    const { container } = render(<Skeleton width={100} height="50px" />);
    const element = container.firstChild as HTMLElement;

    expect(element.style.width).toBe('100px');
    expect(element.style.height).toBe('50px');
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { container } = render(<Skeleton className="custom-class" />);

    expect(container.firstChild).toHaveClass('ab-Skeleton', 'custom-class');
  });

  test('追加のpropsがspan要素に渡される', () => {
    const { container } = render(
      <Skeleton data-testid="skeleton" aria-label="loading..." />,
    );

    expect(container.firstChild).toHaveAttribute('data-testid', 'skeleton');
    expect(container.firstChild).toHaveAttribute('aria-label', 'loading...');
  });
});
