import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type SkeletonProps = ComponentPropsWithoutRef<'span'> & {
  variant?: 'text' | 'circular' | 'rectangular';

  width?: string | number;

  height?: string | number;
};

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
