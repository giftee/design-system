import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/LinkText/Type',
};

export const Type: Story = {
  render: (args) => {
    return `
<div class="ab-flex ab-flex-row ab-gap-8">
  ${createComponent({ ...args, children: 'Default', type: 'default' })}
  ${createComponent({ ...args, children: 'Brand', type: 'brand' })}
</div>
  `;
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
