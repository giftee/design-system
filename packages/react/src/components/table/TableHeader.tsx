import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

/**
 * テーブルヘッダーコンポーネントのProps
 * @property {ComponentPropsWithoutRef<'thead'>} - theadタグのすべてのプロパティを継承
 */
export type TableHeaderProps = ComponentPropsWithoutRef<'thead'>;

export const TableHeader = forwardRef<ElementRef<'thead'>, TableHeaderProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    const classes = classNames('ab-Table-head', className);

    return (
      <thead ref={forwardedRef} className={classes} {...rest}>
        {children}
      </thead>
    );
  },
);

TableHeader.displayName = 'Table.Header';
