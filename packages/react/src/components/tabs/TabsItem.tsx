import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type TabsItemProps = Omit<
  ComponentPropsWithoutRef<'button'>,
  'onClick'
> & {
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

  /**
   * クリック時のイベントハンドラ
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
  ({ children, className, selected, disabled, ...rest }, forwardedRef) => {
    const classes = classNames(
      'ab-Tabs-item',
      selected && 'is-selected',
      disabled && 'is-disabled',
      className,
    );

    return (
      <button
        type="button"
        role="tab"
        aria-selected={selected}
        disabled={disabled}
        ref={forwardedRef}
        className={classes}
        {...rest}
      >
        <span className="ab-Tabs-item-label">{children}</span>
      </button>
    );
  },
);

TabsItem.displayName = 'Tabs.Item';
