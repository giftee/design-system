import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

/**
 * テーブルボディセルコンポーネントのProps
 * @property {('center'|'left'|'right')} [align] - セル内のテキスト配置
 */
export type TableBodyCellProps = ComponentPropsWithoutRef<'td'> & {
  align?: 'center' | 'left' | 'right';
};

export const TableBodyCell = forwardRef<ElementRef<'td'>, TableBodyCellProps>(
  ({ align, children, className, ...rest }, forwardedRef) => {
    const classes = classNames(
      'ab-Table-cell',
      align && `ab-text-${align}`,
      className,
    );

    return (
      <td ref={forwardedRef} className={classes} {...rest}>
        {children}
      </td>
    );
  },
);

TableBodyCell.displayName = 'Table.BodyCell';
