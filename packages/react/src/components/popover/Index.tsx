import { PopOverContent } from './PopOverContent';
import { PopOverRoot } from './PopOverRoot';
import { PopOverTrigger } from './PopOverTrigger';
import type { PopOverContentProps } from './PopOverContent';
import type { PopOverRootProps } from './PopOverRoot';
import type { PopOverTriggerProps } from './PopOverTrigger';

export type PopOverProps = PopOverContentProps;

/**
 *
 * Docs:
 *
 * - [Popover](https://abukuma.netlify.app/react/component/popover)
 *
 * GitHub:
 *
 * - [PopOver](https://github.com/giftee/design-system/tree/main/packages/react/src/components/popover)
 */
export const PopOver = Object.assign(PopOverContent, {
  Root: PopOverRoot,
  Trigger: PopOverTrigger,
  Content: PopOverContent,
});

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
