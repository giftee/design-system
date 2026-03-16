import { createComponent, interactionScript, meta } from './shared';
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
  ${createComponent({
    buttonId: 'hover',
    popoverId: 'popover-top',
    positionClass: 'ab-Popover-top',
  })}
  ${createComponent({
    buttonId: 'active',
    popoverId: 'popover-top-start',
    positionClass: 'ab-Popover-top-start',
  })}
  ${createComponent({
    buttonId: 'focus',
    popoverId: 'popover-top-end',
    positionClass: 'ab-Popover-top-end',
  })}
</div>
<h4 class="ab-text-headline-m">PopoverBottom</h4>
<div class="ab-flex ab-flex-justify-around">
  ${createComponent({
    buttonId: 'popover-bottom-button',
    popoverId: 'popover-bottom',
    positionClass: 'ab-Popover-bottom',
  })}
  ${createComponent({
    buttonId: 'popover-bottom-start-button',
    popoverId: 'popover-bottom-start',
    positionClass: 'ab-Popover-bottom-start',
  })}
  ${createComponent({
    buttonId: 'popover-bottom-end-button',
    popoverId: 'popover-bottom-end',
    positionClass: 'ab-Popover-bottom-end',
  })}
</div>
<h4 class="ab-text-headline-m ab-mt-30 ab-mb-10">PopoverLeft</h4>
<div class="ab-flex ab-flex-justify-around">
  ${createComponent({
    buttonId: 'popover-left-button',
    popoverId: 'popover-left',
    positionClass: 'ab-Popover-left',
  })}
  ${createComponent({
    buttonId: 'popover-left-start-button',
    popoverId: 'popover-left-start',
    positionClass: 'ab-Popover-left-start',
  })}
  ${createComponent({
    buttonId: 'popover-left-end-button',
    popoverId: 'popover-left-end',
    positionClass: 'ab-Popover-left-end',
  })}
</div>
<h4 class="ab-text-headline-m ab-my-20">PopoverRight</h4>
<div class="ab-flex ab-flex-justify-around">
  ${createComponent({
    buttonId: 'popover-right-button',
    popoverId: 'popover-right',
    positionClass: 'ab-Popover-right',
  })}
  ${createComponent({
    buttonId: 'popover-right-start-button',
    popoverId: 'popover-right-start',
    positionClass: 'ab-Popover-right-start',
  })}
  ${createComponent({
    buttonId: 'popover-right-end-button',
    popoverId: 'popover-right-end',
    positionClass: 'ab-Popover-right-end',
  })}
</div>
${interactionScript}
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
