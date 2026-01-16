import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type SkeletonProps = ComponentPropsWithoutRef<'span'> & {
  /** 形 @default 'text' */
  variant?: 'text' | 'circular' | 'rectangular';
  /** 幅 */
  width?: string | number;
  /** 高さ */
  height?: string | number;
};

/**
 *
 * Docs:
 *
 * - [Skeleton](https://abukuma.netlify.app/react/component/skeleton)
 *
 * GitHub:
 *
 * - [Skeleton](https://github.com/giftee/design-system/tree/main/packages/react/src/components/skeleton)
 */
export const Skeleton = forwardRef<ElementRef<'span'>, SkeletonProps>(
  ({ variant = 'text', width, height, className, style, ...rest }, ref) => {
    const classes = classNames(
      'ab-Skeleton',
      `ab-Skeleton-${variant}`,
      className,
    );

    return (
      <span
        ref={ref}
        className={classes}
        style={{ width, height, ...style }}
        {...rest}
      />
    );
  },
);

Skeleton.displayName = 'Skeleton';
