import { forwardRef, useCallback, useId } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef, KeyboardEvent } from 'react';

export type SwitchProps = ComponentPropsWithoutRef<'input'> & {
  position?: 'top' | 'bottom' | 'left' | 'right';
};

export const Switch = forwardRef<ElementRef<'input'>, SwitchProps>(
  (
    { position = 'right', name, children, className, disabled, checked, onChange, ...rest },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-Switch-wrapper',
      `position-${position}`,
      className,
    );
    
    const switchId = useId();
    const labelId = `${switchId}-label`;
    
    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (onChange && !disabled) {
          const event = {
            target: {
              checked: !checked,
              name,
            },
          } as React.ChangeEvent<HTMLInputElement>;
          onChange(event);
        }
      }
    }, [checked, disabled, name, onChange]);

    return (
      <label className={classes}>
        <div id={labelId} className="ab-Switch-label">{children}</div>
        <div className="ab-Switch">
          <input
            type="checkbox"
            className="ab-Switch-input"
            ref={forwardedRef}
            role="switch"
            aria-checked={checked}
            aria-labelledby={labelId}
            aria-disabled={disabled}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            name={name}
            {...rest}
          />
          <span className="ab-Switch-slider" aria-hidden="true"></span>
          <span className="ab-Switch-mark" aria-hidden="true"></span>
        </div>
      </label>
    );
  },
);

Switch.displayName = 'Switch';
