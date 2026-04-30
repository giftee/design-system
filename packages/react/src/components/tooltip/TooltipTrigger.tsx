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
  const { contentId, setOpen } = useTooltipContext();

  return children({
    'aria-describedby': contentId,
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false),
    onKeyDown: (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    },
  });
};

TooltipTrigger.displayName = 'Tooltip.Trigger';
