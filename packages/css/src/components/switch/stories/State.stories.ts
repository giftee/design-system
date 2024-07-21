import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Switch/State',
};

export const State: Story = {
  render: (args) => {
    return `
  <div class="ab-m-4">
    ${createComponent({
      ...args,
      id: 'default',
      checked: true,
      children: 'Default',
    })}
    ${createComponent({
      ...args,
      id: 'default',
      checked: false,
      children: 'Default',
    })}
  </div>
  <div class="ab-m-4">
    ${createComponent({
      ...args,
      id: 'hover',
      checked: true,
      children: 'Hover',
    })}
    ${createComponent({
      ...args,
      id: 'hover',
      checked: false,
      children: 'Hover',
    })}
  </div>
  <div class="ab-m-4">
    ${createComponent({
      ...args,
      id: 'focus',
      checked: true,
      children: 'Focus',
    })}
    ${createComponent({
      ...args,
      id: 'focus',
      checked: false,
      children: 'Focus',
    })}
  </div>
  <div class="ab-m-4">
    ${createComponent({
      ...args,
      id: 'active',
      checked: true,
      children: 'Active',
    })}
    ${createComponent({
      ...args,
      id: 'active',
      checked: false,
      children: 'Active',
    })}
  </div>
  <div class="ab-m-4">
    ${createComponent({
      ...args,
      id: 'disabled',
      checked: true,
      children: 'Disabled',
    })}
    ${createComponent({
      ...args,
      id: 'disabled',
      checked: false,
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
