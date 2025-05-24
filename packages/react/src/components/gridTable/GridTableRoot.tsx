import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type GridTableRootProps = ComponentPropsWithoutRef<'div'> & {
  /**
   * テーブルの列数
   */
  columnsCount: number;
  /**
   * 行を選択可能にするかどうか
   * @default false
   */
  isSelectable?: boolean;
  /**
   * ボーダーを表示するかどうか
   * @default false
   */
  isBordered?: boolean;
};

/**
 *
 * Docs:
 *
 * - [GridTable](https://abukuma.netlify.app/react/component/gridtable)
 *
 * GitHub:
 *
 * - [GridTable](https://github.com/giftee/design-system/tree/main/packages/react/src/components/gridTable)
 */
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
