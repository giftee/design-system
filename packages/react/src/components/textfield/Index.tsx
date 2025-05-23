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
            {...rest}
            {...slotProps?.textarea}
            className={classNames(
              'ab-Textfield-textarea',
              slotProps?.textarea?.className,
            )}
          />
        )}
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

Textfield.displayName = 'Textfield';
