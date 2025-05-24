import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type AccordionRootProps = ComponentPropsWithoutRef<'details'> & {
  /**
   * アコーディオンのサイズ
   * @default 'medium'
   */
  size?: 'small' | 'medium';
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
 * - [Accordion](https://abukuma.netlify.app/react/component/accordion)
 *
 * GitHub:
 *
 * - [Accordion](https://github.com/giftee/design-system/tree/main/packages/react/src/components/accordion)
 */
export const AccordionRoot = forwardRef<
  ElementRef<'details'>,
  AccordionRootProps
>(
  (
    { size = 'medium', disabled = false, children, className, ...rest },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-Accordion',
      `ab-Accordion-${size}`,
      disabled && 'is-disabled',
      className,
    );

    return (
      <details ref={forwardedRef} className={classes} {...rest}>
        {children}
      </details>
    );
  },
);

AccordionRoot.displayName = 'Accordion.Root';
