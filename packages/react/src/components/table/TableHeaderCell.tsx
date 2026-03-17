import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type TableHeaderCellProps = ComponentPropsWithoutRef<'th'> & {
  /**
   * セル内のテキスト配置
   * @default 'left'
   */
  align?: 'center' | 'left' | 'right';
};

export const TableHeaderCell = forwardRef<
  ElementRef<'th'>,
  TableHeaderCellProps
>(({ align, children, className, scope, ...rest }, forwardedRef) => {
  const classes = classNames(
    'ab-Table-head-cell',
    align && `ab-text-${align}`,
    className,
  );

  return (
    <th ref={forwardedRef} className={classes} scope={scope ?? 'col'} {...rest}>
      {children}
    </th>
  );
});

TableHeaderCell.displayName = 'Table.HeaderCell';
