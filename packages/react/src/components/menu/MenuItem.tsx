import { Children, cloneElement, forwardRef, isValidElement } from 'react';
import { classNames } from '@/utils/classNames';
import { MenuItemLink } from './MenuItemLink';
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  MouseEvent as ReactMouseEvent,
  ReactElement,
} from 'react';

export type MenuItemProps = ComponentPropsWithoutRef<'li'> & {
  /**
   * 無効状態かどうか
   * @default false
   */
  disabled?: boolean;
  /**
   * 選択されている状態かどうか
   * @default false
   */
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
    const content = Children.map(children, (child) => {
      if (!isValidElement<ComponentPropsWithoutRef<'a'>>(child)) {
        return child;
      }

      if (child.type !== MenuItemLink) {
        return child;
      }

      return cloneElement(
        child as ReactElement<ComponentPropsWithoutRef<'a'>>,
        {
          'aria-current':
            child.props['aria-current'] ?? (selected ? 'page' : undefined),
          'aria-disabled':
            child.props['aria-disabled'] ?? (disabled ? true : undefined),
          tabIndex: disabled
            ? (child.props.tabIndex ?? -1)
            : child.props.tabIndex,
          onClick: (event: ReactMouseEvent<HTMLAnchorElement>) => {
            if (disabled) {
              event.preventDefault();
              return;
            }

            child.props.onClick?.(event);
          },
        },
      );
    });

    return (
      <li ref={forwardedRef} className={classes} {...rest}>
        {content}
      </li>
    );
  },
);

MenuItem.displayName = 'Menu.Item';
