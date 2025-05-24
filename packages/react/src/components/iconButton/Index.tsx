import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type IconButtonProps = ComponentPropsWithoutRef<'button'> & {
  /**
   * ボタンのバリアント（見た目のスタイル）
   * @default 'default'
   */
  variant?: 'default' | 'outlined' | 'neutral' | 'text' | 'negative';
  /**
   * ボタンのサイズ
   * @default 'small'
   */
  size?: 'small' | 'large';
};

/**
 *
 * Docs:
 *
 * - [IconButton](https://abukuma.netlify.app/react/component/iconbutton)
 *
 * GitHub:
 *
 * - [IconButton](https://github.com/giftee/design-system/tree/main/packages/react/src/components/iconButton)
 */
export const IconButton = forwardRef<ElementRef<'button'>, IconButtonProps>(
  ({ children, className, variant, size, ...rest }, forwardedRef) => {
    const classes = classNames(
      'ab-IconButton',
      !!variant && variant !== 'default' && `ab-IconButton-${variant}`,
      !!size && `ab-IconButton-${size}`,
      className,
    );

    return (
      <button className={classes} ref={forwardedRef} {...rest}>
        {children}
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';
