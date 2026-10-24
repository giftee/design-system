import { forwardRef, useEffect, useRef } from 'react';
import { classNames } from '@/utils/classNames';
import { useMergeRefs } from '@/utils/useMergeRefs';
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  KeyboardEvent,
} from 'react';

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

const ENABLED_TAB_SELECTOR = '[role="tab"]:not(:disabled)';

/**
 * WAI-ARIA APG の Tabs パターン（手動アクティベーション）に従い、
 * Tab キーは選択中のタブにのみ止まり、左右矢印 / Home / End でタブ間のフォーカスを移動する。
 * 選択の確定は Enter / Space（button の click）で行う。
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
      onKeyDown,
      ...rest
    },
    forwardedRef,
  ) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRefs(rootRef, forwardedRef);

    const classes = classNames(
      'ab-Tabs',
      `ab-Tabs-${size}`,
      `is-${align}`,
      fullWidth && 'is-fullwidth',
      className,
    );

    // 選択中のタブが無い場合でも Tab キーで到達できるよう、先頭の有効なタブを tabindex=0 にする
    useEffect(() => {
      const root = rootRef.current;
      if (!root) return;
      const tabs = Array.from(
        root.querySelectorAll<HTMLElement>(ENABLED_TAB_SELECTOR),
      );
      if (tabs.length === 0) return;
      if (tabs.some((tab) => tab.tabIndex === 0)) return;
      tabs[0].tabIndex = 0;
    });

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(event);
      if (event.defaultPrevented) return;

      const tabs = Array.from(
        event.currentTarget.querySelectorAll<HTMLElement>(ENABLED_TAB_SELECTOR),
      );
      const currentIndex = tabs.indexOf(document.activeElement as HTMLElement);
      if (currentIndex === -1) return;

      let nextIndex: number;
      switch (event.key) {
        case 'ArrowRight':
          nextIndex = (currentIndex + 1) % tabs.length;
          break;
        case 'ArrowLeft':
          nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          break;
        case 'Home':
          nextIndex = 0;
          break;
        case 'End':
          nextIndex = tabs.length - 1;
          break;
        default:
          return;
      }

      event.preventDefault();
      tabs[nextIndex].focus();
    };

    return (
      // tablist 自体はフォーカスせず、キー操作はフォーカス中の tab（子要素）に対して処理する
      // eslint-disable-next-line jsx-a11y/interactive-supports-focus
      <div
        role="tablist"
        ref={mergedRef}
        className={classes}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

TabsRoot.displayName = 'Tabs.Root';
