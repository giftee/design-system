import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react';

export type TooltipProps = Omit<ComponentPropsWithoutRef<'span'>, 'content'> & {
  /**
   * ツールチップの表示位置
   * @default 'top'
   */
  position?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * ツールチップに表示するテキスト
   */
  content: ReactNode;
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
export const Tooltip = forwardRef<ElementRef<'span'>, TooltipProps>(
  (
    { position = 'top', content, children, className, ...rest },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-Tooltip',
      `ab-Tooltip-${position}`,
      className,
    );

    return (
      <span ref={forwardedRef} className={classes} {...rest}>
        {children}
        <span className="ab-Tooltip-description">{content}</span>
      </span>
    );
  },
);

Tooltip.displayName = 'Tooltip';
