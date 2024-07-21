import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export type ModalHeaderProps = ComponentPropsWithoutRef<'div'>;

export const ModalHeader = forwardRef<ElementRef<'div'>, ModalHeaderProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    const classes = classNames('ab-Modal-header', className);

    return (
      <div ref={forwardedRef} className={classes} {...rest}>
        {children}
      </div>
    );
  },
);

ModalHeader.displayName = 'Modal.Header';
