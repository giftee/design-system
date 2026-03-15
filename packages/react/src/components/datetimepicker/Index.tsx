import { forwardRef, useId } from 'react';
import { StatusLabel } from '@/index';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type DateTimePickerProps = ComponentPropsWithoutRef<'input'> & {
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
 * - [DateTimePicker](https://abukuma.netlify.app/react/component/datetimepicker)
 *
 * GitHub:
 *
 * - [DateTimePicker](https://github.com/giftee/design-system/tree/main/packages/react/src/components/datetimepicker)
 */
export const DateTimePicker = forwardRef<
  ElementRef<'input'>,
  DateTimePickerProps
>(
  (
    {
      label,
      helptext,
      error,
      errorMessages,
      id: idProp,
      name,
      required,
      className,
      ...rest
    },
    forwardedRef,
  ) => {
    const autoId = useId();
    const id = idProp ?? autoId;
    const classes = classNames('ab-Textfield', error && 'is-error', className);
    const errorMessageIds = errorMessages
      ? Array.isArray(errorMessages)
        ? errorMessages.map((_, index) => `${id}-error-${index}`)
        : [`${id}-error`]
      : [];
    const helptextId = helptext ? `${id}-helptext` : undefined;
    const ariaDescribedBy =
      [
        ...(errorMessageIds.length > 0 ? errorMessageIds : []),
        ...(helptextId ? [helptextId] : []),
      ].join(' ') || undefined;
    const ariaErrorMessage = errorMessageIds.join(' ') || undefined;
    const ariaInvalid = error || errorMessageIds.length > 0;

    return (
      <div className={classes}>
        {!!label && (
          <label htmlFor={id} className="ab-Textfield-label">
            {label}
            {required && <StatusLabel variant="primary">必須</StatusLabel>}
          </label>
        )}
        <span className="ab-DateTimePicker">
          <input
            id={id}
            name={name}
            type="datetime-local"
            className="ab-DateTimePicker-input"
            ref={forwardedRef}
            required={required}
            aria-describedby={ariaDescribedBy}
            aria-errormessage={ariaErrorMessage}
            aria-invalid={ariaInvalid}
            {...rest}
          />
        </span>
        {!errorMessages ? null : typeof errorMessages === 'string' ? (
          <div
            id={`${id}-error`}
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
                id={`${id}-error-${index}`}
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

DateTimePicker.displayName = 'DateTimePicker';
