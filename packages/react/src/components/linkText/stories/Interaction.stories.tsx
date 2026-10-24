import { expect, fn, userEvent, within } from 'storybook/test';
import { meta, type Story } from './shared';
import type { MouseEvent } from 'react';

export default {
  ...meta,
  title: 'LinkText/Interaction',
};

// テスト環境では href への遷移がテスト用 iframe を再読み込みしてしまうため、
// onClick が呼ばれたことを検証したうえで遷移だけを抑止する
const onClickWithoutNavigation = () =>
  fn((event: MouseEvent<HTMLAnchorElement>) => event.preventDefault());

export const Click: Story = {
  args: {
    href: '#link',
    children: 'リンク',
    onClick: onClickWithoutNavigation(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: 'リンク' });

    await expect(link).toHaveAttribute('href', '#link');

    await userEvent.click(link);

    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const Keyboard: Story = {
  args: {
    href: '#link',
    children: 'リンク',
    onClick: onClickWithoutNavigation(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: 'リンク' });

    await userEvent.tab();
    await expect(link).toHaveFocus();

    await userEvent.keyboard('{Enter}');

    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const Disabled: Story = {
  args: {
    href: '#disabled',
    children: 'リンク',
    disabled: true,
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: 'リンク' });
    const hashBefore = window.location.hash;

    await expect(link).toHaveAttribute('aria-disabled', 'true');

    // クリックしても onClick は呼ばれず、href への遷移も起きない
    await userEvent.click(link, { pointerEventsCheck: 0 });
    await expect(args.onClick).not.toHaveBeenCalled();
    await expect(window.location.hash).toBe(hashBefore);

    // Tab キーのフォーカス順序から外れる
    await userEvent.tab();
    await expect(link).not.toHaveFocus();

    // 強制的にフォーカスして Enter を押しても動作しない
    link.focus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).not.toHaveBeenCalled();
    await expect(window.location.hash).toBe(hashBefore);
  },
};
