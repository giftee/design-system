import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type GridTableBodyCellProps = ComponentPropsWithoutRef<'div'> & {
  /**
   * セル内のテキスト配置
   * @default 'left'
   */
  align?: 'center' | 'left' | 'right';
  /**
   * セルの行結合数
   */
  rowSpan?: number;
  /**
   * セルの列結合数
   */
  colSpan?: number;
  /**
   * ボーダーを表示するかどうか
   * @default false
   */
  isBordered?: boolean;
};

export const GridTableBodyCell = forwardRef<
  ElementRef<'div'>,
  GridTableBodyCellProps
>(
  (
    {
      align,
      rowSpan,
      colSpan,
      isBordered = false,
      children,
      className,
      style,
      ...rest
    },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-GridTable-cell',
      align && `ab-text-${align}`,
      isBordered && 'ab-GridTable-cell-border',
      className,
    );
    const rowSpanStyle = rowSpan
      ? { '--ab-gridtable-cell-rowspan': rowSpan }
      : {};
    const colSpanStyle = colSpan
      ? { '--ab-gridtable-cell-colspan': colSpan }
      : {};

    return (
      <div
        ref={forwardedRef}
        className={classes}
        role="cell"
        style={{ ...rowSpanStyle, ...colSpanStyle, ...style }}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

GridTableBodyCell.displayName = 'GridTable.BodyCell';
