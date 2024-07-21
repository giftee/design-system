import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type BadgeProps = ComponentPropsWithoutRef<'span'> & {
  isDot?: boolean;
};

export const Badge = forwardRef<ElementRef<'span'>, BadgeProps>(
  ({ isDot = false, children, className, ...rest }, forwardedRef) => {
    const classes = classNames('ab-Badge', isDot && 'ab-Badge-dot', className);

    return (
      <span ref={forwardedRef} className={classes} {...rest}>
        {children}
      </span>
    );
  },
);

Badge.displayName = 'Badge';
