import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Tabs/Size',
};

export const Size: Story = {
  render: (args) => {
    return `
${createComponent({ ...args, size: 'small' })}
${createComponent({ ...args, size: 'medium' })}
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
