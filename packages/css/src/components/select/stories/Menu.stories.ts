import { meta } from './shared';
import type { Story } from './shared';
import { check, angleDown } from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/Select/Menu',
};

export const Menu: Story = {
  render: (_args) => {
    return `
<div class="ab-position-relative">
  <div class="ab-Popover ab-Popover-bottom-start is-open ab-w-128">
    <ul class="ab-Menu ab-Menu-small" role="menu">
      <li class="ab-Menu-item" role="menuitem" tabindex="0">
        MenuItem1
      </li>
      <li class="ab-Menu-item is-selected" role="menuitem" tabindex="0">
        MenuItem2
        ${check('ab-Menu-item-right-icon ab-Icon')}
      </li>
    </ul>
  </div>
  <div id="default" class="ab-Textfield ab-mb-8">
    <label for="default" class="ab-Textfield-label">
      Default
      <div class="ab-StatusLabel">必須</div>
    </label>
    <button
      id="default"
      name="field"
      class="ab-Textfield-picker ab-w-128"
    >
      <span class="ab-Textfield-picker-label">select</span>
      ${angleDown('ab-Textfield-picker-icon ab-Icon ab-Icon-small')}
    </button>
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
