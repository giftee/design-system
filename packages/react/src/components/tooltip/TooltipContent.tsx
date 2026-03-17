import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type TooltipContentProps = ComponentPropsWithoutRef<'span'>;

/**
 *
 * Docs:
 *
 * - [Tooltip](https://abukuma.netlify.app/react/component/tooltip)
 *
 * GitHub:
 *
 * - [Tooltip](https://github.com/giftee/design-system/tree/main/packages/react/src/components/tooltip)
 */
export const TooltipContent = forwardRef<
  ElementRef<'span'>,
  TooltipContentProps
>(({ children, className, ...rest }, forwardedRef) => {
  const classes = classNames('ab-Tooltip-description', className);

  return (
    <span ref={forwardedRef} className={classes} {...rest}>
      {children}
    </span>
  );
});

TooltipContent.displayName = 'Tooltip.Content';
