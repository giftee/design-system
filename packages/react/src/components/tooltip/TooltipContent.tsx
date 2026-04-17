import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import { useTooltipContext } from './TooltipContext';
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
  const { contentId, open } = useTooltipContext();
  const classes = classNames('ab-Tooltip-description', className);

  if (!open) return null;

  return (
    <span
      ref={forwardedRef}
      className={classes}
      role="tooltip"
      id={contentId}
      {...rest}
    >
      {children}
    </span>
  );
});

TooltipContent.displayName = 'Tooltip.Content';
