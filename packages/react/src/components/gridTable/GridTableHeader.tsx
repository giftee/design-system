import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

/**
 * グリッドテーブルヘッダーコンポーネントのProps
 * @property {ComponentPropsWithoutRef<'div'>} - divタグのすべてのプロパティを継承
 */
export type GridTableHeaderProps = ComponentPropsWithoutRef<'div'>;

export const GridTableHeader = forwardRef<
  ElementRef<'div'>,
  GridTableHeaderProps
>(({ children, className, ...rest }, forwardedRef) => {
  const classes = classNames('ab-GridTable-head', className);

  return (
    <div ref={forwardedRef} className={classes} role="rowgroup" {...rest}>
      {children}
    </div>
  );
});

GridTableHeader.displayName = 'GridTable.Header';
