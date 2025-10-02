import { forwardRef } from 'react';
import { IconButton } from '@/components/iconButton/Index';
import { AngleLeft, AngleRight } from '@/storyAssets/inlineSvgs';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type PaginationProps = Omit<
  ComponentPropsWithoutRef<'nav'>,
  'onChange'
> & {
  /**
   * 現在のページ番号
   */
  page: number;
  /**
   * ページの総数
   */
  count: number;
  /**
   * ページ変更時のコールバック関数
   */
  onChange: (event: React.MouseEvent<HTMLButtonElement>, value: number) => void;
};

const getPaginationItems = (
  currentPage: number,
  pageCount: number,
): Array<number | 'ellipsis'> => {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, 'ellipsis', pageCount];
  }

  if (currentPage >= pageCount - 3) {
    return [
      1,
      'ellipsis',
      pageCount - 4,
      pageCount - 3,
      pageCount - 2,
      pageCount - 1,
      pageCount,
    ];
  }

  return [
    1,
    'ellipsis',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    'ellipsis',
    pageCount,
  ];
};

/**
 *
 * Docs:
 *
 * - [Pagination](https://abukuma.netlify.app/react/component/pagination)
 *
 * GitHub:
 *
 * - [Pagination](https://github.com/giftee/design-system/tree/main/packages/react/src/components/pagination)
 */
export const Pagination = forwardRef<ElementRef<'nav'>, PaginationProps>(
  ({ page, count, onChange, className, ...rest }, forwardedRef) => {
    const items = getPaginationItems(page, count);

    const handlePrevClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (page > 1) {
        onChange(event, page - 1);
      }
    };

    const handleNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (page < count) {
        onChange(event, page + 1);
      }
    };

    const handlePageClick =
      (pageNumber: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
        onChange(event, pageNumber);
      };

    const classes = classNames(
      'ab-flex',
      'ab-flex-row',
      'ab-flex-items-center',
      'ab-gap-8',
      className,
    );

    return (
      <nav ref={forwardedRef} className={classes} {...rest}>
        <IconButton
          variant="outlined"
          size="large"
          disabled={page <= 1}
          onClick={handlePrevClick}
          aria-label="前へ"
        >
          <AngleLeft
            className={`ab-Icon ${page <= 1 ? 'ab-text-default' : null}`}
          />
        </IconButton>
        <div className="ab-flex ab-gap-1">
          {items.map((item, index) => {
            if (item === 'ellipsis') {
              return (
                <IconButton
                  key={`ellipsis-${index.toString()}`}
                  variant="text"
                  size="small"
                  style={{ pointerEvents: 'none' }}
                >
                  …
                </IconButton>
              );
            }
            return (
              <IconButton
                key={item}
                variant={item === page ? 'default' : 'text'}
                size="small"
                onClick={handlePageClick(item)}
                aria-label={`ページ${item}`}
                aria-current={item === page ? 'page' : undefined}
              >
                {item}
              </IconButton>
            );
          })}
        </div>
        <IconButton
          variant="outlined"
          size="large"
          disabled={page >= count}
          onClick={handleNextClick}
          aria-label="次へ"
        >
          <AngleRight
            className={`ab-Icon ${page >= count ? 'ab-text-default' : null}`}
          />
        </IconButton>
      </nav>
    );
  },
);

Pagination.displayName = 'Pagination';
