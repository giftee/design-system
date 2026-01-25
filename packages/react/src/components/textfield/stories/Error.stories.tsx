import { meta, Textfield, type TextfieldProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Textfield/Error',
};

export const Error: Story = {
  render: ({ ...args }: TextfieldProps) => (
    <>
      <div className="ab-flex ab-flex-column ab-gap-12">
        <Textfield
          name="single-error"
          {...args}
          error={true}
          errorMessages="単一エラーメッセージ"
        ></Textfield>
        <Textfield
          name="multi-errors"
          {...args}
          error={true}
          errorMessages={['複数エラーメッセージ1', '複数エラーメッセージ2']}
        ></Textfield>
        <Textfield name="notError" {...args}></Textfield>
      </div>
    </>
  ),
};
