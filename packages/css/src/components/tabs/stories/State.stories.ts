import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Tabs/State',
};

export const State: Story = {
  render: (args) => {
    return `
${createComponent({ ...args, id: 'default' })}
${createComponent({ ...args, id: 'hover' })}
${createComponent({ ...args, id: 'focus' })}
${createComponent({ ...args, id: 'active' })}
${createComponent({ ...args, id: 'disabled' })}
  `;
  },
  args: {
    fullWidth: false,
    position: 'left',
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
