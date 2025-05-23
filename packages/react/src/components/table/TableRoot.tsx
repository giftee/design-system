import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

/**
 * テーブルルートコンポーネントのProps
 * @property {boolean} [isStripe=false] - 縞模様の行を表示するかどうか
 * @property {boolean} [isSelectable=false] - 行を選択可能にするかどうか
 */
export type TableRootProps = ComponentPropsWithoutRef<'table'> & {
  isStripe?: boolean;
  isSelectable?: boolean;
};

export const TableRoot = forwardRef<ElementRef<'table'>, TableRootProps>(
  (
    { isStripe = false, isSelectable = false, children, className, ...rest },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-Table',
      isStripe && `ab-Table-stripe`,
      isSelectable && `ab-Table-select`,
      className,
    );

    return (
      <table ref={forwardedRef} className={classes} {...rest}>
        {children}
      </table>
    );
  },
);

TableRoot.displayName = 'Table.Root';
