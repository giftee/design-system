import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type IconButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'default' | 'outlined' | 'neutral' | 'text' | 'negative';
  size?: 'small' | 'large';
};

export const IconButton = forwardRef<ElementRef<'button'>, IconButtonProps>(
  ({ children, className, variant, size, ...rest }, forwardedRef) => {
    const classes = classNames(
      'ab-IconButton',
      !!variant && variant !== 'default' && `ab-IconButton-${variant}`,
      !!size && `ab-IconButton-${size}`,
      className,
    );

    return (
      <button className={classes} ref={forwardedRef} {...rest}>
        {children}
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';
