import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type DividerProps = Omit<ComponentPropsWithoutRef<'hr'>, 'children'> & {
  direction?: 'horizontal' | 'vertical';
};

export const Divider = forwardRef<ElementRef<'hr'>, DividerProps>(
  ({ direction = 'horizontal', className, ...rest }, forwardedRef) => {
    const classes = classNames(
      'ab-Divider',
      `ab-Divider-${direction}`,
      className,
    );

    return <hr ref={forwardedRef} className={classes} {...rest}></hr>;
  },
);

Divider.displayName = 'Divider';
