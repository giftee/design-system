import { meta } from './shared';
import type { Story } from './shared';
import { angleRight } from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/Menu/Type',
};

export const Type: Story = {
  render: (args) => {
    const sizeClass = `ab-Menu-${args.size}`;

    return `
<div class="ab-border ab-mb-4">
  <h2 class="ab-text-headline-m">デフォルト</h2>
  <ul class="ab-Menu ${sizeClass}" role="menu">
    <li class="ab-Menu-item" role="menuitem" tabindex="0">
      MenuItem1
    </li>
    <li class="ab-Menu-item" role="menuitem" tabindex="0">
      MenuItem2
    </li>
  </ul>
</div>
<div class="ab-border ab-mb-4">
  <h2 class="ab-text-headline-m">右アイコン</h2>
  <ul class="ab-Menu ${sizeClass}" role="menu">
    <li class="ab-Menu-item" role="menuitem" tabindex="0">
      MenuItem1
      ${angleRight('ab-Menu-item-right-icon ab-Icon')}
    </li>
    <li class="ab-Menu-item" role="menuitem" tabindex="0">
      MenuItem2
      ${angleRight('ab-Menu-item-right-icon ab-Icon')}
    </li>
  </ul>
</div>
<div class="ab-border ab-mb-4">
  <h2 class="ab-text-headline-m">サブラベル</h2>
  <ul class="ab-Menu ${sizeClass}" role="menu">
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
