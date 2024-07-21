import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Button/Size',
};

export const Size: Story = {
  render: (args) => {
    return `
${createComponent({ ...args, size: 'xsmall', children: 'XSmall' })}
${createComponent({ ...args, size: 'small', children: 'Small' })}
${createComponent({ ...args, size: 'large', children: 'Large' })}
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
