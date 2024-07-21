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
    <div class="ab-Popover ab-Popover-top is-open">
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
    <div class="ab-Popover ab-Popover-top-start is-open">
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
    <div class="ab-Popover ab-Popover-top-end is-open">
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
    <div class="ab-Popover ab-Popover-bottom is-open">
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
    <div class="ab-Popover ab-Popover-bottom-start is-open">
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
    <div class="ab-Popover ab-Popover-bottom-end is-open">
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
    <div class="ab-Popover ab-Popover-left is-open">
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
    <div class="ab-Popover ab-Popover-left-start is-open">
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
    <div class="ab-Popover ab-Popover-left-end is-open">
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
    <div class="ab-Popover ab-Popover-right is-open">
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
    <div class="ab-Popover ab-Popover-right-start is-open">
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
    <div class="ab-Popover ab-Popover-right-end is-open">
      <ul class="ab-Menu ab-Menu-small" role="menu">
        <li class="ab-Menu-item" role="menuitem" tabindex="0">
          MenuItem1
        </li>
        <li class="ab-Menu-item" role="menuitem" tabindex="0">MenuItem2</li>
      </ul>
    </div>
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
