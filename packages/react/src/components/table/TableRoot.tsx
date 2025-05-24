import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type TableRootProps = ComponentPropsWithoutRef<'table'> & {
  /**
   * 縞模様の行を表示するかどうか
   * @default false
   */
  isStripe?: boolean;
  /**
   * 行を選択可能にするかどうか
   * @default false
   */
  isSelectable?: boolean;
};

/**
 *
 * Docs:
 *
 * - [Table](https://abukuma.netlify.app/react/component/table)
 *
 * GitHub:
 *
 * - [Table](https://github.com/giftee/design-system/tree/main/packages/react/src/components/table)
 */
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
