import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

/**
 * タイポグラフィコンポーネントのProps
 * @property {('headline-l'|'headline-m'|'headline-s'|'body-m'|'body-s'|'body-xs')} [variant='body-m'] - テキストのバリアント
 * @property {('normal'|'bold')} [fontWeight] - フォントの太さ
 * @property {('default'|'secondary'|'brand'|'contrast'|'info'|'notice'|'positive'|'negative')} [color] - テキストの色
 * @property {React.ElementType} [component] - 基本となるコンポーネント（指定しない場合はvariantに基づいて自動選択）
 */
export type TypographyProps = ComponentPropsWithoutRef<
  'h1' | 'h2' | 'h3' | 'p' | 'span'
> & {
  variant?:
    | 'headline-l'
    | 'headline-m'
    | 'headline-s'
    | 'body-m'
    | 'body-s'
    | 'body-xs';
  fontWeight?: 'normal' | 'bold';
  color?:
    | 'default'
    | 'secondary'
    | 'brand'
    | 'contrast'
    | 'info'
    | 'notice'
    | 'positive'
    | 'negative';
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
