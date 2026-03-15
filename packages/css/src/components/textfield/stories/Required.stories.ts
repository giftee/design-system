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
    <span class="ab-StatusLabel">必須</span>
  </label>
  <input
    id="text"
    placeholder="text"
    name="field"
    class="ab-Textfield-input"
    required
    aria-describedby="text-helptext"
  />
  <div id="text-helptext" class="ab-Textfield-helptext">
    type=text の Textfield
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
