import { forwardRef } from 'react';
import { StatusLabel } from '@/index';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type TextfieldProps = ComponentPropsWithoutRef<'input'> &
  ComponentPropsWithoutRef<'textarea'> & {
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
     * 複数行入力の場合の行数
     */
    multiline?: number;
    /**
     * リサイズの方向
     * @default 'none'
     */
    resize?: 'vertical' | 'horizontal' | 'both' | 'none';
    /**
     * 内部コンポーネントに渡すProps
     */
    slotProps?: {
      /**
       * inputタグに渡すProps
       */
      input?: ComponentPropsWithoutRef<'input'>;
      /**
       * textareaタグに渡すProps
       */
      textarea?: ComponentPropsWithoutRef<'textarea'>;
    };
  };

/**
 *
 * Docs:
 *
 * - [Textfield](https://abukuma.netlify.app/react/component/textfield)
 *
 * GitHub:
 *
 * - [Textfield](https://github.com/giftee/design-system/tree/main/packages/react/src/components/textfield)
 */
export const Textfield = forwardRef<
  ElementRef<'input'> & ElementRef<'textarea'>,
  TextfieldProps
>(
  (
    {
      label,
      helptext,
      error,
      errorMessages,
      name,
      required,
      disabled,
      multiline,
      resize = 'none',
      children,
      className,
      slotProps,
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

    const errorMessageIds = errorMessages
      ? Array.isArray(errorMessages)
        ? errorMessages.map((_, index) => `${name}-error-${index}`)
        : [`${name}-error`]
      : [];

    const ariaDescribedBy =
      errorMessageIds.length > 0 ? errorMessageIds.join(' ') : undefined;

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
            ref={forwardedRef}
            required={required}
            aria-describedby={ariaDescribedBy}
            aria-invalid={!!errorMessages}
            {...rest}
            {...slotProps?.input}
            className={classNames(
              'ab-Textfield-input',
              slotProps?.input?.className,
            )}
          />
        ) : (
          <textarea
            id={name}
            name={name}
            ref={forwardedRef}
            required={required}
            rows={multiline}
            aria-describedby={ariaDescribedBy}
            aria-invalid={!!errorMessages}
            {...rest}
            {...slotProps?.textarea}
            className={classNames(
              'ab-Textfield-textarea',
              slotProps?.textarea?.className,
            )}
          />
        )}
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

        {!!helptext && <div className="ab-Textfield-helptext">{helptext}</div>}
      </div>
    );
  },
);

Textfield.displayName = 'Textfield';
