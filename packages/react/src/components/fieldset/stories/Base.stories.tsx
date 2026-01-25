import {
  meta,
  Fieldset,
  Radio,
  Checkbox,
  type FieldsetProps,
  type Story,
} from './shared';

export default {
  ...meta,
  title: 'Fieldset/Base',
};

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
