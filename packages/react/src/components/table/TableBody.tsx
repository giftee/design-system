import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

/**
 * テーブルボディコンポーネントのProps
 * @property {ComponentPropsWithoutRef<'tbody'>} - tbodyタグのすべてのプロパティを継承
 */
export type TableBodyProps = ComponentPropsWithoutRef<'tbody'>;

export const TableBody = forwardRef<ElementRef<'tbody'>, TableBodyProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    const classes = classNames('ab-Table-body', className);

    return (
      <tbody ref={forwardedRef} className={classes} {...rest}>
        {children}
      </tbody>
    );
  },
);

TableBody.displayName = 'Table.Body';
