import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type TabsRootProps = ComponentPropsWithoutRef<'div'> & {
  /**
   * タブのサイズ
   * @default 'medium'
   */
  size?: 'small' | 'medium';

  /**
   * タブの配置
   * @default 'left'
   */
  align?: 'left' | 'center';

  /**
   * 全幅表示にするかどうか
   * @default false
   */
  fullWidth?: boolean;
};

/**
 *
 * Docs:
 *
 * - [Tabs](https://abukuma.netlify.app/react/component/tabs)
 *
 * GitHub:
 *
 * - [Tabs](https://github.com/giftee/design-system/tree/main/packages/react/src/components/tabs)
 */
export const TabsRoot = forwardRef<ElementRef<'div'>, TabsRootProps>(
  (
    {
      children,
      className,
      size = 'medium',
      align = 'left',
      fullWidth,
      ...rest
    },
    ref,
  ) => {
    const classes = classNames(
      'ab-Tabs',
      `ab-Tabs-${size}`,
      `is-${align}`,
      fullWidth && 'is-fullwidth',
      className,
    );

    return (
      <div role="tablist" ref={ref} className={classes} {...rest}>
        {children}
      </div>
    );
  },
);

TabsRoot.displayName = 'Tabs.Root';
