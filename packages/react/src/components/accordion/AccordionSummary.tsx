import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type AccordionSummaryProps = ComponentPropsWithoutRef<'summary'>;

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
export const AccordionSummary = forwardRef<
  ElementRef<'summary'>,
  AccordionSummaryProps
>(({ children, className, ...rest }, forwardedRef) => {
  const classes = classNames('ab-Accordion-summary', className);

  return (
    <summary ref={forwardedRef} className={classes} {...rest}>
      {children}
    </summary>
  );
});

AccordionSummary.displayName = 'Accordion.Summary';
