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
<nav aria-label="開閉可能なサイドメニュー" style="width: 250px;">
  <ul class="ab-Menu">
    <li class="ab-Menu-item">
      <a href="#" class="ab-Menu-item-link">
        通常メニュー
        ${angleRight('ab-Icon ab-ml-auto')}
      </a>
    </li>
    <li class="ab-Menu-item">
      <a href="#" class="ab-Menu-item-link">
        通常メニュー
        ${angleRight('ab-Icon ab-ml-auto')}
      </a>
    </li>
    <li class="ab-Menu-item">
      <a href="#" class="ab-Menu-item-link">
        通常メニュー
        ${angleRight('ab-Icon ab-ml-auto')}
      </a>
    </li>
    <li id="collapsible-menu-item-1" class="ab-Menu-item is-open">
      <button
        id="collapsible-menu-button-1"
        class="ab-Menu-button"
        type="button"
        aria-expanded="true"
        aria-controls="collapsible-menu-panel-1"
      >
        開閉メニュー
        ${plus('ab-Icon ab-ml-auto ab-none')}
        ${minus('ab-Icon ab-ml-auto')}
      </button>
      <ul id="collapsible-menu-panel-1" class="ab-Menu-sub-menu">
        <li class="ab-Menu-item">
          <a href="#" class="ab-Menu-item-link">
            サブメニュ− 1
            ${angleRight('ab-Icon ab-ml-auto')}
          </a>
        </li>
        <li class="ab-Menu-item">
          <a href="#" class="ab-Menu-item-link">
            サブメニュ− 2
            ${angleRight('ab-Icon ab-ml-auto')}
          </a>
        </li>
      </ul>
    </li>
    <li id="collapsible-menu-item-2" class="ab-Menu-item">
      <button
        id="collapsible-menu-button-2"
        class="ab-Menu-button"
        type="button"
        aria-expanded="false"
        aria-controls="collapsible-menu-panel-2"
      >
        開閉メニュー
        ${plus('ab-Icon ab-ml-auto')}
        ${minus('ab-Icon ab-ml-auto ab-none')}
      </button>
      <ul id="collapsible-menu-panel-2" class="ab-Menu-sub-menu" hidden>
        <li class="ab-Menu-item">
          <a href="#" class="ab-Menu-item-link">
            サブメニュ− 3
            ${angleRight('ab-Icon ab-ml-auto')}
          </a>
        </li>
        <li class="ab-Menu-item">
          <a href="#" class="ab-Menu-item-link">
            サブメニュ− 4
            ${angleRight('ab-Icon ab-ml-auto')}
          </a>
        </li>
      </ul>
    </li>
  </ul>
</nav>

<script>
  const collapsibleMenuItem1 = document.getElementById("collapsible-menu-item-1");
  const collapsibleMenuButton1 = document.getElementById("collapsible-menu-button-1");
  const collapsibleMenuPanel1 = document.getElementById("collapsible-menu-panel-1");
  const collapsibleMenuItem2 = document.getElementById("collapsible-menu-item-2");
  const collapsibleMenuButton2 = document.getElementById("collapsible-menu-button-2");
  const collapsibleMenuPanel2 = document.getElementById("collapsible-menu-panel-2");

  collapsibleMenuButton1.addEventListener('click', () => {
    const expanded = collapsibleMenuButton1.getAttribute('aria-expanded') === 'true';
    collapsibleMenuItem1.classList.toggle('is-open', !expanded);
    collapsibleMenuButton1.setAttribute('aria-expanded', String(!expanded));
    collapsibleMenuPanel1.hidden = expanded;
    collapsibleMenuButton1.firstElementChild.classList.toggle('ab-none');
    collapsibleMenuButton1.lastElementChild.classList.toggle('ab-none');
  });
  collapsibleMenuButton2.addEventListener('click', () => {
    const expanded = collapsibleMenuButton2.getAttribute('aria-expanded') === 'true';
    collapsibleMenuItem2.classList.toggle('is-open', !expanded);
    collapsibleMenuButton2.setAttribute('aria-expanded', String(!expanded));
    collapsibleMenuPanel2.hidden = expanded;
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
