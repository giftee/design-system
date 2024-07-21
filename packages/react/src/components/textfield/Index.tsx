import { forwardRef } from 'react';
import { StatusLabel } from '@/index';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type TextfieldProps = ComponentPropsWithoutRef<'input'> & {
  label?: string;
  helptext?: string;
  error?: boolean;
};

export const Textfield = forwardRef<ElementRef<'input'>, TextfieldProps>(
  (
    {
      label,
      helptext,
      error,
      name,
      required,
      disabled,
      children,
      className,
      ...rest
    },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-Textfield',
      error && 'is-error',
      disabled && 'is-disabled',
      className,
    );

    return (
      <div className={classes}>
        {!!label && (
          <label htmlFor={name} className="ab-Textfield-label">
            {label}
            {required && <StatusLabel variant="primary">必須</StatusLabel>}
          </label>
        )}
        <input
          id={name}
          name={name}
          className="ab-Textfield-input"
          ref={forwardedRef}
          required={required}
          {...rest}
        />
        {!!helptext && <div className="ab-Textfield-helptext">{helptext}</div>}
      </div>
    );
  },
);

Textfield.displayName = 'Textfield';
