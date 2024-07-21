import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Snackbar/Type',
};

export const Type: Story = {
  render: (args) => {
    return `
${createComponent({ ...args, type: 'neutral', description: 'Neutral' })}
${createComponent({ ...args, type: 'info', description: 'Info' })}
${createComponent({ ...args, type: 'notice', description: 'Notice' })}
${createComponent({ ...args, type: 'positive', description: 'Positive' })}
${createComponent({ ...args, type: 'negative', description: 'Negative' })}
  `;
  },
  args: {
    type: 'neutral',
    description: 'description',
    hasClose: false,
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
