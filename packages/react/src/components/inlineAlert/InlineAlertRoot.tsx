import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type InlineAlertRootProps = ComponentPropsWithoutRef<'div'> & {
  /**
   * アラートのバリアント
   * @default 'neutral'
   */
  variant?: 'neutral' | 'info' | 'notice' | 'positive' | 'negative';
};

/**
 *
 * Docs:
 *
 * - [InlineAlert](https://abukuma.netlify.app/react/component/inlinealert)
 *
 * GitHub:
 *
 * - [InlineAlert](https://github.com/giftee/design-system/tree/main/packages/react/src/components/inlineAlert)
 */
export const InlineAlertRoot = forwardRef<
  ElementRef<'div'>,
  InlineAlertRootProps
>(({ children, variant = 'neutral', className, ...rest }, forwardedRef) => {
  const InlineAlertRootClassName = classNames(
    'ab-InlineAlert',
    `ab-InlineAlert-${variant}`,
    className,
  );

  return (
    <div ref={forwardedRef} className={InlineAlertRootClassName} {...rest}>
      {children}
    </div>
  );
});

InlineAlertRoot.displayName = 'InlineAlertRoot';
