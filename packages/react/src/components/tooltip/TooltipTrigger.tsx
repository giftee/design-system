import { useTooltipContext } from './TooltipContext';
import type { ReactNode } from 'react';

export type TooltipTriggerProps = {
  children?: ReactNode;
};

export const TooltipTrigger = ({ children }: TooltipTriggerProps) => {
  const { contentId, setOpen, setDismissed } = useTooltipContext();

  return (
    <button
      type="button"
      aria-describedby={contentId}
      onMouseEnter={() => {
        setOpen(true);
        setDismissed(false);
      }}
      onMouseLeave={() => {
        setOpen(false);
        setDismissed(false);
      }}
      onFocus={() => {
        setOpen(true);
        setDismissed(false);
      }}
      onBlur={() => {
        setOpen(false);
        setDismissed(false);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') setDismissed(true);
      }}
    >
      {children}
    </button>
  );
};

TooltipTrigger.displayName = 'Tooltip.Trigger';
