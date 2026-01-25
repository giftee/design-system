import { meta, Textfield, type TextfieldProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Textfield/Disabled',
};

export const Disabled: Story = {
  render: ({ ...args }: TextfieldProps) => (
    <>
      <div className="ab-flex ab-flex-column ab-gap-12">
        <Textfield
          name="disabled"
          {...args}
          disabled={true}
          helptext="disabled"
        ></Textfield>
        <Textfield name="notDisabled" {...args}></Textfield>
      </div>
    </>
  ),
};
