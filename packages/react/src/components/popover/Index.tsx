import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type PopOverProps = ComponentPropsWithoutRef<'div'> & {
  /**
   * トリガー要素を基準とした表示位置
   * @default 'top'
   */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * トリガー要素の主軸方向に対する整列
   * @default 'center'
   */
  align?: 'center' | 'start' | 'end';
  /**
   * 開閉状態。true のとき is-open クラスが付与され、hidden 属性が外れる。
   * @default false
   */
  open?: boolean;
};

/**
 *
 * Docs:
 *
 * - [Popover](https://abukuma.netlify.app/react/component/popover)
 *
 * GitHub:
 *
 * - [PopOver](https://github.com/giftee/design-system/tree/main/packages/react/src/components/popover)
 */
export const PopOver = forwardRef<ElementRef<'div'>, PopOverProps>(
  (
    {
      placement = 'top',
      align = 'center',
      open = false,
      children,
      className,
      ...rest
    },
    forwardedRef,
  ) => {
    const positionClass =
      align === 'center'
        ? `ab-Popover-${placement}`
        : `ab-Popover-${placement}-${align}`;
    const classes = classNames(
      'ab-Popover',
      positionClass,
      open && 'is-open',
      className,
    );

    return (
      <div ref={forwardedRef} hidden={!open} className={classes} {...rest}>
        {children}
      </div>
    );
  },
);

PopOver.displayName = 'PopOver';
