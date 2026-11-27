import { forwardRef, useEffect, useId, useState } from 'react';
import { classNames } from '@/utils/classNames';
import { TooltipContext } from './TooltipContext';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type TooltipRootProps = ComponentPropsWithoutRef<'span'> & {
  /**
   * ツールチップの表示位置
   * @default 'top'
   */
  position?: 'top' | 'right' | 'bottom' | 'left';
};

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
export const TooltipRoot = forwardRef<ElementRef<'span'>, TooltipRootProps>(
  ({ position = 'top', children, className, ...rest }, forwardedRef) => {
    const contentId = useId();
    const [open, setOpen] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
      if (!open) return;
      const handler = (event: KeyboardEvent) => {
        if (event.key === 'Escape') setDismissed(true);
      };
      document.addEventListener('keydown', handler);
      return () => document.removeEventListener('keydown', handler);
    }, [open]);

    const classes = classNames(
      'ab-Tooltip',
      `ab-Tooltip-${position}`,
      className,
    );

    return (
      <TooltipContext.Provider
        value={{ contentId, open, setOpen, dismissed, setDismissed }}
      >
        <span ref={forwardedRef} className={classes} {...rest}>
          {children}
        </span>
      </TooltipContext.Provider>
    );
  },
);

TooltipRoot.displayName = 'Tooltip.Root';
