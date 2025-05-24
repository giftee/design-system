import { useRef, useEffect, forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import { useMergeRefs } from '@/utils/useMergeRefs';
import type {
  ComponentPropsWithoutRef,
  BaseSyntheticEvent,
  FormEvent,
  MouseEvent,
  ElementRef,
} from 'react';

export type ModalRootProps = ComponentPropsWithoutRef<'dialog'> & {
  /**
   * キャンセル時のイベントハンドラ
   */
  onCancel?: (event: BaseSyntheticEvent) => void;
  /**
   * 閉じる時のイベントハンドラ
   */
  onClose?: (event: BaseSyntheticEvent) => void;
};

/**
 *
 * Docs:
 *
 * - [Modal](https://abukuma.netlify.app/react/component/modal)
 *
 * GitHub:
 *
 * - [Modal](https://github.com/giftee/design-system/tree/main/packages/react/src/components/modal)
 */
export const ModalRoot = forwardRef<ElementRef<'dialog'>, ModalRootProps>(
  ({ children, className, onClose, open, ...rest }, forwardedRef) => {
    const classes = classNames('ab-Modal', className);
    const dialogElement = useRef<HTMLDialogElement>(null);
    const mergeRefs = useMergeRefs(dialogElement, forwardedRef);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (onClose) {
        onClose(event);
      }
    };

    const handleDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
      if (event.target === dialogElement.current) {
        if (onClose) {
          onClose(event);
        }
      }
    };

    useEffect(() => {
      const dialog = dialogElement.current;
      if (dialog) {
        if (open) {
          if (!dialog.open) {
            dialog.showModal();
          }
        } else {
          if (dialog.open) {
            dialog.close();
          }
        }
      }
    }, [open]);

    return (
      <dialog
        ref={mergeRefs}
        onClick={handleDialogClick}
        onClose={onClose}
        className={classes}
        {...rest}
      >
        <form method="dialog" onSubmit={handleSubmit}>
          {children}
        </form>
      </dialog>
    );
  },
);

ModalRoot.displayName = 'Modal.Root';
