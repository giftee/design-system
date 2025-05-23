import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type CheckboxProps = ComponentPropsWithoutRef<'input'> & {
  /**
   * ラベルの位置
   * @default 'right'
   */
  position?: 'top' | 'bottom' | 'left' | 'right';
};

export const Checkbox = forwardRef<ElementRef<'input'>, CheckboxProps>(
  (
    { position = 'right', name, disabled, children, className, ...rest },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-Checkbox-wrapper',
      `position-${position}`,
      disabled && 'is-disabled',
      className,
    );

    return (
      <div className={classes}>
        <label htmlFor={name} className="ab-Checkbox-label">
          {children}
        </label>
        <div className="ab-Checkbox">
          <input
            type="checkbox"
            disabled={disabled}
            id={name}
            name={name}
            className="ab-Checkbox-input"
            ref={forwardedRef}
            {...rest}
          />
          <span className="ab-Checkbox-box"></span>
        </div>
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
