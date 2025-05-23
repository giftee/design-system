import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

/**
 * インラインアラート説明コンポーネントのProps
 */
export type InlineAlertDescriptionProps = ComponentPropsWithoutRef<'div'>;

export const InlineAlertDescription = forwardRef<
  ElementRef<'div'>,
  InlineAlertDescriptionProps
>(({ children, className, ...rest }, forwardedRef) => {
  const inlineAlertDescriptionClassName = classNames(
    'ab-InlineAlert-description',
    className,
  );

  return (
    <div
      ref={forwardedRef}
      className={inlineAlertDescriptionClassName}
      {...rest}
    >
      {children}
    </div>
  );
});

InlineAlertDescription.displayName = 'InlineAlertDescription';
