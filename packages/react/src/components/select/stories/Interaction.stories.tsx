import { expect, fn, userEvent, within } from 'storybook/test';
import { meta, Select, type SelectProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Select/Interaction',
};

const onChange = fn();

export const SelectOption: Story = {
  render: (args: SelectProps) => (
    <Select {...args} name="choice" onChange={onChange} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onChange.mockClear();
    const select = canvas.getByRole('combobox', { name: 'label' });

    await expect(select).toHaveValue('option1');

    await userEvent.selectOptions(select, 'option2');
    await expect(select).toHaveValue('option2');
    await expect(onChange).toHaveBeenCalledTimes(1);

    await userEvent.selectOptions(select, 'Option3');
    await expect(select).toHaveValue('option3');
    await expect(onChange).toHaveBeenCalledTimes(2);
  },
};

export const Disabled: Story = {
  render: (args: SelectProps) => (
    <Select {...args} name="disabled" disabled onChange={onChange} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onChange.mockClear();
    const select = canvas.getByRole('combobox', { name: 'label' });

    await expect(select).toBeDisabled();

    await userEvent.tab();
    await expect(select).not.toHaveFocus();
    await expect(onChange).not.toHaveBeenCalled();
  },
};

export const Required: Story = {
  render: (args: SelectProps) => <Select {...args} name="required" required />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByLabelText(/label/);

    await expect(select).toBeRequired();
    await expect(canvas.getByText('必須')).toBeInTheDocument();
  },
};

export const ErrorState: Story = {
  render: (args: SelectProps) => (
    <Select
      {...args}
      name="error"
      error
      errorMessages="選択してください"
      helptext="ヘルプ"
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByLabelText('label');
    const alert = canvas.getByRole('alert');
    const helptext = canvas.getByText('ヘルプ');

    await expect(alert).toHaveTextContent('選択してください');
    await expect(select).toHaveAttribute('aria-invalid', 'true');
    await expect(select).toHaveAttribute('aria-errormessage', alert.id);
    await expect(select.getAttribute('aria-describedby')).toBe(
      `${alert.id} ${helptext.id}`,
    );
  },
};
