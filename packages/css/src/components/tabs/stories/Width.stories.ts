import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Tabs/Width',
};

export const Width: Story = {
  render: (args) => {
    return `
${createComponent({ ...args, fullWidth: false })}
${createComponent({ ...args, fullWidth: true })}
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
