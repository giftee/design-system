import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type TypographyProps = ComponentPropsWithoutRef<
  'h1' | 'h2' | 'h3' | 'p' | 'span'
> & {
  /**
   * テキストのバリアント
   * @default 'body-m'
   */
  variant?:
    | 'headline-l'
    | 'headline-m'
    | 'headline-s'
    | 'body-m'
    | 'body-s'
    | 'body-xs';
  /**
   * フォントの太さ
   * @default 'normal'
   */
  fontWeight?: 'normal' | 'bold';
  /**
   * テキストの色
   * @default 'default'
   */
  color?:
    | 'default'
    | 'secondary'
    | 'brand'
    | 'contrast'
    | 'info'
    | 'notice'
    | 'positive'
    | 'negative';
  /**
   * 基本となるコンポーネント（指定しない場合はvariantに基づいて自動選択）
   */
  component?: React.ElementType;
};

const defaultVariantMapping = {
  'headline-l': 'h1',
  'headline-m': 'h2',
  'headline-s': 'h3',
  'body-m': 'p',
  'body-s': 'span',
  'body-xs': 'span',
};

type ElementRefs =
  | ElementRef<'h1'>
  | ElementRef<'h2'>
  | ElementRef<'h3'>
  | ElementRef<'p'>
  | ElementRef<'span'>;

/**
 *
 * Docs:
 *
 * - [Typography](https://abukuma.netlify.app/react/component/typography)
 *
 * GitHub:
 *
 * - [Typography](https://github.com/giftee/design-system/tree/main/packages/react/src/components/typography)
 */
export const Typography = forwardRef<ElementRefs, TypographyProps>(
  (
    {
      children,
      className,
      variant = 'body-m',
      fontWeight,
      color,
      component,
      ...rest
    },
    forwardedRef,
  ) => {
    const classes = classNames(
      `ab-text-${variant}`,
      !!fontWeight && `ab-font-${fontWeight}`,
      !!color && `ab-text-${color}`,
      className,
    );

    const defaultRootNode = defaultVariantMapping[variant];
    const RootNode = component ? component : defaultRootNode;

    return (
      <RootNode className={classes} ref={forwardedRef} {...rest}>
        {children}
      </RootNode>
    );
  },
);

Typography.displayName = 'Typography';
