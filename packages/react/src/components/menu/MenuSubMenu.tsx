import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

/**
 * メニューサブメニューコンポーネントのProps
 */
export type MenuSubMenuProps = ComponentPropsWithoutRef<'ul'>;

export const MenuSubMenu = forwardRef<ElementRef<'ul'>, MenuSubMenuProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    const classes = classNames('ab-Menu-sub-menu', className);

    return (
      <ul ref={forwardedRef} className={classes} role="menu" {...rest}>
        {children}
      </ul>
    );
  },
);

MenuSubMenu.displayName = 'Menu.SubMenu';
