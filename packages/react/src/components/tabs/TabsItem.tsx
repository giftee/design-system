import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type TabsItemProps = ComponentPropsWithoutRef<'button'> & {
  /**
   * 選択状態かどうか
   * @default false
   */
  selected?: boolean;

  /**
   * 無効状態かどうか
   * @default false
   */
  disabled?: boolean;
};

/**
 *
 * Docs:
 *
 * - [Tabs](https://abukuma.netlify.app/react/component/tabs)
 *
 * GitHub:
 *
 * - [Tabs](https://github.com/giftee/design-system/tree/main/packages/react/src/components/tabs)
 */

export const TabsItem = forwardRef<ElementRef<'button'>, TabsItemProps>(
  ({ children, className, selected, disabled, ...rest }, forwardRef) => {
    const classes = classNames(
      'ab-Tabs-item',
      selected && 'is-selected',
      disabled && 'is-disabled',
      className,
    );

    return (
      <button
        role="tab"
        aria-selected={selected}
        disabled={disabled}
        ref={forwardRef}
        className={classes}
        {...rest}
      >
        <span className="ab-Tabs-item-label">{children}</span>
      </button>
    );
  },
);

TabsItem.displayName = 'Tabs.Item';
