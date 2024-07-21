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
      テキストエリア
      ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
    </label>
    <textarea
      id="textarea"
      placeholder="textarea"
      name="field"
      class="ab-Textfield-input"
    ></textarea>
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
