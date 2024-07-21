import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Button/State',
};

export const State: Story = {
  render: (args) => {
    return `
${createComponent({ ...args, id: 'default', children: 'Default' })}
${createComponent({ ...args, id: 'hover', children: 'Hover' })}
${createComponent({ ...args, id: 'focus', children: 'Focus' })}
${createComponent({ ...args, id: 'active', children: 'Active' })}
${createComponent({ ...args, id: 'disabled', children: 'Disabled' })}
  `;
  },
  args: {
    type: 'default',
    size: 'small',
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focusVisible: '#focus',
    },
  },
};
