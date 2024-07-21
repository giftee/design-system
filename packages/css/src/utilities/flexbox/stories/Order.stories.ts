import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Flexbox/Order',
};

export const Order: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-border">
  <div class="ab-flex-order-2 ab-p-5 ab-border ab-bg-rest-secondary">order-2</div>
  <div class="ab-flex-order-none ab-p-5 ab-border ab-bg-rest-secondary">none</div>
  <div class="ab-flex-order-1 ab-p-5 ab-border ab-bg-rest-secondary">order-1</div>
</div>
`;
  },
  args: {},
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
