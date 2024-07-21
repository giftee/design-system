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
    children: 'Default',
  })}
  ${createComponent({
    ...args,
    checked: false,
    id: 'default',
    children: 'Default',
  })}
</div>
<div class="ab-m-4">
  ${createComponent({
    ...args,
    checked: true,
    id: 'hover',
    children: 'Hover',
  })}
  ${createComponent({
    ...args,
    checked: false,
    id: 'hover',
    children: 'Hover',
  })}
</div>
<div class="ab-m-4">
  ${createComponent({
    ...args,
    checked: true,
    id: 'focus',
    children: 'Focus',
  })}
  ${createComponent({
    ...args,
    checked: false,
    id: 'focus',
    children: 'Focus',
  })}
</div>
<div class="ab-m-4">
  ${createComponent({
    ...args,
    checked: true,
    id: 'active',
    children: 'Active',
  })}
  ${createComponent({
    ...args,
    checked: false,
    id: 'active',
    children: 'Active',
  })}
</div>
<div class="ab-m-4">
  ${createComponent({
    ...args,
    checked: true,
    id: 'disabled',
    children: 'Disabled',
  })}
  ${createComponent({
    ...args,
    checked: false,
    id: 'disabled',
    children: 'Disabled',
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
