import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type FieldsetRootProps = ComponentPropsWithoutRef<'fieldset'> & {
  /**
   * フィールドセットの方向
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
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
export const FieldsetRoot = forwardRef<
  ElementRef<'fieldset'>,
  FieldsetRootProps
>(
  (
    { children, direction = 'horizontal', className, ...rest },
    forwardedRef,
  ) => {
    const fieldsetRootClassName = classNames(
      'ab-Fieldset',
      direction === 'vertical' && 'ab-Fieldset-vertical',
      className,
    );

    return (
      <fieldset ref={forwardedRef} className={fieldsetRootClassName} {...rest}>
        {children}
      </fieldset>
    );
  },
);

FieldsetRoot.displayName = 'FieldsetRoot';
