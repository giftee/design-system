import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Popover/Direction',
};

export const Direction: Story = {
  render: (_args) => {
    return `
<h4 class="ab-text-headline-m ab-mb-30">PopoverTop</h4>
<div class="ab-flex ab-flex-justify-around">
  <div class="ab-position-relative">
    <button class="ab-Button">Popover Source</button>
    <div class="ab-Popover ab-Popover-top">
      <ul class="ab-Menu ab-Menu-small" role="menu">
        <li class="ab-Menu-item" role="menuitem" tabindex="0">
          MenuItem1
        </li>
        <li class="ab-Menu-item" role="menuitem" tabindex="0">MenuItem2</li>
      </ul>
    </div>
  </div>
  <div class="ab-position-relative">
    <button class="ab-Button">Popover Source</button>
    <div class="ab-Popover ab-Popover-top-start">
      <ul class="ab-Menu ab-Menu-small" role="menu">
        <li class="ab-Menu-item" role="menuitem" tabindex="0">
          MenuItem1
        </li>
        <li class="ab-Menu-item" role="menuitem" tabindex="0">MenuItem2</li>
      </ul>
    </div>
  </div>
  <div class="ab-position-relative">
    <button class="ab-Button">Popover Source</button>
    <div class="ab-Popover ab-Popover-top-end">
      <ul class="ab-Menu ab-Menu-small" role="menu">
        <li class="ab-Menu-item" role="menuitem" tabindex="0">
          MenuItem1
        </li>
        <li class="ab-Menu-item" role="menuitem" tabindex="0">MenuItem2</li>
      </ul>
    </div>
  </div>
</div>
<h4 class="ab-text-headline-m">PopoverBottom</h4>
<div class="ab-flex ab-flex-justify-around">
  <div class="ab-position-relative">
    <button class="ab-Button">Popover Source</button>
    <div class="ab-Popover ab-Popover-bottom">
      <ul class="ab-Menu ab-Menu-small" role="menu">
        <li class="ab-Menu-item" role="menuitem" tabindex="0">
          MenuItem1
        </li>
        <li class="ab-Menu-item" role="menuitem" tabindex="0">MenuItem2</li>
      </ul>
    </div>
  </div>
  <div class="ab-position-relative">
    <button class="ab-Button">Popover Source</button>
    <div class="ab-Popover ab-Popover-bottom-start">
      <ul class="ab-Menu ab-Menu-small" role="menu">
        <li class="ab-Menu-item" role="menuitem" tabindex="0">
          MenuItem1
        </li>
        <li class="ab-Menu-item" role="menuitem" tabindex="0">MenuItem2</li>
      </ul>
    </div>
  </div>
  <div class="ab-position-relative">
    <button class="ab-Button">Popover Source</button>
    <div class="ab-Popover ab-Popover-bottom-end">
      <ul class="ab-Menu ab-Menu-small" role="menu">
        <li class="ab-Menu-item" role="menuitem" tabindex="0">
          MenuItem1
        </li>
        <li class="ab-Menu-item" role="menuitem" tabindex="0">MenuItem2</li>
      </ul>
    </div>
  </div>
</div>
<h4 class="ab-text-headline-m ab-mt-30 ab-mb-10">PopoverLeft</h4>
<div class="ab-flex ab-flex-justify-around">
  <div class="ab-position-relative">
    <button class="ab-Button">Popover Source</button>
    <div class="ab-Popover ab-Popover-left">
      <ul class="ab-Menu ab-Menu-small" role="menu">
        <li class="ab-Menu-item" role="menuitem" tabindex="0">
          MenuItem1
        </li>
        <li class="ab-Menu-item" role="menuitem" tabindex="0">MenuItem2</li>
      </ul>
    </div>
  </div>
  <div class="ab-position-relative">
    <button class="ab-Button">Popover Source</button>
    <div class="ab-Popover ab-Popover-left-start">
      <ul class="ab-Menu ab-Menu-small" role="menu">
        <li class="ab-Menu-item" role="menuitem" tabindex="0">
          MenuItem1
        </li>
        <li class="ab-Menu-item" role="menuitem" tabindex="0">MenuItem2</li>
      </ul>
    </div>
  </div>
  <div class="ab-position-relative">
    <button class="ab-Button">Popover Source</button>
    <div class="ab-Popover ab-Popover-left-end">
      <ul class="ab-Menu ab-Menu-small" role="menu">
        <li class="ab-Menu-item" role="menuitem" tabindex="0">
          MenuItem1
        </li>
        <li class="ab-Menu-item" role="menuitem" tabindex="0">MenuItem2</li>
      </ul>
    </div>
  </div>
</div>
<h4 class="ab-text-headline-m ab-my-20">PopoverRight</h4>
<div class="ab-flex ab-flex-justify-around">
  <div class="ab-position-relative">
    <button class="ab-Button">Popover Source</button>
    <div class="ab-Popover ab-Popover-right">
      <ul class="ab-Menu ab-Menu-small" role="menu">
        <li class="ab-Menu-item" role="menuitem" tabindex="0">
          MenuItem1
        </li>
        <li class="ab-Menu-item" role="menuitem" tabindex="0">
          MenuItem2
        </li>
      </ul>
    </div>
  </div>
  <div class="ab-position-relative">
    <button class="ab-Button">Popover Source</button>
    <div class="ab-Popover ab-Popover-right-start">
      <ul class="ab-Menu ab-Menu-small" role="menu">
        <li class="ab-Menu-item" role="menuitem" tabindex="0">
          MenuItem1
        </li>
        <li class="ab-Menu-item" role="menuitem" tabindex="0">
          MenuItem2
        </li>
      </ul>
    </div>
  </div>
  <div class="ab-position-relative">
    <button class="ab-Button">Popover Source</button>
    <div class="ab-Popover ab-Popover-right-end">
      <ul class="ab-Menu ab-Menu-small" role="menu">
        <li class="ab-Menu-item" role="menuitem" tabindex="0">
          MenuItem1
        </li>
        <li class="ab-Menu-item" role="menuitem" tabindex="0">MenuItem2</li>
      </ul>
    </div>
  </div>
</div>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.ab-Button');

    buttons.forEach((button) => {
      const popover = button.parentElement.querySelector('.ab-Popover');
      if (!popover) return;

      button.addEventListener('click', (e) => {
        popover.classList.toggle('is-open');
      });
    });
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
