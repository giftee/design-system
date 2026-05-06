import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import { usePopOverRootContext } from './PopOverRoot';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type PopOverContentProps = ComponentPropsWithoutRef<'div'> & {
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
export const PopOverContent = forwardRef<
  ElementRef<'div'>,
  PopOverContentProps
>(
  (
    { placement = 'top', align = 'center', children, className, ...rest },
    forwardedRef,
  ) => {
    const { open, popoverId } = usePopOverRootContext();
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
      <div
        ref={forwardedRef}
        {...rest}
        id={popoverId}
        hidden={!open}
        className={classes}
      >
        {children}
      </div>
    );
  },
);

PopOverContent.displayName = 'PopOver.Content';
