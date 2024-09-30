import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type GridTableRowProps = ComponentPropsWithoutRef<'div'>;

export const GridTableRow = forwardRef<ElementRef<'div'>, GridTableRowProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    const classes = classNames('ab-GridTable-row', className);

    return (
      <div ref={forwardedRef} className={classes} role="row" {...rest}>
        {children}
      </div>
    );
  },
);

GridTableRow.displayName = 'GridTable.Row';
