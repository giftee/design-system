import { meta } from './shared';
import type { Story } from './shared';
import { angleRight } from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/Menu/State',
};

export const State: Story = {
  render: (args) => {
    const sizeClass = `ab-Menu-${args.size}`;

    return `
<div class="ab-border ab-mb-4">
  <ul class="ab-Menu ${sizeClass}" role="menu">
    <li id="default" class="ab-Menu-item" role="menuitem" tabindex="0">
      <div class="ab-flex ab-flex-column">
        <span class="ab-Menu-item-label">Default</span>
        <span class="ab-Menu-item-sublabel">Default</span>
      </div>
      ${angleRight('ab-Menu-item-right-icon ab-Icon')}
    </li>
    <li id="hover" class="ab-Menu-item" role="menuitem" tabindex="0">
      <div class="ab-flex ab-flex-column">
        <span class="ab-Menu-item-label">Hover</span>
        <span class="ab-Menu-item-sublabel">Hover</span>
      </div>
      ${angleRight('ab-Menu-item-right-icon ab-Icon')}
    </li>
    <li id="focus" class="ab-Menu-item" role="menuitem" tabindex="0">
      <div class="ab-flex ab-flex-column">
        <span class="ab-Menu-item-label">Focus</span>
        <span class="ab-Menu-item-sublabel">Focus</span>
      </div>
      ${angleRight('ab-Menu-item-right-icon ab-Icon')}
    </li>
    <li id="active" class="ab-Menu-item" role="menuitem" tabindex="0">
      <div class="ab-flex ab-flex-column">
        <span class="ab-Menu-item-label">Active</span>
        <span class="ab-Menu-item-sublabel">Active</span>
      </div>
      ${angleRight('ab-Menu-item-right-icon ab-Icon')}
    </li>
    <li id="disabled" class="ab-Menu-item is-disabled" role="menuitem" tabindex="0">
      <div class="ab-flex ab-flex-column">
        <span class="ab-Menu-item-label">Disabled</span>
        <span class="ab-Menu-item-sublabel">Disabled</span>
      </div>
      ${angleRight('ab-Menu-item-right-icon ab-Icon')}
    </li>
    <li id="selected" class="ab-Menu-item is-selected" role="menuitem" tabindex="0">
      <div class="ab-flex ab-flex-column">
        <span class="ab-Menu-item-label">Selected</span>
        <span class="ab-Menu-item-sublabel">Selected</span>
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
