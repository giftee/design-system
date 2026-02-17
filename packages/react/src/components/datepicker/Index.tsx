import { forwardRef, useId } from 'react';
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
 * - [DatePicker](https://github.com/giftee/design-system/tree/main/packages/react/src/components/datepicker)
 */
export const DatePicker = forwardRef<ElementRef<'input'>, DatePickerProps>(
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

    return (
      <div className={classes}>
        {!!label && (
          <label htmlFor={id} className="ab-Textfield-label">
            {label}
            {required && <StatusLabel variant="primary">必須</StatusLabel>}
          </label>
        )}
        <span className="ab-DatePicker">
          <input
            id={id}
            name={name}
            type="date"
            className="ab-DatePicker-input"
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

DatePicker.displayName = 'DatePicker';
