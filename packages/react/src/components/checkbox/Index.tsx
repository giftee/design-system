import { forwardRef, useId } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type CheckboxProps = ComponentPropsWithoutRef<'input'> & {
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
 * - [Checkbox](https://abukuma.netlify.app/react/component/checkbox)
 *
 * GitHub:
 *
 * - [Checkbox](https://github.com/giftee/design-system/tree/main/packages/react/src/components/checkbox)
 */
export const Checkbox = forwardRef<ElementRef<'input'>, CheckboxProps>(
  (
    {
      position = 'right',
      id: idProp,
      name,
      disabled,
      children,
      className,
      ...rest
    },
    forwardedRef,
  ) => {
    const autoId = useId();
    const id = idProp ?? autoId;

    const classes = classNames(
      'ab-Checkbox-wrapper',
      `position-${position}`,
      disabled && 'is-disabled',
      className,
    );

    return (
      <div className={classes}>
        <label htmlFor={id} className="ab-Checkbox-label">
          {children}
        </label>
        <div className="ab-Checkbox">
          <input
            type="checkbox"
            disabled={disabled}
            id={id}
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
