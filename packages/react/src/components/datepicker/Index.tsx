import { forwardRef, useEffect, useId, useState } from 'react';
import { StatusLabel } from '@/index';
import { classNames } from '@/utils/classNames';
import type {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
} from 'react';

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

const formatDateValue = (value: string): string => {
  if (!value) return '';
  const parts = value.split('-');
  if (parts.length !== 3) return value;
  const [year, month, day] = parts;
  return `${year}年${month}月${day}日`;
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
      value,
      defaultValue,
      onChange,
      style,
      ...rest
    },
    forwardedRef,
  ) => {
    const autoId = useId();
    const id = idProp ?? autoId;

    const classes = classNames('ab-Textfield', error && 'is-error', className);

    const [internalValue, setInternalValue] = useState<string>(
      typeof value === 'string'
        ? value
        : typeof defaultValue === 'string'
          ? defaultValue
          : '',
    );

    useEffect(() => {
      if (value !== undefined && typeof value === 'string') {
        setInternalValue(value);
      }
    }, [value]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInternalValue(e.target.value);
      onChange?.(e);
    };

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
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            {...rest}
            style={{
              ...style,
              ...(internalValue ? { color: 'transparent' } : {}),
            }}
          />
          {!!internalValue && (
            <span className="ab-DatePicker-display">
              {formatDateValue(internalValue)}
            </span>
          )}
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
