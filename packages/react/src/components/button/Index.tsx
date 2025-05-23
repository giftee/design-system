import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick'
> &
  Omit<ComponentPropsWithoutRef<'a'>, 'onClick'> & {
    /**
     * ボタンのバリアント（見た目のスタイル）
     */
    variant?: 'default' | 'outlined' | 'neutral' | 'negative' | 'text';
    /**
     * ボタンのサイズ
     */
    size?: 'xsmall' | 'small' | 'large';
    /**
     * ボタンの基本となるコンポーネント
     */
    component?: React.ElementType;
    /**
     * クリック時のイベントハンドラ
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  };

type ElementRefs = ElementRef<'button'> | ElementRef<'a'>;

export const Button = forwardRef<ElementRefs, ButtonProps>(
  (
    { children, className, variant, size, component, disabled, ...rest },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-Button',
      !!variant && variant !== 'default' && `ab-Button-${variant}`,
      !!size && `ab-Button-${size}`,
      className,
    );

    const defaultRootNode = rest.href ? 'a' : 'button';
    const RootNode = component ? component : defaultRootNode;

    const ariaDisabled = !!disabled;

    return (
      <RootNode
        className={classes}
        ref={forwardedRef}
        disabled={disabled}
        aria-disabled={ariaDisabled}
        {...rest}
      >
        {children}
      </RootNode>
    );
  },
);

Button.displayName = 'Button';
