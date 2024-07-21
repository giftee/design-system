import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Size/Responsive',
};

export const Responsive: Story = {
  render: (_args) => {
    return `
<div style="height: 300px;">
  <div class="ab-border ab-md-w-192 ab-w-40">
    .ab-md-w-192 .ab-w-40
  </div>
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
