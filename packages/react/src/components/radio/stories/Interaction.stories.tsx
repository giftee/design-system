import { expect, fn, userEvent, within } from 'storybook/test';
import { meta, Radio, type RadioProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Radio/Interaction',
};

const onChange = fn();

export const Select: Story = {
  render: (args: RadioProps) => (
    <div role="radiogroup" aria-label="回答">
      <Radio {...args} name="answer" value="yes" onChange={onChange}>
        はい
      </Radio>
      <Radio {...args} name="answer" value="no" onChange={onChange}>
        いいえ
      </Radio>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onChange.mockClear();
    const yes = canvas.getByRole('radio', { name: 'はい' });
    const no = canvas.getByRole('radio', { name: 'いいえ' });

    await expect(yes).not.toBeChecked();
    await expect(no).not.toBeChecked();

    await userEvent.click(yes);
    await expect(yes).toBeChecked();
    await expect(no).not.toBeChecked();

    await userEvent.click(canvas.getByText('いいえ'));
    await expect(no).toBeChecked();
    await expect(yes).not.toBeChecked();
    await expect(onChange).toHaveBeenCalledTimes(2);
  },
};

export const ArrowKeys: Story = {
  render: (args: RadioProps) => (
    <div role="radiogroup" aria-label="サイズ">
      <Radio {...args} name="size" value="s">
        S
      </Radio>
      <Radio {...args} name="size" value="m">
        M
      </Radio>
      <Radio {...args} name="size" value="l">
        L
      </Radio>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const s = canvas.getByRole('radio', { name: 'S' });
    const m = canvas.getByRole('radio', { name: 'M' });
    const l = canvas.getByRole('radio', { name: 'L' });

    await userEvent.click(s);
    await expect(s).toBeChecked();

    await userEvent.keyboard('{ArrowDown}');
    await expect(m).toBeChecked();
    await expect(m).toHaveFocus();

    await userEvent.keyboard('{ArrowRight}');
    await expect(l).toBeChecked();

    await userEvent.keyboard('{ArrowUp}');
    await expect(m).toBeChecked();
    await expect(s).not.toBeChecked();
  },
};

export const Disabled: Story = {
  render: (args: RadioProps) => (
    <div role="radiogroup" aria-label="選択肢">
      <Radio {...args} name="disabled" value="a" onChange={onChange}>
        有効
      </Radio>
      <Radio {...args} name="disabled" value="b" disabled onChange={onChange}>
        無効
      </Radio>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onChange.mockClear();
    const enabled = canvas.getByRole('radio', { name: '有効' });
    const disabled = canvas.getByRole('radio', { name: '無効' });

    await expect(disabled).toBeDisabled();

    await userEvent.click(canvas.getByText('無効'), { pointerEventsCheck: 0 });
    await expect(disabled).not.toBeChecked();
    await expect(onChange).not.toHaveBeenCalled();

    await userEvent.click(enabled);
    await userEvent.keyboard('{ArrowDown}');
    await expect(disabled).not.toBeChecked();
    await expect(enabled).toBeChecked();
  },
};

export const LabelAssociation: Story = {
  render: (args: RadioProps) => (
    <Radio {...args} id="radio-id" name="association" value="x">
      ラベル
    </Radio>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByLabelText('ラベル');

    await expect(radio).toHaveAttribute('type', 'radio');
    await expect(radio).toHaveAttribute('id', 'radio-id');
    await expect(radio).toHaveAttribute('name', 'association');
  },
};
