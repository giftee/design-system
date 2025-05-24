import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type LinkTextProps = ComponentPropsWithoutRef<'a'> & {
  /**
   * リンクのバリアント
   * @default default
   */
  variant?: 'default' | 'brand';
  /**
   * 無効状態かどうか
   */
  disabled?: boolean;
  /**
   * 下線を表示するかどうか
   * @default true
   */
  underline?: boolean;
};

/**
 *
 * Docs:
 *
 * - [LinkText](https://abukuma.netlify.app/react/component/linktext)
 *
 * GitHub:
 *
 * - [LinkText](https://github.com/giftee/design-system/tree/main/packages/react/src/components/linkText)
 */
export const LinkText = forwardRef<ElementRef<'a'>, LinkTextProps>(
  (
    {
      variant = 'default',
      disabled,
      underline = true,
      children,
      className,
      ...rest
    },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-LinkText',
      variant !== 'default' && `ab-LinkText-${variant}`,
      disabled && 'is-disabled',
      !underline && 'ab-LinkText-quiet',
      className,
    );

    return (
      <a ref={forwardedRef} className={classes} {...rest}>
        {children}
      </a>
    );
  },
);

LinkText.displayName = 'LinkText';
