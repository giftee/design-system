import { PopOverContent } from './PopOverContent';
import { PopOverRoot } from './PopOverRoot';
import { PopOverTrigger } from './PopOverTrigger';
import type { PopOverContentProps } from './PopOverContent';
import type { PopOverRootProps } from './PopOverRoot';
import type { PopOverTriggerProps } from './PopOverTrigger';

export const PopOver = {
  Root: PopOverRoot,
  Trigger: PopOverTrigger,
  Content: PopOverContent,
} as const;

export {
  PopOverContent as Content,
  PopOverRoot as Root,
  PopOverTrigger as Trigger,
};

export type {
  PopOverContentProps as ContentProps,
  PopOverRootProps as RootProps,
  PopOverTriggerProps as TriggerProps,
};
