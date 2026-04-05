import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type PopOverProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
  /**
   * ポップオーバーの表示バリアント
   * @default 'top'
   */
  placement?: 'top' | 'bottom' | 'left' | 'right';

  /**
   * ポップオーバーのMenuItemのリストの中心
   * @default 'top'
   */
  align?: 'top' | 'top-start' | 'top-end';
};
