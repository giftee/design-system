import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import { classNames } from '@/utils/classNames';
import { useMergeRefs } from '@/utils/useMergeRefs';
import type { ComponentPropsWithoutRef, ElementRef, RefObject } from 'react';

export type PopOverRootContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerId: string;
  popoverId: string;
  triggerRef: RefObject<HTMLButtonElement | null>;
};

const PopOverRootContext = createContext<PopOverRootContextValue | undefined>(
  undefined,
);

export const usePopOverRootContext = () => {
  const context = useContext(PopOverRootContext);

  if (!context) {
    throw new Error('usePopOverRootContext must be used within PopOver.Root');
  }

  return context;
};

export const useOptionalPopOverRootContext = () =>
  useContext(PopOverRootContext);

export type PopOverRootProps = ComponentPropsWithoutRef<'div'> & {
  /**
   * 開閉状態。指定した場合は controlled component として動作する。
   */
  open?: boolean;
  /**
   * uncontrolled component として使う場合の初期開閉状態。
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * 開閉状態が変わるときに呼び出される。
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * トリガー要素に付与する id。
   */
  triggerId?: string;
  /**
   * PopOver 要素に付与する id。
   */
  popoverId?: string;
  /**
   * Escape キーで閉じるかどうか。
   * @default true
   */
  closeOnEscape?: boolean;
  /**
   * PopOver.Root の外側を押下したときに閉じるかどうか。
   * @default true
   */
  closeOnOutsideClick?: boolean;
};

export const PopOverRoot = forwardRef<ElementRef<'div'>, PopOverRootProps>(
  (
    {
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      triggerId: controlledTriggerId,
      popoverId: controlledPopoverId,
      closeOnEscape = true,
      closeOnOutsideClick = true,
      children,
      className,
      ...rest
    },
    forwardedRef,
  ) => {
    const rootRef = useRef<ElementRef<'div'>>(null);
    const triggerRef = useRef<ElementRef<'button'>>(null);
    const mergedRef = useMergeRefs(rootRef, forwardedRef);
    const autoId = useId();
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : uncontrolledOpen;
    const triggerId = controlledTriggerId ?? `${autoId}-trigger`;
    const popoverId = controlledPopoverId ?? `${autoId}-popover`;

    const setOpen = useCallback(
      (nextOpen: boolean) => {
        if (nextOpen === open) return;

        if (!isControlled) {
          setUncontrolledOpen(nextOpen);
        }

        onOpenChange?.(nextOpen);
      },
      [isControlled, onOpenChange, open],
    );

    useEffect(() => {
      if (!open || !closeOnEscape) return;

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setOpen(false);
          triggerRef.current?.focus();
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [closeOnEscape, open, setOpen]);

    useEffect(() => {
      if (!open || !closeOnOutsideClick) return;

      const handlePointerDown = (event: PointerEvent) => {
        const root = rootRef.current;
        const target = event.target;

        if (!root || !(target instanceof Node) || root.contains(target)) return;

        setOpen(false);
      };

      document.addEventListener('pointerdown', handlePointerDown);

      return () =>
        document.removeEventListener('pointerdown', handlePointerDown);
    }, [closeOnOutsideClick, open, setOpen]);

    const contextValue = useMemo<PopOverRootContextValue>(
      () => ({
        open,
        setOpen,
        triggerId,
        popoverId,
        triggerRef,
      }),
      [open, popoverId, setOpen, triggerId],
    );
    const classes = classNames(
      'ab-position-relative',
      'ab-inline-block',
      className,
    );

    return (
      <PopOverRootContext.Provider value={contextValue}>
        <div ref={mergedRef} className={classes} {...rest}>
          {children}
        </div>
      </PopOverRootContext.Provider>
    );
  },
);

PopOverRoot.displayName = 'PopOver.Root';
