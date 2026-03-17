import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type TooltipTriggerProps = ComponentPropsWithoutRef<'span'>;

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
export const TooltipTrigger = forwardRef<
  ElementRef<'span'>,
  TooltipTriggerProps
>(({ children, ...rest }, forwardedRef) => (
  <span ref={forwardedRef} {...rest}>
    {children}
  </span>
));

TooltipTrigger.displayName = 'Tooltip.Trigger';
