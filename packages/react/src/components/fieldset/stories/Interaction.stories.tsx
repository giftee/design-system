import { expect, fn, userEvent, within } from 'storybook/test';
import {
  meta,
  Checkbox,
  Fieldset,
  Radio,
  type FieldsetProps,
  type Story,
} from './shared';

export default {
  ...meta,
  title: 'Fieldset/Interaction',
};

const onChange = fn();

export const Group: Story = {
  render: (args: FieldsetProps) => (
    <Fieldset {...args} title="好きな果物">
      <Checkbox name="fruit" value="apple" onChange={onChange}>
        りんご
      </Checkbox>
      <Checkbox name="fruit" value="orange" onChange={onChange}>
        みかん
      </Checkbox>
    </Fieldset>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onChange.mockClear();
    const group = canvas.getByRole('group', { name: '好きな果物' });

    await expect(group).toBeInTheDocument();
    await expect(within(group).getAllByRole('checkbox')).toHaveLength(2);

    const apple = within(group).getByRole('checkbox', { name: 'りんご' });
    await userEvent.click(apple);
    await expect(apple).toBeChecked();
    await expect(onChange).toHaveBeenCalledTimes(1);
  },
};

export const Disabled: Story = {
  render: (args: FieldsetProps) => (
    <Fieldset {...args} disabled title="無効なグループ">
      <Checkbox name="disabled-fieldset" onChange={onChange}>
        項目A
      </Checkbox>
      <Radio name="disabled-radio" value="b" onChange={onChange}>
        項目B
      </Radio>
    </Fieldset>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onChange.mockClear();
    const group = canvas.getByRole('group', { name: '無効なグループ' });
    const checkbox = canvas.getByRole('checkbox', { name: '項目A' });
    const radio = canvas.getByRole('radio', { name: '項目B' });

    await expect(group).toBeDisabled();
    await expect(checkbox).toBeDisabled();
    await expect(radio).toBeDisabled();

    await userEvent.click(canvas.getByText('項目A'), { pointerEventsCheck: 0 });
    await userEvent.click(canvas.getByText('項目B'), { pointerEventsCheck: 0 });
    await expect(checkbox).not.toBeChecked();
    await expect(radio).not.toBeChecked();
    await expect(onChange).not.toHaveBeenCalled();
  },
};

export const Direction: Story = {
  render: (args: FieldsetProps) => (
    <>
      <Fieldset {...args} direction="horizontal" title="横">
        <Checkbox name="h">H</Checkbox>
      </Fieldset>
      <Fieldset {...args} direction="vertical" title="縦">
        <Checkbox name="v">V</Checkbox>
      </Fieldset>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByRole('group', { name: '横' })).toHaveClass(
      'ab-Fieldset-horizontal',
    );
    await expect(canvas.getByRole('group', { name: '縦' })).toHaveClass(
      'ab-Fieldset-vertical',
    );
  },
};
