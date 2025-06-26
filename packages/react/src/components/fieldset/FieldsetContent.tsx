import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type FieldsetContentProps = ComponentPropsWithoutRef<'div'>;

export const FieldsetContent = forwardRef<
  ElementRef<'div'>,
  FieldsetContentProps
>(({ children, className, ...rest }, forwardedRef) => {
  const fieldsetContentClassName = classNames('ab-Fieldset-content', className);

  return (
    <div ref={forwardedRef} className={fieldsetContentClassName} {...rest}>
      {children}
    </div>
  );
});

FieldsetContent.displayName = 'FieldsetContent';
