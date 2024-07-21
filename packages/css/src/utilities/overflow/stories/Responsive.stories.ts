import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Overflow/Responsive',
};

export const Responsive: Story = {
  render: (_args) => {
    return `
<div class="ab-m-4">
  Overflow Responsive
  <div class="ab-overflow-visible ab-md-overflow-hidden ab-border ab-p-4" style="width: 100px">visibletohidden</div>
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
