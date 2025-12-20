import type { FieldsetProps } from '@/index';
import { Fieldset, Radio, Checkbox } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Fieldset',
  tags: ['autodocs'],
  component: Fieldset,
  args: {
    direction: 'horizontal',
  },
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      table: {
        defaultValue: {
          summary: 'horizontal',
        },
      },
      description: '方向',
    },
    title: {
      control: { type: 'text' },
      description: 'フィールドセットのタイトル',
    },
  },
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: ({ ...args }: FieldsetProps) => (
    <div className="ab-flex ab-flex-column ab-gap-8">
      <Fieldset {...args} title="タイトル">
        <Radio name="radio-sample" value="yes">
          Yes
        </Radio>
        <Radio name="radio-sample" value="no">
          No
        </Radio>
      </Fieldset>
      <Fieldset {...args} title="タイトル">
        <Checkbox name="checkbox-sample" value="hoge">
          Hoge
        </Checkbox>
        <Checkbox name="checkbox-sample" value="fuga">
          Fuga
        </Checkbox>
      </Fieldset>
    </div>
  ),
};

export const Direction: Story = {
  render: ({ ...args }: FieldsetProps) => (
    <div className="ab-flex ab-flex-column ab-gap-8">
      <Fieldset {...args} direction="horizontal" title="Horizontal">
        <Radio name="radio-horizontal" value="yes">
          Yes
        </Radio>
        <Radio name="radio-horizontal" value="no">
          No
        </Radio>
      </Fieldset>
      <Fieldset {...args} direction="vertical" title="Vertical">
        <Radio name="radio-vertical" value="yes">
          Yes
        </Radio>
        <Radio name="radio-vertical" value="no">
          No
        </Radio>
      </Fieldset>
    </div>
  ),
};

export const Disabled: Story = {
  render: ({ ...args }: FieldsetProps) => (
    <div className="ab-flex ab-flex-column ab-gap-8">
      <Fieldset {...args} title="Default">
        <div className="ab-flex ab-gap-4">
          <Radio name="radio-default" value="yes">
            Yes
          </Radio>
          <Radio name="radio-default" value="no">
            No
          </Radio>
        </div>
      </Fieldset>
      <Fieldset {...args} disabled title="Disabled">
        <div className="ab-flex ab-gap-4">
          <Radio name="radio-disabled" value="yes" disabled>
            Yes
          </Radio>
          <Radio name="radio-disabled" value="no" disabled>
            No
          </Radio>
        </div>
      </Fieldset>
    </div>
  ),
};
