import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type FieldsetProps = ComponentPropsWithoutRef<'fieldset'> & {
  /**
   * フィールドセットの方向
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * フィールドセットのタイトル
   */
  title?: string;
};

/**
 *
 * Docs:
 *
 * - [Fieldset](https://abukuma.netlify.app/react/component/fieldset)
 *
 * GitHub:
 *
 * - [Fieldset](https://github.com/giftee/design-system/tree/main/packages/react/src/components/fieldset)
 */
export const Fieldset = forwardRef<ElementRef<'fieldset'>, FieldsetProps>(
  (
    { children, className, title, direction = 'horizontal', ...rest },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-Fieldset',
      `ab-Fieldset-${direction}`,
      className,
    );

    return (
      <fieldset ref={forwardedRef} className={classes} {...rest}>
        {!!title && <legend className="ab-Fieldset-legend">{title}</legend>}
        <div className="ab-Fieldset-content">{children}</div>
      </fieldset>
    );
  },
);

Fieldset.displayName = 'Fieldset';
