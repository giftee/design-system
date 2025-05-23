import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type MenuRootProps = ComponentPropsWithoutRef<'ul'> & {
  /**
   * メニューのサイズ
   * @default 'medium'
   */
  size?: 'medium' | 'small';
};

export const MenuRoot = forwardRef<ElementRef<'ul'>, MenuRootProps>(
  ({ size = 'medium', children, className, ...rest }, forwardedRef) => {
    const classes = classNames('ab-Menu', `ab-Menu-${size}`, className);

    return (
      <ul ref={forwardedRef} className={classes} role="menu" {...rest}>
        {children}
      </ul>
    );
  },
);

MenuRoot.displayName = 'Menu.Root';
