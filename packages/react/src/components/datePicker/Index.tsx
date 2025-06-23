import { forwardRef } from 'react';
import { StatusLabel } from '@/index';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type DatePickerProps = ComponentPropsWithoutRef<'input'> & {
  /**
   * フィールドのラベル
   */
  label?: string;
  /**
   * 補助テキスト
   */
  helptext?: string;
  /**
   * エラー状態を示す
   */
  error?: boolean;
  /**
   * エラーメッセージ（複数可）
   */
  errorMessages?: string[] | string;
};

/**
 *
 * Docs:
 *
 * - [DatePicker](https://abukuma.netlify.app/react/component/datepicker)
 *
 * GitHub:
 *
 * - [DatePicker](https://github.com/giftee/design-system/tree/main/packages/react/src/components/datePicker)
 */
export const DatePicker = forwardRef<ElementRef<'input'>, DatePickerProps>(
  (
    {
      label,
      helptext,
      error,
      errorMessages,
      name,
      required,
      disabled,
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

    const errorMessageIds = errorMessages
      ? Array.isArray(errorMessages)
        ? errorMessages.map((_, index) => `${name}-error-${index}`)
        : [`${name}-error`]
      : [];

    const helptextId = helptext ? `${name}-helptext` : undefined;

    const ariaDescribedBy =
      [
        ...(errorMessageIds.length > 0 ? errorMessageIds : []),
        ...(helptextId ? [helptextId] : []),
      ].join(' ') || undefined;

    return (
      <div className={classes}>
        {!!label && (
          <label htmlFor={name} className="ab-Textfield-label">
            {label}
            {required && <StatusLabel variant="primary">必須</StatusLabel>}
          </label>
        )}
        <span className="ab-DatePicker">
          <input
            id={name}
            name={name}
            type="date"
            className="ab-DatePicker-input"
            ref={forwardedRef}
            required={required}
            disabled={disabled}
            aria-describedby={ariaDescribedBy}
            aria-invalid={!!errorMessages}
            {...rest}
          />
          <svg
            className="ab-DatePicker-icon"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
          </svg>
        </span>
        {!errorMessages ? null : typeof errorMessages === 'string' ? (
          <div
            id={`${name}-error`}
            className="ab-Textfield-error-message"
            role="alert"
          >
            {errorMessages}
          </div>
        ) : (
          <div role="alert">
            {errorMessages.map((errorMessage, index) => (
              <div
                key={errorMessage}
                id={`${name}-error-${index}`}
                className="ab-Textfield-error-message"
              >
                {errorMessage}
              </div>
            ))}
          </div>
        )}

        {!!helptext && (
          <div id={helptextId} className="ab-Textfield-helptext">
            {helptext}
          </div>
        )}
      </div>
    );
  },
);

DatePicker.displayName = 'DatePicker';
