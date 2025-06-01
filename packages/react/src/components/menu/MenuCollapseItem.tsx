import { forwardRef, useState } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type MenuCollapseItemProps = ComponentPropsWithoutRef<'li'> & {
  /**
   * サブメニューラベル
   */
  label: string;
  /**
   * サブメニューのデフォルト開閉状態
   */
  defaultOpen?: boolean;
};

export const MenuCollapseItem = forwardRef<
  ElementRef<'li'>,
  MenuCollapseItemProps
>(
  (
    { label, defaultOpen = true, children, className, ...rest },
    forwardedRef,
  ) => {
    const [open, setOpen] = useState(defaultOpen);
    const classes = classNames('ab-Menu-item', open && 'is-open', className);

    return (
      <li ref={forwardedRef} className={classes} role="menuitem" {...rest}>
        <button className="ab-Menu-button" onClick={() => setOpen(!open)}>
          {label}
          {open ? (
            <svg
              className="ab-Icon ab-ml-auto"
              fill="currentColor"
              viewBox="0 0 18 3"
            >
              <path d="M17.125 1.5C17.125 2.20312 16.5391 2.75 15.875 2.75H2.125C1.42188 2.75 0.875 2.20312 0.875 1.5C0.875 0.835938 1.42188 0.25 2.125 0.25H15.875C16.5391 0.25 17.125 0.835938 17.125 1.5Z" />
            </svg>
          ) : (
            <svg
              className="ab-Icon ab-ml-auto"
              fill="currentColor"
              viewBox="0 0 18 17"
            >
              <path d="M10.25 1.625V7.25H15.875C16.5391 7.25 17.125 7.83594 17.125 8.5C17.125 9.20312 16.5391 9.75 15.875 9.75H10.25V15.375C10.25 16.0781 9.66406 16.625 9 16.625C8.29688 16.625 7.75 16.0781 7.75 15.375V9.75H2.125C1.42188 9.75 0.875 9.20312 0.875 8.5C0.875 7.83594 1.42188 7.25 2.125 7.25H7.75V1.625C7.75 0.960938 8.29688 0.375 9 0.375C9.66406 0.375 10.25 0.960938 10.25 1.625Z" />
            </svg>
          )}
        </button>
        {children}
      </li>
    );
  },
);

MenuCollapseItem.displayName = 'Menu.CollapseItem';
