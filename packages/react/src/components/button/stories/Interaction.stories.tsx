import { expect, fn, userEvent, within } from 'storybook/test';
import { meta, type Story } from './shared';
import type { MouseEvent } from 'react';

export default {
  ...meta,
  title: 'Button/Interaction',
};

export const Click: Story = {
  args: { onClick: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'ラベル' });

    await userEvent.click(button);

    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const Keyboard: Story = {
  args: { onClick: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'ラベル' });

    await userEvent.tab();
    await expect(button).toHaveFocus();

    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');

    await expect(args.onClick).toHaveBeenCalledTimes(2);
  },
};

export const Disabled: Story = {
  args: { disabled: true, onClick: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'ラベル' });

    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute('aria-disabled', 'true');

    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();

    await userEvent.tab();
    await expect(button).not.toHaveFocus();
  },
};

export const AsLink: Story = {
  // テスト環境では href への遷移がテスト用 iframe を再読み込みしてしまうため遷移だけ抑止する
  args: {
    href: '#link',
    onClick: fn((event: MouseEvent<HTMLAnchorElement>) =>
      event.preventDefault(),
    ),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: 'ラベル' });

    await expect(link).toHaveAttribute('href', '#link');
    await expect(canvas.queryByRole('button')).not.toBeInTheDocument();

    await userEvent.click(link);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};
