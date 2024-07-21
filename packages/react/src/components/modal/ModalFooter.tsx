import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type ModalFooterProps = ComponentPropsWithoutRef<'div'>;

export const ModalFooter = forwardRef<ElementRef<'div'>, ModalFooterProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    const classes = classNames('ab-Modal-footer', className);

    return (
      <div ref={forwardedRef} className={classes} {...rest}>
        {children}
      </div>
    );
  },
);

ModalFooter.displayName = 'Modal.Footer';
