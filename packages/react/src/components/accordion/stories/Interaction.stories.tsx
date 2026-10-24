import { expect, fn, userEvent, waitFor, within } from 'storybook/test';
import { meta, Accordion, type Story } from './shared';

export default {
  ...meta,
  title: 'Accordion/Interaction',
};

const onToggle = fn();

const renderAccordion = (args: Accordion.RootProps) => (
  <Accordion.Root {...args} onToggle={onToggle}>
    <Accordion.Summary>概要</Accordion.Summary>
    <Accordion.Content>詳細な内容</Accordion.Content>
  </Accordion.Root>
);

export const Toggle: Story = {
  render: renderAccordion,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onToggle.mockClear();
    const summary = canvas.getByText('概要');
    const details = canvasElement.querySelector('details')!;

    await expect(details).not.toHaveAttribute('open');
    await expect(canvas.getByText('詳細な内容')).not.toBeVisible();

    await userEvent.click(summary);

    await expect(details).toHaveAttribute('open');
    await expect(canvas.getByText('詳細な内容')).toBeVisible();
    await waitFor(() => expect(onToggle).toHaveBeenCalledTimes(1));

    await userEvent.click(summary);

    await expect(details).not.toHaveAttribute('open');
    await expect(canvas.getByText('詳細な内容')).not.toBeVisible();
    await waitFor(() => expect(onToggle).toHaveBeenCalledTimes(2));
  },
};

/**
 * `<summary>` の Enter / Space による開閉はブラウザのネイティブ動作であり、
 * user-event のキーボードシミュレーションでは再現されない（実ブラウザでは動作する）。
 * ここではフォーカス可能であることのみ検証する。
 */
export const SummaryIsFocusable: Story = {
  render: renderAccordion,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const summary = canvas.getByText('概要');

    await userEvent.tab();
    await expect(summary).toHaveFocus();
  },
};

export const DefaultOpen: Story = {
  render: (args) => renderAccordion({ ...args, open: true }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const details = canvasElement.querySelector('details')!;

    await expect(details).toHaveAttribute('open');
    await expect(canvas.getByText('詳細な内容')).toBeVisible();
  },
};

export const Disabled: Story = {
  args: { disabled: true },
  render: renderAccordion,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onToggle.mockClear();
    const summary = canvas.getByText('概要');
    const details = canvasElement.querySelector('details')!;

    await expect(summary).toHaveAttribute('aria-disabled', 'true');

    // クリックしても開かない（CSS の pointer-events: none に依存せず、コンポーネント側で抑止する）
    await userEvent.click(summary, { pointerEventsCheck: 0 });
    await expect(details).not.toHaveAttribute('open');
    await expect(canvas.getByText('詳細な内容')).not.toBeVisible();

    // Tab キーのフォーカス順序から外れる
    await userEvent.tab();
    await expect(summary).not.toHaveFocus();

    await expect(onToggle).not.toHaveBeenCalled();
  },
};
