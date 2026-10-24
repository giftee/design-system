import { expect, fn, userEvent, within } from 'storybook/test';
import { meta, type Story } from './shared';

export default {
  ...meta,
  title: 'IconButton/Interaction',
};

export const AccessibleName: Story = {
  args: { onClick: fn() },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: '閉じる' });

    await expect(button).toHaveAttribute('aria-label', '閉じる');
    await expect(button).toHaveTextContent('');
  },
};

export const Click: Story = {
  args: { onClick: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: '閉じる' });

    await userEvent.click(button);

    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const Keyboard: Story = {
  args: { onClick: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: '閉じる' });

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
    const button = canvas.getByRole('button', { name: '閉じる' });

    await expect(button).toBeDisabled();

    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();

    await userEvent.tab();
    await expect(button).not.toHaveFocus();
  },
};
