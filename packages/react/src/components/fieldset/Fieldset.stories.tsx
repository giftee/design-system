import { Fieldset, Radio, Checkbox } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Fieldset',
  tags: ['autodocs'],
  component: Fieldset.Root,
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
  },
} satisfies Meta<Fieldset.RootProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: ({ ...args }) => (
    <>
      <Fieldset.Root {...args}>
        <Fieldset.Legend>RadioGroup</Fieldset.Legend>
        <Fieldset.Content>
          <Radio name="radio-sample" value="yes">
            Yes
          </Radio>
          <Radio name="radio-sample" value="no">
            No
          </Radio>
        </Fieldset.Content>
      </Fieldset.Root>
      <Fieldset.Root {...args} className="ab-mt-6">
        <Fieldset.Legend>CheckboxGroup</Fieldset.Legend>
        <Fieldset.Content>
          <Checkbox name="checkbox-sample" value="hoge">
            Hoge
          </Checkbox>
          <Checkbox name="checkbox-sample" value="fuga">
            Fuga
          </Checkbox>
        </Fieldset.Content>
      </Fieldset.Root>
    </>
  ),
};

export const Direction: Story = {
  render: ({ children, ...args }: Fieldset.RootProps) => (
    <div className="ab-flex ab-flex-column ab-gap-8">
      <Fieldset.Root {...args} direction="horizontal">
        <Fieldset.Legend>Horizontal</Fieldset.Legend>
        <Fieldset.Content>
          <Radio name="radio-horizontal" value="yes">
            Yes
          </Radio>
          <Radio name="radio-horizontal" value="no">
            No
          </Radio>
        </Fieldset.Content>
      </Fieldset.Root>
      <Fieldset.Root {...args} direction="vertical">
        <Fieldset.Legend>Vertical</Fieldset.Legend>
        <Fieldset.Content>
          <Radio name="radio-vertical" value="yes">
            Yes
          </Radio>
          <Radio name="radio-vertical" value="no">
            No
          </Radio>
        </Fieldset.Content>
      </Fieldset.Root>
    </div>
  ),
};

export const Disabled: Story = {
  render: ({ children, ...args }: Fieldset.RootProps) => (
    <div className="ab-flex ab-flex-column ab-gap-8">
      <Fieldset.Root {...args}>
        <Fieldset.Legend>Default</Fieldset.Legend>
        <Fieldset.Content>
          <div className="ab-flex ab-gap-4">
            <Radio name="radio-default" value="yes">
              Yes
            </Radio>
            <Radio name="radio-default" value="no">
              No
            </Radio>
          </div>
        </Fieldset.Content>
      </Fieldset.Root>
      <Fieldset.Root {...args} disabled>
        <Fieldset.Legend>Disabled</Fieldset.Legend>
        <Fieldset.Content>
          <div className="ab-flex ab-gap-4">
            <Radio name="radio-disabled" value="yes" disabled>
              Yes
            </Radio>
            <Radio name="radio-disabled" value="no" disabled>
              No
            </Radio>
          </div>
        </Fieldset.Content>
      </Fieldset.Root>
    </div>
  ),
};
