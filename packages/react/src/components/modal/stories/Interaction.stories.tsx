import { expect, fn, userEvent, waitFor, within } from 'storybook/test';
import {
  meta,
  Modal,
  Button,
  useRef,
  useState,
  useDialogpolyfill,
  type Story,
} from './shared';

export default {
  ...meta,
  title: 'Modal/Interaction',
};

const onClose = fn();
const onCancel = fn();

const ModalExample = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDialogElement>(null);
  useDialogpolyfill(ref);

  return (
    <>
      <Button onClick={() => setOpen(true)}>モーダルを開く</Button>
      <Modal.Root
        ref={ref}
        open={open}
        aria-label="確認"
        onClose={(event) => {
          onClose(event);
          setOpen(false);
        }}
        onCancel={(event) => {
          onCancel(event);
          setOpen(false);
        }}
      >
        <Modal.Header>確認</Modal.Header>
        <Modal.Body>この操作を実行しますか？</Modal.Body>
        <Modal.Footer>
          <Button
            variant="neutral"
            type="button"
            onClick={() => setOpen(false)}
          >
            キャンセル
          </Button>
          <Button type="submit">OK</Button>
        </Modal.Footer>
      </Modal.Root>
    </>
  );
};

export const OpenAndSubmit: Story = {
  render: () => <ModalExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onClose.mockClear();

    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();

    await userEvent.click(
      canvas.getByRole('button', { name: 'モーダルを開く' }),
    );

    const dialog = await canvas.findByRole('dialog', { name: '確認' });
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveClass('ab-Modal');

    await userEvent.click(canvas.getByRole('button', { name: 'OK' }));

    // close イベントは非同期に発火する。onClose はちょうど 1 回だけ呼ばれること
    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
    await expect(onClose).toHaveBeenCalledTimes(1);
  },
};

/**
 * Escape キーによる cancel イベントはブラウザのネイティブ動作であり、
 * user-event のキーボードシミュレーションでは発火しない。
 * ここでは cancel イベントを直接発火させ、onCancel の配線と閉じる処理を検証する。
 */
export const CancelEvent: Story = {
  render: () => <ModalExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onCancel.mockClear();
    onClose.mockClear();

    await userEvent.click(
      canvas.getByRole('button', { name: 'モーダルを開く' }),
    );
    const dialog = await canvas.findByRole('dialog', { name: '確認' });

    dialog.dispatchEvent(new Event('cancel', { cancelable: true }));

    await waitFor(() => expect(onCancel).toHaveBeenCalledTimes(1));
    await waitFor(() =>
      expect(canvas.queryByRole('dialog')).not.toBeInTheDocument(),
    );
    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
  },
};

export const CloseWithBackdrop: Story = {
  render: () => <ModalExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onClose.mockClear();

    await userEvent.click(
      canvas.getByRole('button', { name: 'モーダルを開く' }),
    );
    const dialog = await canvas.findByRole('dialog', { name: '確認' });

    // ダイアログ本体の外側（::backdrop 上）の座標でヒットテストし、
    // 実際にその座標でクリックされる要素が dialog（= 背景）であることを確認してからクリックする
    const rect = dialog.getBoundingClientRect();
    const outside = {
      x: Math.max(rect.left - 10, 1),
      y: Math.max(rect.top - 10, 1),
    };
    const hit = document.elementFromPoint(outside.x, outside.y);
    await expect(hit).toBe(dialog);

    await userEvent.pointer({ keys: '[MouseLeft]', target: hit as Element });

    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
    await expect(onClose).toHaveBeenCalledTimes(1);
  },
};

export const ClickInsideDoesNotClose: Story = {
  render: () => <ModalExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onClose.mockClear();

    await userEvent.click(
      canvas.getByRole('button', { name: 'モーダルを開く' }),
    );
    const dialog = await canvas.findByRole('dialog', { name: '確認' });

    await userEvent.click(canvas.getByText('この操作を実行しますか？'));

    await expect(onClose).not.toHaveBeenCalled();
    await expect(dialog).toBeVisible();
  },
};

export const FocusTrap: Story = {
  render: () => <ModalExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', { name: 'モーダルを開く' });

    await userEvent.click(trigger);
    await canvas.findByRole('dialog', { name: '確認' });
    const cancel = canvas.getByRole('button', { name: 'キャンセル' });
    const ok = canvas.getByRole('button', { name: 'OK' });

    // showModal() により初期フォーカスがダイアログ内の最初のフォーカス可能要素に移る
    await expect(cancel).toHaveFocus();

    // ダイアログの外側は inert になり、プログラムからもフォーカスできない
    trigger.focus();
    await expect(trigger).not.toHaveFocus();

    // 最後の要素から Tab しても外側の要素には移らない
    // （ブラウザ本来の挙動ではブラウザ UI を経由して先頭へ戻るが、user-event の Tab では再現されない）
    await userEvent.tab();
    await expect(ok).toHaveFocus();
    await userEvent.tab();
    await expect(trigger).not.toHaveFocus();
    cancel.focus();

    // 先頭の要素から Shift+Tab しても外側の要素には移らない
    await userEvent.tab({ shift: true });
    await expect(trigger).not.toHaveFocus();

    // 閉じるとフォーカスが起動ボタンへ戻る
    await userEvent.click(ok);
    await waitFor(() =>
      expect(canvas.queryByRole('dialog')).not.toBeInTheDocument(),
    );
    await expect(trigger).toHaveFocus();
  },
};
