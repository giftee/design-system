import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type GridTableRootProps = ComponentPropsWithoutRef<'div'> & {
  columnsCount: number;
  isSelectable?: boolean;
  isBordered?: boolean;
};

export const GridTableRoot = forwardRef<ElementRef<'div'>, GridTableRootProps>(
  (
    {
      columnsCount,
      isSelectable = false,
      isBordered = false,
      children,
      className,
      style,
      ...rest
    },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-GridTable',
      isSelectable && `ab-GridTable-select`,
      isBordered && `ab-GridTable-bordered`,
      className,
    );
    const columnsCountStyle = { '--ab-gridtable-columns-count': columnsCount };

    return (
      <div
        ref={forwardedRef}
        className={classes}
        role="table"
        style={{ ...columnsCountStyle, ...style }}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

GridTableRoot.displayName = 'GridTable.Root';
