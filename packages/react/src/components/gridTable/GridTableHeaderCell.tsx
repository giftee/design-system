import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type GridTableHeaderCellProps = ComponentPropsWithoutRef<'div'> & {
  /**
   * セル内のテキスト配置
   */
  align?: 'center' | 'left' | 'right';
};

export const GridTableHeaderCell = forwardRef<
  ElementRef<'div'>,
  GridTableHeaderCellProps
>(({ align, children, className, ...rest }, forwardedRef) => {
  const classes = classNames(
    'ab-GridTable-head-cell',
    align && `ab-text-${align}`,
    className,
  );

  return (
    <div ref={forwardedRef} className={classes} role="columnheader" {...rest}>
      {children}
    </div>
  );
});

GridTableHeaderCell.displayName = 'GridTable.HeaderCell';
