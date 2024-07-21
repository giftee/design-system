import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type AccordionRootProps = ComponentPropsWithoutRef<'details'> & {
  size?: 'small' | 'medium';
  disabled?: boolean;
};

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
