import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type LinkTextProps = ComponentPropsWithoutRef<'a'> & {
  variant?: 'default' | 'brand';
  disabled?: boolean;
  underline?: boolean;
};

export const LinkText = forwardRef<ElementRef<'a'>, LinkTextProps>(
  (
    {
      variant = 'default',
      disabled,
      underline = true,
      children,
      className,
      ...rest
    },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-LinkText',
      variant !== 'default' && `ab-LinkText-${variant}`,
      disabled && 'is-disabled',
      !underline && 'ab-LinkText-quiet',
      className,
    );

    return (
      <a ref={forwardedRef} className={classes} {...rest}>
        {children}
      </a>
    );
  },
);

LinkText.displayName = 'LinkText';
