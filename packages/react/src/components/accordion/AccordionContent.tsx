import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type AccordionContentProps = ComponentPropsWithoutRef<'div'>;

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
