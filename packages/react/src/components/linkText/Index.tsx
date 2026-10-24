import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef, MouseEvent } from 'react';

export type LinkTextProps = ComponentPropsWithoutRef<'a'> & {
  /**
   * 種類
   */
  variant?: 'default' | 'brand';
  /**
   * 非活性。`aria-disabled` を付与し、フォーカス順序から外し、クリックと href の遷移を抑止する
   */
  disabled?: boolean;
  /**
   * 下線
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
      href,
      tabIndex,
      onClick,
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

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

    return (
      <a
        ref={forwardedRef}
        href={href}
        className={classes}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : tabIndex}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </a>
    );
  },
);

LinkText.displayName = 'LinkText';
