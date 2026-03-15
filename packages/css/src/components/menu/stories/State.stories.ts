import { meta } from './shared';
import type { Story } from './shared';
import { angleRight, user } from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/Menu/State',
};

export const State: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-gap-4">
  <div class="ab-p-2" style="width: 250px;">
    <nav aria-label="サイドメニューサンプル">
      <ul class="ab-Menu">
      <li class="ab-Menu-item">
        <a href="#" class="ab-Menu-item-link">Default</a>
      </li>
      <li class="ab-Menu-item">
        <a id="hover" href="#" class="ab-Menu-item-link">Hover</a>
      </li>
      <li class="ab-Menu-item">
        <a id="active" href="#" class="ab-Menu-item-link">Active</a>
      </li>
      <li class="ab-Menu-item">
        <a id="focus" href="#" class="ab-Menu-item-link">Focus</a>
      </li>
      <li class="ab-Menu-item is-selected">
        <a href="#" class="ab-Menu-item-link">Selected</a>
      </li>
      <li class="ab-Menu-item is-disabled">
        <span class="ab-Menu-item-label">Disabled</span>
      </li>
      </ul>
    </nav>
  </div>
  <div class="ab-p-2" style="width: 250px;">
    <nav aria-label="アイコン付きサイドメニューサンプル">
      <ul class="ab-Menu">
        <li class="ab-Menu-item">
          <a href="#" class="ab-Menu-item-link">
            ${user('ab-Icon ab-mr-2')}
            Default
            ${angleRight('ab-Icon ab-ml-auto')}
          </a>
        </li>
        <li class="ab-Menu-item">
          <a id="hover-icon" href="#" class="ab-Menu-item-link">
            ${user('ab-Icon ab-mr-2')}
            Hover
            ${angleRight('ab-Icon ab-ml-auto')}
          </a>
        </li>
        <li class="ab-Menu-item">
          <a id="active-icon" href="#" class="ab-Menu-item-link">
            ${user('ab-Icon ab-mr-2')}
            Active
            ${angleRight('ab-Icon ab-ml-auto')}
          </a>
        </li>
        <li class="ab-Menu-item">
          <a id="focus-icon" href="#" class="ab-Menu-item-link">
            ${user('ab-Icon ab-mr-2')}
            Focus
            ${angleRight('ab-Icon ab-ml-auto')}
          </a>
        </li>
        <li class="ab-Menu-item is-selected">
          <a href="#" class="ab-Menu-item-link">
            ${user('ab-Icon ab-mr-2')}
            Selected
            ${angleRight('ab-Icon ab-ml-auto')}
          </a>
        </li>
        <li class="ab-Menu-item is-disabled">
          <span class="ab-Menu-item-label">
            ${user('ab-Icon ab-mr-2')}
            Disabled
            ${angleRight('ab-Icon ab-ml-auto')}
          </span>
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
      focusVisible: '#focus',
    },
  },
};
