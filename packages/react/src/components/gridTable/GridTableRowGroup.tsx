import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type GridTableRowGroupProps = ComponentPropsWithoutRef<'div'> & {
  /**
   * 開始列位置
   */
  columnStart?: number;
  /**
   * 終了列位置
   */
  columnEnd?: number;
};

export const GridTableRowGroup = forwardRef<
  ElementRef<'div'>,
  GridTableRowGroupProps
>(
  (
    { columnStart, columnEnd, children, className, style, ...rest },
    forwardedRef,
  ) => {
    const classes = classNames('ab-GridTable-rowgroup', className);
    const columnStartStyle = columnStart
      ? { '--ab-gridtable-column-start': columnStart }
      : {};
    const columnEndStyle = columnEnd
      ? { '--ab-gridtable-column-end': columnEnd }
      : {};

    return (
      <div
        ref={forwardedRef}
        className={classes}
        role="rowgroup"
        style={{ ...columnStartStyle, ...columnEndStyle, ...style }}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

GridTableRowGroup.displayName = 'GridTable.RowGroup';
