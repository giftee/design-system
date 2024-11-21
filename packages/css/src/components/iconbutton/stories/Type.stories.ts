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
${createComponent({ ...args, type: 'neutral' })}
${createComponent({ ...args, type: 'text' })}
${createComponent({ ...args, type: 'negative' })}
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
