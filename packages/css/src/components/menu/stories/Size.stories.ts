import { meta } from './shared';
import type { Story } from './shared';
import { angleRight } from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/Menu/Size',
};

export const Size: Story = {
  render: (_args) => {
    return `
<div class="ab-border ab-mb-4">
  <h2 class="ab-text-headline-m">Small</h2>
  <ul class="ab-Menu ab-Menu-small" role="menu">
    <li class="ab-Menu-item" role="menuitem" tabindex="0">
      <div class="ab-flex ab-flex-column">
        <span class="ab-Menu-item-label">MenuItem1</span>
        <span class="ab-Menu-item-sublabel">MenuItem1</span>
      </div>
      ${angleRight('ab-Menu-item-right-icon ab-Icon')}
    </li>
    <li class="ab-Menu-item" role="menuitem" tabindex="0">
      <div class="ab-flex ab-flex-column">
        <span class="ab-Menu-item-label">MenuItem2</span>
        <span class="ab-Menu-item-sublabel">MenuItem2</span>
      </div>
      ${angleRight('ab-Menu-item-right-icon ab-Icon')}
    </li>
  </ul>
</div>
<div class="ab-border ab-mb-4">
  <h2 class="ab-text-headline-m">Medium</h2>
  <ul class="ab-Menu ab-Menu-medium" role="menu">
    <li class="ab-Menu-item" role="menuitem" tabindex="0">
      <div class="ab-flex ab-flex-column">
        <span class="ab-Menu-item-label">MenuItem1</span>
        <span class="ab-Menu-item-sublabel">MenuItem1</span>
      </div>
      ${angleRight('ab-Menu-item-right-icon ab-Icon')}
    </li>
    <li class="ab-Menu-item" role="menuitem" tabindex="0">
      <div class="ab-flex ab-flex-column">
        <span class="ab-Menu-item-label">MenuItem2</span>
        <span class="ab-Menu-item-sublabel">MenuItem2</span>
      </div>
      ${angleRight('ab-Menu-item-right-icon ab-Icon')}
    </li>
  </ul>
</div>
  `;
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
