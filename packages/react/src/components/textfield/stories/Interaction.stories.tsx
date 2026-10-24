import { expect, fn, userEvent, within } from 'storybook/test';
import { meta, type Story } from './shared';

export default {
  ...meta,
  title: 'Textfield/Interaction',
};

export const Typing: Story = {
  args: { label: '名前', helptext: undefined, onChange: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('名前');

    await expect(input.tagName).toBe('INPUT');

    await userEvent.type(input, 'abc');

    await expect(input).toHaveValue('abc');
    await expect(args.onChange).toHaveBeenCalledTimes(3);
  },
};

export const Multiline: Story = {
  args: {
    label: 'コメント',
    helptext: undefined,
    multiline: 3,
    onChange: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByLabelText('コメント');

    await expect(textarea.tagName).toBe('TEXTAREA');
    await expect(textarea).toHaveAttribute('rows', '3');

    await userEvent.type(textarea, 'あ{Enter}い');

    await expect(textarea).toHaveValue('あ\nい');
    await expect(args.onChange).toHaveBeenCalled();
  },
};

export const Disabled: Story = {
  args: { label: '名前', helptext: undefined, disabled: true, onChange: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('名前');

    await expect(input).toBeDisabled();

    await userEvent.type(input, 'abc');

    await expect(input).toHaveValue('');
    await expect(args.onChange).not.toHaveBeenCalled();

    await userEvent.tab();
    await expect(input).not.toHaveFocus();
  },
};

export const HelptextAccessibility: Story = {
  args: { label: '名前', helptext: '全角で入力してください', required: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/名前/);

    await expect(input).toBeRequired();
    await expect(input).toHaveAttribute('aria-invalid', 'false');

    const helptext = canvas.getByText('全角で入力してください');
    await expect(input).toHaveAttribute('aria-describedby', helptext.id);
    await expect(input).toHaveAccessibleDescription('全角で入力してください');

    await userEvent.tab();
    await expect(input).toHaveFocus();
  },
};

export const ErrorMessage: Story = {
  args: {
    label: '名前',
    helptext: '全角で入力してください',
    error: true,
    errorMessages: '必須項目です',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('名前');

    await expect(input).toHaveAttribute('aria-invalid', 'true');

    const alert = canvas.getByRole('alert');
    await expect(alert).toHaveTextContent('必須項目です');
    await expect(input).toHaveAttribute('aria-errormessage', alert.id);

    const helptext = canvas.getByText('全角で入力してください');
    await expect(input.getAttribute('aria-describedby')).toBe(
      `${alert.id} ${helptext.id}`,
    );
  },
};

export const ErrorMessages: Story = {
  args: {
    label: '名前',
    helptext: undefined,
    errorMessages: ['1文字以上入力してください', '全角で入力してください'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('名前');

    await expect(input).toHaveAttribute('aria-invalid', 'true');

    const alert = canvas.getByRole('alert');
    const first = canvas.getByText('1文字以上入力してください');
    const second = canvas.getByText('全角で入力してください');
    await expect(alert).toContainElement(first);
    await expect(alert).toContainElement(second);

    // aria-errormessage は単一 id のみ有効なので、複数メッセージをまとめた alert 要素を参照する
    await expect(input).toHaveAttribute('aria-errormessage', alert.id);
    await expect(input).toHaveAttribute('aria-describedby', alert.id);
  },
};
