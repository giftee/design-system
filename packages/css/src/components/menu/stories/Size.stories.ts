import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Menu/Size',
};

export const Size: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-gap-4">
  <div class="ab-p-2" style="width: 250px;">
    <ul class="ab-Menu ab-Menu-medium" role="menu">
      <li class="ab-Menu-item" role="menuitem">
        <a href="#" class="ab-Menu-item-link">Mediumメニュー</a>
      </li>
      <li class="ab-Menu-item" role="menuitem">
        <a href="#" class="ab-Menu-item-link">メニュー</a>
      </li>
      <li class="ab-Menu-item" role="menuitem">
        <a href="#" class="ab-Menu-item-link">メニュー</a>
      </li>
    </ul>
  </div>
  <div class="ab-p-2" style="width: 250px;">
    <ul class="ab-Menu ab-Menu-small" role="menu">
      <li class="ab-Menu-item" role="menuitem">
        <a href="#" class="ab-Menu-item-link">Smallメニュー</a>
      </li>
      <li class="ab-Menu-item" role="menuitem">
        <a href="#" class="ab-Menu-item-link">メニュー</a>
      </li>
      <li class="ab-Menu-item" role="menuitem">
        <a href="#" class="ab-Menu-item-link">メニュー</a>
      </li>
    </ul>
  </div>
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
