import { forwardRef } from 'react';
import { useMergeRefs } from '@/utils/useMergeRefs';
import { usePopOverRootContext } from './PopOverRoot';
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  MouseEvent as ReactMouseEvent,
} from 'react';

export type PopOverTriggerProps = ComponentPropsWithoutRef<'button'>;

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
export const PopOverTrigger = forwardRef<
  ElementRef<'button'>,
  PopOverTriggerProps
>(
  (
    { children, disabled, id, onClick, type = 'button', ...rest },
    forwardedRef,
  ) => {
    const { open, popoverId, setOpen, triggerId, triggerRef } =
      usePopOverRootContext();
    const mergedRef = useMergeRefs(triggerRef, forwardedRef);

    const handleClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
      onClick?.(event);

      if (event.defaultPrevented || disabled) return;

      setOpen(!open);
    };

    return (
      <button
        {...rest}
        ref={mergedRef}
        type={type}
        id={id ?? triggerId}
        disabled={disabled}
        aria-expanded={open}
        aria-controls={popoverId}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {children}
      </button>
    );
  },
);

PopOverTrigger.displayName = 'PopOver.Trigger';
