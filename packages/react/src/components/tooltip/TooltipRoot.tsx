import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
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
    const classes = classNames(
      'ab-Tooltip',
      `ab-Tooltip-${position}`,
      className,
    );

    return (
      <span ref={forwardedRef} className={classes} {...rest}>
        {children}
      </span>
    );
  },
);

TooltipRoot.displayName = 'Tooltip.Root';
