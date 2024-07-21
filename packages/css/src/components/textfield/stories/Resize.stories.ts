import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Textfield/Resize',
};

export const Resize: Story = {
  render: (args) => {
    return `
<div class="ab-flex ab-flex-wrap ab-gap-2">
  <div class="ab-Textfield resize-both ab-mb-8">
    <label for="textarea" class="ab-Textfield-label">
      上下左右にリサイズ可能なテキストエリア
      ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
    </label>
    <textarea
      id="textarea-resize-both"
      placeholder="textarea resize both"
      name="field"
      class="ab-Textfield-input ab-h-48"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </textarea>
  </div>
  <div class="ab-Textfield resize-vertical ab-mb-8">
    <label for="textarea" class="ab-Textfield-label">
      上下にのみリサイズ可能なテキストエリア
      ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
    </label>
    <textarea
      id="textarea-resize-vertical"
      placeholder="textarea resize vertical"
      name="field"
      class="ab-Textfield-input ab-h-48"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </textarea>
  </div>
  <div class="ab-Textfield resize-horizontal ab-mb-8">
    <label for="textarea" class="ab-Textfield-label">
      左右にのみリサイズ可能なテキストエリア
      ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
    </label>
    <textarea
      id="textarea-resize-horizontal"
      placeholder="textarea resize horizontal"
      name="field"
      class="ab-Textfield-input ab-h-48"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </textarea>
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
