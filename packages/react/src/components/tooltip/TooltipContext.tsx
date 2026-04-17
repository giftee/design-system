import { createContext, useContext } from 'react';

interface TooltipContextValue {
  contentId: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const TooltipContext = createContext<TooltipContextValue | null>(null);

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);

  if (!context) {
    throw new Error(
      'Tooltip compound componentsはTooltipコンテキスト内で使用する必要があります。',
    );
  }

  return context;
};
