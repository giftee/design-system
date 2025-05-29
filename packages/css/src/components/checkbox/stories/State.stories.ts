import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Checkbox/State',
};

export const State: Story = {
  render: (args) => {
    return `
<div class="ab-m-4">
  ${createComponent({
    ...args,
    checked: true,
    id: 'default',
    name: 'default-checked',
    children: 'Default',
  })}
  ${createComponent({
    ...args,
    checked: false,
    id: 'default',
    name: 'default-notchecked',
    children: 'Default',
  })}
</div>
<div class="ab-m-4">
  ${createComponent({
    ...args,
    checked: true,
    id: 'hover',
    name: 'hover-checked',
    children: 'Hover',
  })}
  ${createComponent({
    ...args,
    checked: false,
    id: 'hover',
    name: 'hover-notchecked',
    children: 'Hover',
  })}
</div>
<div class="ab-m-4">
  ${createComponent({
    ...args,
    checked: true,
    id: 'focus',
    name: 'focus-checked',
    children: 'Focus',
  })}
  ${createComponent({
    ...args,
    checked: false,
    id: 'focus',
    name: 'focus-notchecked',
    children: 'Focus',
  })}
</div>
<div class="ab-m-4">
  ${createComponent({
    ...args,
    checked: true,
    id: 'active',
    name: 'active-checked',
    children: 'Active',
  })}
  ${createComponent({
    ...args,
    checked: false,
    id: 'active',
    name: 'active-notchecked',
    children: 'Active',
  })}
</div>
<div class="ab-m-4">
  ${createComponent({
    ...args,
    checked: true,
    id: 'disabled',
    name: 'disabled-checked',
    children: 'Disabled(廃止予定)',
    disabledType: 'class',
  })}
  ${createComponent({
    ...args,
    checked: false,
    id: 'disabled',
    name: 'disabled-notchecked',
    children: 'Disabled(廃止予定)',
    disabledType: 'class',
  })}
</div>
<div class="ab-m-4">
  ${createComponent({
    ...args,
    checked: true,
    id: 'disabled',
    name: 'disabled-checked',
    children: 'Disabled(使用推奨)',
    disabledType: 'attribute',
  })}
  ${createComponent({
    ...args,
    checked: false,
    id: 'disabled',
    name: 'disabled-notchecked',
    children: 'Disabled(使用推奨)',
    disabledType: 'attribute',
  })}
</div>
  `;
  },
  args: {
    checked: false,
    position: 'right',
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
