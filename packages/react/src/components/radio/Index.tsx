import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

/**
 * ラジオボタンコンポーネントのProps
 * @property {('top'|'bottom'|'left'|'right')} [position='right'] - ラジオボタンの位置
 */
export type RadioProps = ComponentPropsWithoutRef<'input'> & {
  position?: 'top' | 'bottom' | 'left' | 'right';
};

export const Radio = forwardRef<ElementRef<'input'>, RadioProps>(
  (
    { position = 'right', name, disabled, children, className, ...rest },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-Radio-wrapper',
      `position-${position}`,
      disabled && 'is-disabled',
      className,
    );

    return (
      <div className={classes}>
        {children && (
          <label htmlFor={name} className="ab-Radio-label">
            {children}
          </label>
        )}
        <div className="ab-Radio">
          <input
            type="radio"
            id={name}
            name={name}
            disabled={disabled}
            className="ab-Radio-input"
            ref={forwardedRef}
            {...rest}
          />
          <span className="ab-Radio-radio"></span>
        </div>
      </div>
    );
  },
);

Radio.displayName = 'Radio';
