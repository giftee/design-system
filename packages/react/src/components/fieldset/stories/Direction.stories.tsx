import {
  meta,
  Fieldset,
  Radio,
  type FieldsetProps,
  type Story,
} from './shared';

export default {
  ...meta,
  title: 'Fieldset/Direction',
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
