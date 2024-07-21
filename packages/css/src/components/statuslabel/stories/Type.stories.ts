import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/StatusLabel/Type',
};

export const Type: Story = {
  render: (args) => {
    return `
${createComponent({ ...args, type: 'primary', label: 'Primary' })}
${createComponent({ ...args, type: 'outlined', label: 'Outlined' })}
${createComponent({ ...args, type: 'neutral', label: 'Neutral' })}
${createComponent({ ...args, type: 'info', label: 'Info' })}
${createComponent({ ...args, type: 'notice', label: 'Notice' })}
${createComponent({ ...args, type: 'positive', label: 'Positive' })}
${createComponent({ ...args, type: 'negative', label: 'Negative' })}
${createComponent({ ...args, type: 'disabled', label: 'Disabled' })}
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
