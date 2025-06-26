import { forwardRef } from 'react';
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
      name,
      required,
      className,
      ...rest
    },
    forwardedRef,
  ) => {
    const classes = classNames('ab-Textfield', error && 'is-error', className);

    return (
      <div className={classes}>
        {!!label && (
          <label htmlFor={name} className="ab-Textfield-label">
            {label}
            {required && <StatusLabel variant="primary">必須</StatusLabel>}
          </label>
        )}
        <span className="ab-DateTimePicker">
          <input
            id={name}
            name={name}
            type="datetime-local"
            className="ab-DateTimePicker-input"
            ref={forwardedRef}
            required={required}
            {...rest}
          />
        </span>
        {!errorMessages ? null : typeof errorMessages === 'string' ? (
          <div className="ab-Textfield-error-message">{errorMessages}</div>
        ) : (
          errorMessages.map((errorMessage) => (
            <div key={errorMessage} className="ab-Textfield-error-message">
              {errorMessage}
            </div>
          ))
        )}
        {!!helptext && <div className="ab-Textfield-helptext">{helptext}</div>}
      </div>
    );
  },
);

DateTimePicker.displayName = 'DateTimePicker';
