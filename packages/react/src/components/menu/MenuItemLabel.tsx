import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type MenuItemLabelProps = ComponentPropsWithoutRef<'span'>;

export const MenuItemLabel = forwardRef<ElementRef<'span'>, MenuItemLabelProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    const classes = classNames('ab-Menu-item-label', className);

    return (
      <span ref={forwardedRef} className={classes} {...rest}>
        {children}
      </span>
    );
  },
);

MenuItemLabel.displayName = 'Menu.ItemLabel';
