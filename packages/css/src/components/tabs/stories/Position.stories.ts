import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Tabs/Position',
};

export const Position: Story = {
  render: (args) => {
    return `
${createComponent({ ...args, position: 'center' })}
${createComponent({ ...args, position: 'left' })}
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
