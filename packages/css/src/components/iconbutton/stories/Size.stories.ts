import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/IconButton/Size',
};

export const Size: Story = {
  render: (args) => {
    return `
${createComponent({ ...args, size: 'small' })}
${createComponent({ ...args, size: 'large' })}
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
