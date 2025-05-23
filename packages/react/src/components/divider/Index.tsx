import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type DividerProps = Omit<ComponentPropsWithoutRef<'hr'>, 'children'> & {
  /**
   * 区切り線の方向
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
};

/**
 *
 * Docs:
 *
 * - [Divider](https://abukuma.netlify.app/react/component/divider)
 *
 * GitHub:
 *
 * - [Divider](https://github.com/giftee/design-system/tree/main/packages/react/src/components/divider)
 */
export const Divider = forwardRef<ElementRef<'hr'>, DividerProps>(
  ({ direction = 'horizontal', className, ...rest }, forwardedRef) => {
    const classes = classNames(
      'ab-Divider',
      `ab-Divider-${direction}`,
      className,
    );

    return <hr ref={forwardedRef} className={classes} {...rest}></hr>;
  },
);

Divider.displayName = 'Divider';
