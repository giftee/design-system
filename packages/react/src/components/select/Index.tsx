import { forwardRef, useId } from 'react';
import { StatusLabel } from '@/index';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type SelectProps = ComponentPropsWithoutRef<'select'> & {
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
  /**
   * セレクトオプションの配列
   */
  options: Option[];
};

/**
 * セレクトオプションの型（文字列またはオプショングループ）
 */
type Option = string | OptionGroup;
/**
 * オプショングループの型
 */
type OptionGroup = {
  /**
   * オプションの値
   */
  value: string;
  /**
   * オプションの表示ラベル
   */
  label: string;
  /**
   * Reactのキー（指定しない場合はvalueが使用される）
   */
  key?: string;
};

const isOptionGroup = (option: Option): option is OptionGroup =>
  typeof option !== 'string';
const isStringOptionGroup = (option: Option): option is string =>
  typeof option === 'string';

/**
 *
 * Docs:
 *
 * - [Select](https://abukuma.netlify.app/react/component/select)
 *
 * GitHub:
 *
 * - [Select](https://github.com/giftee/design-system/tree/main/packages/react/src/components/select)
 */
export const Select = forwardRef<ElementRef<'select'>, SelectProps>(
  (
    {
      label,
      helptext,
      error,
      errorMessages,
      id: idProp,
      name,
      required,
      disabled,
      options,
      children,
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
        <span className="ab-Select">
          <select
            id={id}
            name={name}
            className="ab-Select-input"
            ref={forwardedRef}
            required={required}
            disabled={disabled}
            aria-describedby={ariaDescribedBy}
            aria-errormessage={ariaErrorMessage}
            aria-invalid={ariaInvalid}
            {...rest}
          >
            {options.map((option) => {
              if (isOptionGroup(option)) {
                return (
                  <option key={option.key || option.value} value={option.value}>
                    {option.label}
                  </option>
                );
              } else if (isStringOptionGroup(option)) {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              }
              return null;
            })}
          </select>
          <svg
            className="ab-Select-icon"
            fill="currentColor"
            viewBox="0 0 16 10"
          >
            <path d="M7.10156 9.14844L0.851562 2.89844C0.34375 2.42969 0.34375 1.60938 0.851562 1.14062C1.32031 0.632812 2.14062 0.632812 2.60938 1.14062L8 6.49219L13.3516 1.14062C13.8203 0.632812 14.6406 0.632812 15.1094 1.14062C15.6172 1.60938 15.6172 2.42969 15.1094 2.89844L8.85938 9.14844C8.39062 9.65625 7.57031 9.65625 7.10156 9.14844Z" />
          </svg>
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

Select.displayName = 'Select';
