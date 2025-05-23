import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

/**
 * グリッドテーブル行グループコンポーネントのProps
 * @property {number} [columnStart] - 開始列位置
 * @property {number} [columnEnd] - 終了列位置
 */
export type GridTableRowGroupProps = ComponentPropsWithoutRef<'div'> & {
  columnStart?: number;
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
