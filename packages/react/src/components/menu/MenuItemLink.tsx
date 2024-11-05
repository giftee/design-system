import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type MenuItemLinkProps = ComponentPropsWithoutRef<'a'>;

export const MenuItemLink = forwardRef<ElementRef<'a'>, MenuItemLinkProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    const classes = classNames('ab-Menu-item-link', className);

    return (
      <a ref={forwardedRef} className={classes} {...rest}>
        {children}
      </a>
    );
  },
);

MenuItemLink.displayName = 'Menu.ItemLink';
