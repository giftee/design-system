import { meta, Textfield, type TextfieldProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Textfield/Required',
};

export const Required: Story = {
  render: ({ ...args }: TextfieldProps) => (
    <>
      <div className="ab-flex ab-flex-column ab-gap-12">
        <Textfield
          name="required"
          {...args}
          label="必須"
          required={true}
        ></Textfield>
        <Textfield
          name="notRequired"
          {...args}
          label="任意"
          required={false}
        ></Textfield>
      </div>
    </>
  ),
};
