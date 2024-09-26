import { forwardRef } from 'react';
import { StatusLabel } from '@/index';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type TextfieldProps = ComponentPropsWithoutRef<'input'> &
  ComponentPropsWithoutRef<'textarea'> & {
    label?: string;
    helptext?: string;
    error?: boolean;
    multiline?: number;
    resize?: 'vertical' | 'horizontal' | 'both' | 'none';
  };

export const Textfield = forwardRef<
  ElementRef<'input'> & ElementRef<'textarea'>,
  TextfieldProps
>(
  (
    {
      label,
      helptext,
      error,
      name,
      required,
      disabled,
      multiline,
      resize = 'none',
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
      resize === 'both'
        ? 'resize-both'
        : resize === 'horizontal'
          ? 'resize-horizontal'
          : resize === 'vertical'
            ? 'resize-vertical'
            : '',
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
        {!multiline ? (
          <input
            id={name}
            name={name}
            className="ab-Textfield-input"
            ref={forwardedRef}
            required={required}
            {...rest}
          />
        ) : (
          <textarea
            id={name}
            name={name}
            className="ab-Textfield-textarea"
            ref={forwardedRef}
            required={required}
            rows={multiline}
            {...rest}
          />
        )}
        {!!helptext && <div className="ab-Textfield-helptext">{helptext}</div>}
      </div>
    );
  },
);

Textfield.displayName = 'Textfield';
