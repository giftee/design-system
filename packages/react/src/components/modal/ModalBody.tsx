import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

/**
 * モーダルボディコンポーネントのProps
 * @property {ComponentPropsWithoutRef<'div'>} - divタグのすべてのプロパティを継承
 */
export type ModalBodyProps = ComponentPropsWithoutRef<'div'>;

export const ModalBody = forwardRef<ElementRef<'div'>, ModalBodyProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    const classes = classNames('ab-Modal-body', className);

    return (
      <div ref={forwardedRef} className={classes} {...rest}>
        {children}
      </div>
    );
  },
);

ModalBody.displayName = 'Modal.Body';
