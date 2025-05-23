import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type StatusLabelProps = ComponentPropsWithoutRef<'label'> & {
  /**
   * ラベルのバリアント
   */
  variant?:
    | 'primary'
    | 'outlined'
    | 'neutral'
    | 'info'
    | 'notice'
    | 'positive'
    | 'negative'
    | 'disabled';
  /**
   * ラベルのサイズ
   */
  size?: 'small' | 'medium' | 'large';
};

export const StatusLabel = forwardRef<ElementRef<'label'>, StatusLabelProps>(
  ({ children, variant, size, className, ...rest }, forwardedRef) => {
    const statusLabelClassName = classNames(
      'ab-StatusLabel',
      !!variant && `ab-StatusLabel-${variant}`,
      !!size && `ab-StatusLabel-${size}`,
      className,
    );

    return (
      <label ref={forwardedRef} className={statusLabelClassName} {...rest}>
        {children}
      </label>
    );
  },
);

StatusLabel.displayName = 'StatusLabel';
