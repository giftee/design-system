import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Textfield/Required',
};

export const Required: Story = {
  render: (_args) => {
    return `
<div class="ab-Textfield ab-mb-8">
  <label for="text" class="ab-Textfield-label">
    テキスト
    <div class="ab-StatusLabel">必須</div>
  </label>
  <input
    id="text"
    placeholder="text"
    name="field"
    class="ab-Textfield-input"
  />
  <div class="ab-Textfield-helptext">type=text の Textfield</div>
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
