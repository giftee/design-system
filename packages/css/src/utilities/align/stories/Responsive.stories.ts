import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Align/Responsive',
};

export const Responsive: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-items-start ab-sm-items-center ab-border" style="min-height: 150px;">
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
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
