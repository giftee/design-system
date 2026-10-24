import { expect, fn, userEvent, within } from 'storybook/test';
import { meta, Checkbox, type CheckboxProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Checkbox/Interaction',
};

const onChange = fn();

export const Toggle: Story = {
  render: (args: CheckboxProps) => (
    <Checkbox {...args} name="toggle" onChange={onChange}>
      同意する
    </Checkbox>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onChange.mockClear();
    const checkbox = canvas.getByRole('checkbox', { name: '同意する' });

    await expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
    await expect(onChange).toHaveBeenCalledTimes(1);

    await userEvent.click(canvas.getByText('同意する'));
    await expect(checkbox).not.toBeChecked();
    await expect(onChange).toHaveBeenCalledTimes(2);
  },
};

export const Keyboard: Story = {
  render: (args: CheckboxProps) => (
    <Checkbox {...args} name="keyboard" onChange={onChange}>
      同意する
    </Checkbox>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onChange.mockClear();
    const checkbox = canvas.getByRole('checkbox', { name: '同意する' });

    await userEvent.tab();
    await expect(checkbox).toHaveFocus();

    await userEvent.keyboard(' ');
    await expect(checkbox).toBeChecked();

    await userEvent.keyboard(' ');
    await expect(checkbox).not.toBeChecked();
    await expect(onChange).toHaveBeenCalledTimes(2);
  },
};

export const Disabled: Story = {
  render: (args: CheckboxProps) => (
    <Checkbox {...args} name="disabled" disabled onChange={onChange}>
      無効
    </Checkbox>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onChange.mockClear();
    const checkbox = canvas.getByRole('checkbox', { name: '無効' });

    await expect(checkbox).toBeDisabled();

    await userEvent.click(canvas.getByText('無効'), { pointerEventsCheck: 0 });
    await expect(checkbox).not.toBeChecked();

    await userEvent.tab();
    await expect(checkbox).not.toHaveFocus();
    await expect(onChange).not.toHaveBeenCalled();
  },
};

export const LabelAssociation: Story = {
  render: (args: CheckboxProps) => (
    <Checkbox {...args} id="custom-id" name="association" defaultChecked>
      メールを受け取る
    </Checkbox>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByLabelText('メールを受け取る');

    await expect(checkbox).toHaveAttribute('type', 'checkbox');
    await expect(checkbox).toHaveAttribute('id', 'custom-id');
    await expect(checkbox).toHaveAttribute('name', 'association');
    await expect(checkbox).toBeChecked();
  },
};
