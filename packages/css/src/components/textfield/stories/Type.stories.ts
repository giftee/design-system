import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Textfield/Type',
};

export const Type: Story = {
  render: (args) => {
    return `
<div class="ab-flex ab-flex-wrap ab-gap-2">
  <div class="ab-Textfield ab-mb-8">
    <label for="text" class="ab-Textfield-label">
      テキスト
      ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
    </label>
    <input
      id="text"
      placeholder="text"
      name="field"
      class="ab-Textfield-input"
    />
    <div class="ab-Textfield-helptext">type=text の Textfield</div>
  </div>
  <div class="ab-Textfield ab-mb-8">
    <label for="textarea" class="ab-Textfield-label">
      テキストエリア。rows と cols を指定可能です。
      ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
    </label>
    <textarea
      id="textarea"
      placeholder="textarea"
      name="field"
      class="ab-Textfield-textarea"
      rows="5"
      cols="15"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </textarea>
    <div class="ab-Textfield-helptext">textarea の Textfield</div>
  </div>
</div>
  `;
  },
  args: {
    required: false,
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
