import { meta } from './shared';
import type { Story } from './shared';
import { plus, minus, angleRight } from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/Menu/Collapsible',
};

export const Collapsible: Story = {
  render: (_args) => {
    return `
<ul class="ab-Menu" role="menu" style="width: 250px;">
  <li class="ab-Menu-item" role="menuitem">
    <a href="#" class="ab-Menu-item-link">
      通常メニュー
      ${angleRight('ab-Icon ab-ml-auto')}
    </a>
  </li>
  <li class="ab-Menu-item" role="menuitem">
    <a href="#" class="ab-Menu-item-link">
      通常メニュー
      ${angleRight('ab-Icon ab-ml-auto')}
    </a>
  </li>
  <li class="ab-Menu-item" role="menuitem">
    <a href="#" class="ab-Menu-item-link">
      通常メニュー
      ${angleRight('ab-Icon ab-ml-auto')}
    </a>
  </li>
  <li id="collapsible-menu-item-1" class="ab-Menu-item is-open" role="menuitem">
    <button id="collapsible-menu-button-1" class="ab-Menu-button">
      開閉メニュー
      ${plus('ab-Icon ab-ml-auto ab-none')}
      ${minus('ab-Icon ab-ml-auto')}
    </button>
    <ul class="ab-Menu-sub-menu" role="menu">
      <li class="ab-Menu-item" role="menuitem">
        <a ref="#" class="ab-Menu-item-link"> サブメニュ− 1</a>
      </li>
      <li class="ab-Menu-item" role="menuitem">
        <a ref="#" class="ab-Menu-item-link"> サブメニュ− 2</a>
      </li>
    </ul>
  </li>
  <li id="collapsible-menu-item-2" class="ab-Menu-item" role="menuitem">
    <button id="collapsible-menu-button-2" class="ab-Menu-button">
      開閉メニュー
      ${plus('ab-Icon ab-ml-auto')}
      ${minus('ab-Icon ab-ml-auto ab-none')}
    </button>
    <ul class="ab-Menu-sub-menu" role="menu">
      <li class="ab-Menu-item" role="menuitem">
        <a ref="#" class="ab-Menu-item-link"> サブメニュ− 3</a>
      </li>
      <li class="ab-Menu-item" role="menuitem">
        <a ref="#" class="ab-Menu-item-link"> サブメニュ− 4</a>
      </li>
    </ul>
  </li>
</ul>

<script>
  const collapsibleMenuItem1 = document.getElementById("collapsible-menu-item-1");
  const collapsibleMenuButton1 = document.getElementById("collapsible-menu-button-1");
  const collapsibleMenuItem2 = document.getElementById("collapsible-menu-item-2");
  const collapsibleMenuButton2 = document.getElementById("collapsible-menu-button-2");

  collapsibleMenuButton1.addEventListener('click', () => {
    collapsibleMenuItem1.classList.toggle('is-open');
    collapsibleMenuButton1.firstElementChild.classList.toggle('ab-none');
    collapsibleMenuButton1.lastElementChild.classList.toggle('ab-none');
  });
  collapsibleMenuButton2.addEventListener('click', () => {
    collapsibleMenuItem2.classList.toggle('is-open');
    collapsibleMenuButton2.firstElementChild.classList.toggle('ab-none');
    collapsibleMenuButton2.lastElementChild.classList.toggle('ab-none');
  });
</script>
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
