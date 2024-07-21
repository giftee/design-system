import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type TableHeaderRowProps = ComponentPropsWithoutRef<'tr'>;

export const TableHeaderRow = forwardRef<ElementRef<'tr'>, TableHeaderRowProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    const classes = classNames(className);

    return (
      <tr ref={forwardedRef} className={classes} {...rest}>
        {children}
      </tr>
    );
  },
);

TableHeaderRow.displayName = 'Table.HeaderRow';
