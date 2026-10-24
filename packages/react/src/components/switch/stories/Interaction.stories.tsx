import { expect, fn, userEvent, within } from 'storybook/test';
import { meta, Switch, type SwitchProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Switch/Interaction',
};

const onChange = fn();

export const Toggle: Story = {
  render: (args: SwitchProps) => (
    <Switch {...args} onChange={onChange}>
      通知
    </Switch>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onChange.mockClear();
    const input = canvas.getByRole('checkbox', { name: '通知' });

    await expect(input).not.toBeChecked();

    await userEvent.click(canvas.getByText('通知'));
    await expect(input).toBeChecked();
    await expect(onChange).toHaveBeenCalledTimes(1);

    await userEvent.click(canvas.getByText('通知'));
    await expect(input).not.toBeChecked();
    await expect(onChange).toHaveBeenCalledTimes(2);
  },
};

export const Keyboard: Story = {
  render: (args: SwitchProps) => (
    <Switch {...args} onChange={onChange}>
      通知
    </Switch>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onChange.mockClear();
    const input = canvas.getByRole('checkbox', { name: '通知' });

    await userEvent.tab();
    await expect(input).toHaveFocus();

    await userEvent.keyboard(' ');
    await expect(input).toBeChecked();

    await userEvent.keyboard(' ');
    await expect(input).not.toBeChecked();
    await expect(onChange).toHaveBeenCalledTimes(2);
  },
};

export const Disabled: Story = {
  render: (args: SwitchProps) => (
    <Switch {...args} disabled onChange={onChange}>
      無効
    </Switch>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onChange.mockClear();
    const input = canvas.getByRole('checkbox', { name: '無効' });

    await expect(input).toBeDisabled();

    await userEvent.click(canvas.getByText('無効'), { pointerEventsCheck: 0 });
    await expect(input).not.toBeChecked();

    await userEvent.tab();
    await expect(input).not.toHaveFocus();
    await expect(onChange).not.toHaveBeenCalled();
  },
};

export const LabelAssociation: Story = {
  render: (args: SwitchProps) => (
    <Switch {...args} name="association" defaultChecked>
      自動更新
    </Switch>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('自動更新');

    await expect(input).toHaveAttribute('type', 'checkbox');
    await expect(input).toHaveAttribute('name', 'association');
    await expect(input).toBeChecked();
    await expect(canvas.queryByRole('switch')).not.toBeInTheDocument();
  },
};
