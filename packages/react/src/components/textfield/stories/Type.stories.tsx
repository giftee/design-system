import { meta, Textfield, type TextfieldProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Textfield/Type',
};

export const Type: Story = {
  render: ({ ...args }: TextfieldProps) => (
    <>
      <div className="ab-flex ab-flex-column ab-gap-12">
        <Textfield name="input" {...args} label="input"></Textfield>
        <Textfield
          name="textarea"
          {...args}
          label="textarea"
          multiline={5}
          helptext="multilineの指定でテキストエリアになります"
        ></Textfield>
        <Textfield
          name="textarea-resize-both"
          {...args}
          label="textarea-resize-both"
          multiline={5}
          resize="both"
          helptext="multilineとresizeを組み合わせることで、サイズ可変のテキストエリアになります"
        ></Textfield>
        <Textfield
          name="textarea-resize-horizontal"
          {...args}
          label="textarea-resize-horizontal"
          multiline={5}
          resize="horizontal"
        ></Textfield>
        <Textfield
          name="textarea-resize-vertical"
          {...args}
          label="textarea-resize-vertical"
          multiline={5}
          resize="vertical"
        ></Textfield>
      </div>
    </>
  ),
};
