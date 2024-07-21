import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type CircularProgressProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'children'
> & {
  variant?: 'brand' | 'disabled';
  size?: 'xsmall' | 'small' | 'large' | 'xlarge';
};

export const CircularProgress = forwardRef<
  ElementRef<'div'>,
  CircularProgressProps
>(({ variant = 'brand', size = 'large', className, ...rest }, forwardedRef) => {
  const classes = classNames(
    'ab-CircularProgress',
    `ab-CircularProgress-${variant}`,
    `ab-CircularProgress-${size}`,
    className,
  );

  return <div ref={forwardedRef} className={classes} {...rest}></div>;
});

CircularProgress.displayName = 'CircularProgress';
