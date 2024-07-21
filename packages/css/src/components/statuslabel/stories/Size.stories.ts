import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/StatusLabel/Size',
};

export const Size: Story = {
  render: (args) => {
    return `
${createComponent({ ...args, size: 'small', label: 'Small' })}
${createComponent({ ...args, size: 'medium', label: 'Medium' })}
${createComponent({ ...args, size: 'large', label: 'Large' })}
  `;
  },
  args: {
    type: 'primary',
    size: 'small',
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
