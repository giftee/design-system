import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type DividerProps = Omit<ComponentPropsWithoutRef<'hr'>, 'children'> & {
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'medium' | 'large';
};

export const Divider = forwardRef<ElementRef<'hr'>, DividerProps>(
  (
    { direction = 'horizontal', size = 'small', className, ...rest },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-Divider',
      `ab-Divider-${direction}`,
      `ab-Divider-${size}`,
      className,
    );

    return <hr ref={forwardedRef} className={classes} {...rest}></hr>;
  },
);

Divider.displayName = 'Divider';
