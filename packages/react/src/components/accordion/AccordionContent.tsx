import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type AccordionContentProps = ComponentPropsWithoutRef<'div'>;

export const AccordionContent = forwardRef<
  ElementRef<'div'>,
  AccordionContentProps
>(({ children, className, ...rest }, forwardedRef) => {
  const classes = classNames('ab-Accordion-content', className);

  return (
    <div ref={forwardedRef} className={classes} {...rest}>
      {children}
    </div>
  );
});

AccordionContent.displayName = 'Accordion.Content';
