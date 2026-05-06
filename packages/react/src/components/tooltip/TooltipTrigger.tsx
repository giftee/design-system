import { useTooltipContext } from './TooltipContext';
import type { KeyboardEvent, ReactElement } from 'react';

interface TriggerProps {
  'aria-describedby': string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
  onKeyDown: (event: KeyboardEvent) => void;
}

export type TooltipTriggerProps = {
  children: (props: TriggerProps) => ReactElement;
};

export const TooltipTrigger = ({ children }: TooltipTriggerProps) => {
  const { contentId, setOpen, setDismissed } = useTooltipContext();

  return children({
    'aria-describedby': contentId,
    onMouseEnter: () => {
      setOpen(true);
      setDismissed(false);
    },
    onMouseLeave: () => {
      setOpen(false);
      setDismissed(false);
    },
    onFocus: () => {
      setOpen(true);
      setDismissed(false);
    },
    onBlur: () => {
      setOpen(false);
      setDismissed(false);
    },
    onKeyDown: (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDismissed(true);
    },
  });
};

TooltipTrigger.displayName = 'Tooltip.Trigger';
