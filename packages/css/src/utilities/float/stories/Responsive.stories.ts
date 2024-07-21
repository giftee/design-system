import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Float/Responsive',
};

export const Responsive: Story = {
  render: (_args) => {
    return `
<div class="ab-border">
  <div class="ab-sm-float-right ab-border">.ab-sm-float-right</div>
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
