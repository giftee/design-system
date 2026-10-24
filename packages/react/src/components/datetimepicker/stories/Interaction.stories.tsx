import { expect, fn, userEvent, within, fireEvent } from 'storybook/test';
import { meta, type Story } from './shared';

export default {
  ...meta,
  title: 'DateTimePicker/Interaction',
};

export const ChangeValue: Story = {
  args: { label: '日時', helptext: undefined, onChange: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('日時');

    await expect(input).toHaveAttribute('type', 'datetime-local');
    await expect(input).toHaveValue('');

    await fireEvent.change(input, { target: { value: '2026-01-15T10:30' } });

    await expect(input).toHaveValue('2026-01-15T10:30');
    await expect(args.onChange).toHaveBeenCalledTimes(1);
  },
};

export const Disabled: Story = {
  args: { label: '日時', helptext: undefined, disabled: true, onChange: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('日時');

    await expect(input).toBeDisabled();

    await userEvent.tab();
    await expect(input).not.toHaveFocus();
    await expect(args.onChange).not.toHaveBeenCalled();
  },
};

export const HelptextAccessibility: Story = {
  args: { label: '日時', helptext: '補助テキスト', required: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/日時/);

    await expect(input).toBeRequired();
    await expect(input).toHaveAttribute('aria-invalid', 'false');

    const helptext = canvas.getByText('補助テキスト');
    await expect(input).toHaveAttribute('aria-describedby', helptext.id);

    await userEvent.tab();
    await expect(input).toHaveFocus();
  },
};

export const ErrorMessage: Story = {
  args: {
    label: '日時',
    helptext: '補助テキスト',
    error: true,
    errorMessages: '正しい形式で入力してください',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('日時');

    await expect(input).toHaveAttribute('aria-invalid', 'true');

    const alert = canvas.getByRole('alert');
    await expect(alert).toHaveTextContent('正しい形式で入力してください');
    await expect(input).toHaveAttribute('aria-errormessage', alert.id);

    const helptext = canvas.getByText('補助テキスト');
    await expect(input.getAttribute('aria-describedby')).toBe(
      `${alert.id} ${helptext.id}`,
    );
  },
};
