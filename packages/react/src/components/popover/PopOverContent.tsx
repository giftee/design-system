import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import { useOptionalPopOverRootContext } from './PopOverRoot';
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
  /**
   * 開閉状態。true のとき is-open クラスが付与され、hidden 属性が外れる。
   * PopOver.Root 配下では Root の開閉状態が使われる。
   * @default false
   */
  open?: boolean;
};

export const PopOverContent = forwardRef<
  ElementRef<'div'>,
  PopOverContentProps
>(
  (
    {
      placement = 'top',
      align = 'center',
      open: controlledOpen,
      id,
      children,
      className,
      ...rest
    },
    forwardedRef,
  ) => {
    const context = useOptionalPopOverRootContext();
    const open = controlledOpen ?? context?.open ?? false;
    const popoverId = id ?? context?.popoverId;
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
        id={popoverId}
        hidden={!open}
        className={classes}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

PopOverContent.displayName = 'PopOver.Content';
