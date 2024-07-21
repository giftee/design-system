import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Button/Type',
};

export const Type: Story = {
  render: (args) => {
    return `
${createComponent({ ...args, type: 'default', children: 'Default' })}
${createComponent({ ...args, type: 'outlined', children: 'Outlined' })}
${createComponent({ ...args, type: 'negative', children: 'Negative' })}
${createComponent({ ...args, type: 'text', children: 'Text' })}
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
