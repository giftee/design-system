import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/IconButton/Type',
};

export const Type: Story = {
  render: (args) => {
    return `
${createComponent({ ...args, type: 'default' })}
${createComponent({ ...args, type: 'outlined' })}
${createComponent({ ...args, type: 'negative' })}
${createComponent({ ...args, type: 'text' })}
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
