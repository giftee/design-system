import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

/**
 * 区切り線コンポーネントのProps
 * @property {('horizontal'|'vertical')} [direction='horizontal'] - 区切り線の方向
 */
export type DividerProps = Omit<ComponentPropsWithoutRef<'hr'>, 'children'> & {
  direction?: 'horizontal' | 'vertical';
};

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
