import { expect, fn, userEvent, within } from 'storybook/test';
import { IconButton } from '@/index';
import { meta, InlineAlert, type Story } from './shared';

export default {
  ...meta,
  title: 'InlineAlert/Interaction',
};

const onClose = fn();

export const Structure: Story = {
  render: (args) => (
    <InlineAlert.Root {...args} role="alert">
      <InlineAlert.Title>エラーが発生しました</InlineAlert.Title>
      <InlineAlert.Description>
        入力内容を確認してください。
      </InlineAlert.Description>
    </InlineAlert.Root>
  ),
  args: { variant: 'negative' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole('alert');

    await expect(alert).toHaveClass('ab-InlineAlert-negative');
    await expect(within(alert).getByText('エラーが発生しました')).toBeVisible();
    await expect(
      within(alert).getByText('入力内容を確認してください。'),
    ).toBeVisible();
  },
};

export const Status: Story = {
  render: (args) => (
    <InlineAlert.Root {...args} role="status">
      <InlineAlert.Description>保存しました。</InlineAlert.Description>
    </InlineAlert.Root>
  ),
  args: { variant: 'positive' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const status = canvas.getByRole('status');

    await expect(status).toHaveClass('ab-InlineAlert-positive');
    await expect(status).toHaveTextContent('保存しました。');
  },
};

export const Dismiss: Story = {
  render: (args) => (
    <InlineAlert.Root {...args} role="status">
      <InlineAlert.Title>お知らせ</InlineAlert.Title>
      <InlineAlert.Description>
        <IconButton aria-label="閉じる" onClick={onClose}>
          <span aria-hidden="true">×</span>
        </IconButton>
      </InlineAlert.Description>
    </InlineAlert.Root>
  ),
  args: { variant: 'info' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onClose.mockClear();
    const close = canvas.getByRole('button', { name: '閉じる' });

    await userEvent.tab();
    await expect(close).toHaveFocus();

    await userEvent.click(close);
    await userEvent.keyboard('{Enter}');

    await expect(onClose).toHaveBeenCalledTimes(2);
  },
};
