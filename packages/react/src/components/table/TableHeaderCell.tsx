import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type TableHeaderCellProps = ComponentPropsWithoutRef<'td'> & {
  /**
   * セル内のテキスト配置
   * @default 'left'
   */
  align?: 'center' | 'left' | 'right';
};

export const TableHeaderCell = forwardRef<
  ElementRef<'td'>,
  TableHeaderCellProps
>(({ align, children, className, ...rest }, forwardedRef) => {
  const classes = classNames(
    'ab-Table-head-cell',
    align && `ab-text-${align}`,
    className,
  );

  return (
    <td ref={forwardedRef} className={classes} {...rest}>
      {children}
    </td>
  );
});

TableHeaderCell.displayName = 'Table.HeaderCell';
