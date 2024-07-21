import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type InlineAlertRootProps = ComponentPropsWithoutRef<'div'> & {
  variant?: 'neutral' | 'info' | 'notice' | 'positive' | 'negative';
};

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
