import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick'
> &
  Omit<ComponentPropsWithoutRef<'a'>, 'onClick'> & {
    variant?: 'default' | 'outlined' | 'negative' | 'text';
    size?: 'xsmall' | 'small' | 'large';
    component?: React.ElementType;
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  };

type ElementRefs = ElementRef<'button'> | ElementRef<'a'>;

export const Button = forwardRef<ElementRefs, ButtonProps>(
  (
    { children, className, variant, size, component, ...rest },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-Button',
      !!variant && variant !== 'default' && `ab-Button-${variant}`,
      !!size && `ab-Button-${size}`,
      className,
    );

    const defaultRootNode = rest.href ? 'a' : 'button';
    const RootNode = component ? component : defaultRootNode;

    return (
      <RootNode className={classes} ref={forwardedRef} {...rest}>
        {children}
      </RootNode>
    );
  },
);

Button.displayName = 'Button';
