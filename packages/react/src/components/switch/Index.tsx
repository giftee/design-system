import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type SwitchProps = ComponentPropsWithoutRef<'input'> & {
  /**
   * ラベルの位置
   * @default 'right'
   */
  position?: 'top' | 'bottom' | 'left' | 'right';
};

/**
 *
 * Docs:
 *
 * - [Switch](https://abukuma.netlify.app/react/component/switch)
 *
 * GitHub:
 *
 * - [Switch](https://github.com/giftee/design-system/tree/main/packages/react/src/components/switch)
 */
export const Switch = forwardRef<ElementRef<'input'>, SwitchProps>(
  (
    { position = 'right', name, children, className, ...rest },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-Switch-wrapper',
      `position-${position}`,
      className,
    );

    return (
      <label className={classes}>
        <span className="ab-Switch-label">{children}</span>
        <span className="ab-Switch">
          <input
            type="checkbox"
            className="ab-Switch-input"
            ref={forwardedRef}
            {...rest}
          />
          <span className="ab-Switch-slider"></span>
          <span className="ab-Switch-mark"></span>
        </span>
      </label>
    );
  },
);

Switch.displayName = 'Switch';
