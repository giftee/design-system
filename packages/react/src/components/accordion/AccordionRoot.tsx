import { createContext, forwardRef, useContext } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type AccordionRootProps = ComponentPropsWithoutRef<'details'> & {
  /**
   * アコーディオンのサイズ
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * 無効状態かどうか。Summary に `aria-disabled` を付与し、フォーカス順序から外し、開閉を抑止する
   * @default false
   */
  disabled?: boolean;
};

type AccordionContextValue = {
  disabled: boolean;
};

const AccordionContext = createContext<AccordionContextValue>({
  disabled: false,
});

export const useAccordionContext = () => useContext(AccordionContext);

/**
 *
 * Docs:
 *
 * - [Accordion](https://abukuma.netlify.app/react/component/accordion)
 *
 * GitHub:
 *
 * - [Accordion](https://github.com/giftee/design-system/tree/main/packages/react/src/components/accordion)
 */
export const AccordionRoot = forwardRef<
  ElementRef<'details'>,
  AccordionRootProps
>(
  (
    { size = 'medium', disabled = false, children, className, ...rest },
    forwardedRef,
  ) => {
    const classes = classNames(
      'ab-Accordion',
      `ab-Accordion-${size}`,
      disabled && 'is-disabled',
      className,
    );

    return (
      <AccordionContext.Provider value={{ disabled }}>
        <details ref={forwardedRef} className={classes} {...rest}>
          {children}
        </details>
      </AccordionContext.Provider>
    );
  },
);

AccordionRoot.displayName = 'Accordion.Root';
