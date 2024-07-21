import { meta, Story, createComponent } from './shared';

export default {
  ...meta,
  title: 'Component/Snackbar/WithCloseIcon',
};

export const WithCloseIcon: Story = {
  render: (args) => {
    return `
${createComponent({
  ...args,
  type: 'neutral',
  description: 'Neutral',
  hasClose: true,
})}
${createComponent({
  ...args,
  type: 'info',
  description: 'Info',
  hasClose: true,
})}
${createComponent({
  ...args,
  type: 'notice',
  description: 'Notice',
  hasClose: true,
})}
${createComponent({
  ...args,
  type: 'positive',
  description: 'Positive',
  hasClose: true,
})}
${createComponent({
  ...args,
  type: 'negative',
  description: 'Negative',
  hasClose: true,
})}
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
