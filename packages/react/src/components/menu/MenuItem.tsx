import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type MenuItemProps = ComponentPropsWithoutRef<'li'> & {
  disabled?: boolean;
  selected?: boolean;
};

export const MenuItem = forwardRef<ElementRef<'li'>, MenuItemProps>(
  (
    { disabled = false, selected = false, children, className, ...rest },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-Menu-item',
      disabled && `is-disabled`,
      selected && `is-selected`,
      className,
    );

    return (
      <li ref={forwardedRef} className={classes} role="menuitem" {...rest}>
        {children}
      </li>
    );
  },
);

MenuItem.displayName = 'Menu.Item';
