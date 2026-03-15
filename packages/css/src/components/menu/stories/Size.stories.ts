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
    <nav aria-label="中サイズのサイドメニュー">
      <ul class="ab-Menu ab-Menu-medium">
        <li class="ab-Menu-item">
          <a href="#" class="ab-Menu-item-link">Mediumメニュー</a>
        </li>
        <li class="ab-Menu-item">
          <a href="#" class="ab-Menu-item-link">メニュー</a>
        </li>
        <li class="ab-Menu-item">
          <a href="#" class="ab-Menu-item-link">メニュー</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="ab-p-2" style="width: 250px;">
    <nav aria-label="小サイズのサイドメニュー">
      <ul class="ab-Menu ab-Menu-small">
        <li class="ab-Menu-item">
          <a href="#" class="ab-Menu-item-link">Smallメニュー</a>
        </li>
        <li class="ab-Menu-item">
          <a href="#" class="ab-Menu-item-link">メニュー</a>
        </li>
        <li class="ab-Menu-item">
          <a href="#" class="ab-Menu-item-link">メニュー</a>
        </li>
      </ul>
    </nav>
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
