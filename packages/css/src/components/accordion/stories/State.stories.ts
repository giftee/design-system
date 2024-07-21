import { meta, Story, createComponent } from './shared';

export default {
  ...meta,
  title: 'Component/Accordion/State',
};

export const State: Story = {
  render: (args) => {
    return `
<div class="ab-m-12">
  ${createComponent({ ...args, summary: 'Default', id: 'default' })}
</div>
<div class="ab-m-12">
  ${createComponent({ ...args, summary: 'Hover', id: 'hover' })}
</div>
<div class="ab-m-12">
  ${createComponent({ ...args, summary: 'Focus', id: 'focus' })}
</div>
<div class="ab-m-12">
  ${createComponent({ ...args, summary: 'Active', id: 'active' })}
</div>
<div class="ab-m-12">
  ${createComponent({ ...args, summary: 'Disabled', id: 'disabled' })}
</div>
  `;
  },
  args: {
    size: 'medium',
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focusVisible: '#focus',
    },
  },
};
