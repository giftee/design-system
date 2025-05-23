import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

/**
 * グリッドテーブルボディコンポーネントのProps
 */
export type GridTableBodyProps = ComponentPropsWithoutRef<'div'>;

export const GridTableBody = forwardRef<ElementRef<'div'>, GridTableBodyProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    const classes = classNames('ab-GridTable-body', className);

    return (
      <div ref={forwardedRef} className={classes} role="rowgroup" {...rest}>
        {children}
      </div>
    );
  },
);

GridTableBody.displayName = 'GridTable.Body';
