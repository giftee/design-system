import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

/**
 * インラインアラートタイトルコンポーネントのProps
 * @property {ComponentPropsWithoutRef<'div'>} - divタグのすべてのプロパティを継承
 */
export type InlineAlertTitleProps = ComponentPropsWithoutRef<'div'>;

export const InlineAlertTitle = forwardRef<
  ElementRef<'div'>,
  InlineAlertTitleProps
>(({ children, className, ...rest }, forwardedRef) => {
  const InlineAlertTitleClassName = classNames(
    'ab-InlineAlert-title',
    className,
  );

  return (
    <div ref={forwardedRef} className={InlineAlertTitleClassName} {...rest}>
      {children}
    </div>
  );
});

InlineAlertTitle.displayName = 'InlineAlertTitle';
