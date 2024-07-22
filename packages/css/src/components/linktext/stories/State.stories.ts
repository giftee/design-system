import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/LinkText/State',
};

export const State: Story = {
  render: (args) => {
    return `
<div class="ab-flex ab-flex-row ab-gap-8">
  ${createComponent({ ...args, id: 'default', children: 'Default' })}
  ${createComponent({ ...args, id: 'focus', children: 'Focus' })}
  ${createComponent({ ...args, id: 'hover', children: 'Hover' })}
  ${createComponent({ ...args, id: 'active', children: 'Active' })}
  ${createComponent({ ...args, id: 'disabled', children: 'Disabled' })}
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
