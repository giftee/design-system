import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import { useAccordionContext } from './AccordionRoot';
import type { ComponentPropsWithoutRef, ElementRef, MouseEvent } from 'react';

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
>(({ children, className, tabIndex, onClick, ...rest }, forwardedRef) => {
  const { disabled } = useAccordionContext();
  const classes = classNames('ab-Accordion-summary', className);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (disabled) {
      // summary の click をキャンセルすると details の開閉（キーボード操作含む）が抑止される
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <summary
      ref={forwardedRef}
      className={classes}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : tabIndex}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </summary>
  );
});

AccordionSummary.displayName = 'Accordion.Summary';
