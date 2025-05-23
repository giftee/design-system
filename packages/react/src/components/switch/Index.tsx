import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

/**
 * スイッチコンポーネントのProps
 * @property {('top'|'bottom'|'left'|'right')} [position='right'] - スイッチの位置
 */
export type SwitchProps = ComponentPropsWithoutRef<'input'> & {
  position?: 'top' | 'bottom' | 'left' | 'right';
};

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
        <div className="ab-Switch-label">{children}</div>
        <div className="ab-Switch">
          <input
            type="checkbox"
            className="ab-Switch-input"
            ref={forwardedRef}
            {...rest}
          />
          <span className="ab-Switch-slider"></span>
          <span className="ab-Switch-mark"></span>
        </div>
      </label>
    );
  },
);

Switch.displayName = 'Switch';
