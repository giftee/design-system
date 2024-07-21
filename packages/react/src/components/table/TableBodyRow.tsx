import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type TableBodyRowProps = ComponentPropsWithoutRef<'tr'>;

export const TableBodyRow = forwardRef<ElementRef<'tr'>, TableBodyRowProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    const classes = classNames('ab-Table-body-row', className);

    return (
      <tr ref={forwardedRef} className={classes} {...rest}>
        {children}
      </tr>
    );
  },
);

TableBodyRow.displayName = 'Table.BodyRow';
