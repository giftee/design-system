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
  ${createComponent({ ...args, id: 'default', label: 'Default' })}
  ${createComponent({ ...args, id: 'focus', label: 'Focus' })}
  ${createComponent({ ...args, id: 'hover', label: 'Hover' })}
  ${createComponent({ ...args, id: 'active', label: 'Active' })}
  ${createComponent({ ...args, id: 'disabled', label: 'Disabled' })}
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
