import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type FieldsetLegendProps = ComponentPropsWithoutRef<'legend'>;

export const FieldsetLegend = forwardRef<
  ElementRef<'legend'>,
  FieldsetLegendProps
>(({ children, className, ...rest }, forwardedRef) => {
  const fieldsetLegendClassName = classNames('ab-Fieldset-legend', className);

  return (
    <legend ref={forwardedRef} className={fieldsetLegendClassName} {...rest}>
      {children}
    </legend>
  );
});

FieldsetLegend.displayName = 'FieldsetLegend';
