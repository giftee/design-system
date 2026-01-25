import { meta, Fieldset, Radio, type FieldsetProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Fieldset/Disabled',
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
