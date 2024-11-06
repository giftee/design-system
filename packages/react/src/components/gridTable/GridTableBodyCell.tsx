import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type GridTableBodyCellProps = ComponentPropsWithoutRef<'div'> & {
  align?: 'center' | 'left' | 'right';
  rowSpan?: number;
  colSpan?: number;
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
