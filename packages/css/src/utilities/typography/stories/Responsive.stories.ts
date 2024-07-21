import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Typography/Responsive',
};

export const Responsive: Story = {
  render: (_args) => {
    return `
<div>
  <p class="ab-text-left ab-md-text-right">.ab-text-left ab-md-text-right</p>
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
