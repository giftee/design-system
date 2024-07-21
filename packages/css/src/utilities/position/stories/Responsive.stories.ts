import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Position/Responsive',
};

export const Responsive: Story = {
  render: (_args) => {
    return `
<div style="height: 64px;">
  <div class="ab-border ab-md-position-absolute ab-top-0 ab-right-0">
    .ab-md-position-absolute .ab-top-0 .ab-right-0
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
