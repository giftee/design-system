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
>(({ children, className, style, ...rest }, forwardedRef) => {
  const { contentId, open, dismissed } = useTooltipContext();
  const classes = classNames('ab-Tooltip-description', className);

  return (
    <span
      {...rest}
      ref={forwardedRef}
      className={classes}
      role="tooltip"
      id={contentId}
      style={
        dismissed
          ? { ...style, opacity: 0, visibility: 'hidden' }
          : open
            ? { ...style, opacity: 1, visibility: 'visible' }
            : style
      }
    >
      {children}
    </span>
  );
});

TooltipContent.displayName = 'Tooltip.Content';
