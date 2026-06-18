import { forwardRef } from 'react';
import { useTooltipContext } from './TooltipContext';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type TooltipTriggerProps = ComponentPropsWithoutRef<'button'>;

export const TooltipTrigger = forwardRef<
  ElementRef<'button'>,
  TooltipTriggerProps
>(
  (
    {
      children,
      type = 'button',
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      onKeyDown,
      ...rest
    },
    forwardedRef,
  ) => {
    const { contentId, setOpen, setDismissed } = useTooltipContext();

    return (
      <button
        ref={forwardedRef}
        type={type}
        {...rest}
        aria-describedby={contentId}
        onMouseEnter={(event) => {
          setOpen(true);
          setDismissed(false);
          onMouseEnter?.(event);
        }}
        onMouseLeave={(event) => {
          setOpen(false);
          setDismissed(false);
          onMouseLeave?.(event);
        }}
        onFocus={(event) => {
          setOpen(true);
          setDismissed(false);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setOpen(false);
          setDismissed(false);
          onBlur?.(event);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') setDismissed(true);
          onKeyDown?.(event);
        }}
      >
        {children}
      </button>
    );
  },
);

TooltipTrigger.displayName = 'Tooltip.Trigger';
