import { meta } from './shared';
import type { Story } from './shared';
import { angleRight } from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/Menu/Link',
};

export const Link: Story = {
  render: (args) => {
    const sizeClass = `ab-Menu-${args.size}`;

    return `
<div class="ab-border ab-mb-4">
  <nav class="ab-Menu ${sizeClass}" role="menu">
    <a href="#" id="default" class="ab-Menu-item" role="menuitem" tabindex="0">
      <div class="ab-flex ab-flex-column">
        <span class="ab-Menu-item-label">Default</span>
        <span class="ab-Menu-item-sublabel">Default</span>
      </div>
      ${angleRight('ab-Menu-item-right-icon ab-Icon')}
    </a>
    <a href="#" id="hover" class="ab-Menu-item" role="menuitem" tabindex="0">
      <div class="ab-flex ab-flex-column">
        <span class="ab-Menu-item-label">Hover</span>
        <span class="ab-Menu-item-sublabel">Hover</span>
      </div>
      ${angleRight('ab-Menu-item-right-icon ab-Icon')}
    </a>
    <a href="#" id="active" class="ab-Menu-item" role="menuitem" tabindex="0">
      <div class="ab-flex ab-flex-column">
        <span class="ab-Menu-item-label">Active</span>
        <span class="ab-Menu-item-sublabel">Active</span>
      </div>
      ${angleRight('ab-Menu-item-right-icon ab-Icon')}
    </a>
    <a href="#" id="disabled" class="ab-Menu-item is-disabled" role="menuitem" tabindex="0">
      <div class="ab-flex ab-flex-column">
        <span class="ab-Menu-item-label">Disabled</span>
        <span class="ab-Menu-item-sublabel">Disabled</span>
      </div>
      ${angleRight('ab-Menu-item-right-icon ab-Icon')}
    </a>
    <a href="#" id="selected" class="ab-Menu-item is-selected" role="menuitem" tabindex="0">
      <div class="ab-flex ab-flex-column">
        <span class="ab-Menu-item-label">Selected</span>
        <span class="ab-Menu-item-sublabel">Selected</span>
      </div>
      ${angleRight('ab-Menu-item-right-icon ab-Icon')}
    </a>
  </nav>
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
