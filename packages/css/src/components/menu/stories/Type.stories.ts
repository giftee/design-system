import { meta } from './shared';
import type { Story } from './shared';
import { angleRight, user } from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/Menu/Type',
};

export const Type: Story = {
  render: (_args) => {
    return `
<nav aria-label="メニューの要素タイプ" style="width: 250px;">
  <ul class="ab-Menu">
    <li class="ab-Menu-item">
      <a href="#" class="ab-Menu-item-link">Link</a>
    </li>
    <li class="ab-Menu-item">
      <a href="#" class="ab-Menu-item-link">
        Link with Right Icon
        ${angleRight('ab-Icon ab-ml-auto')}
      </a>
    </li>
    <li class="ab-Menu-item">
      <a href="#" class="ab-Menu-item-link">
        ${user('ab-Icon ab-mr-2 ab-text-brand')}
        Link with Left Icon
      </a>
    </li>
    <li class="ab-Menu-item">
      <a href="#" class="ab-Menu-item-link">
        ${user('ab-Icon ab-mr-2 ab-text-brand')}
        Link with Both Icons
        ${angleRight('ab-Icon ab-ml-auto')}
      </a>
    </li>
    <li class="ab-Menu-item">
      <span class="ab-Menu-item-label">Label</span>
    </li>
    <li class="ab-Menu-item">
      <span class="ab-Menu-item-label">
        Label with Right Icon
        ${angleRight('ab-Icon ab-ml-auto')}
      </span>
    </li>
    <li class="ab-Menu-item">
      <span class="ab-Menu-item-label">
        ${user('ab-Icon ab-mr-2 ab-text-brand')}
        Label with Left Icon
      </span>
    </li>
    <li class="ab-Menu-item">
      <span class="ab-Menu-item-label">
        ${user('ab-Icon ab-mr-2 ab-text-brand')}
        Label with Both Icons
        ${angleRight('ab-Icon ab-ml-auto')}
      </span>
    </li>
  </ul>
</nav>
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
