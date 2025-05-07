import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Spacing/Responsive',
};

export const Responsive: Story = {
  render: (_args) => {
    return `
<div style="display:flex; flex-wrap: wrap;">
  <div style="background-color: blue; height: 100%;">
    <div class="ab-sm-p-2 ab-md-p-4 ab-lg-p-8 ab-xl-p-16 ab-m-1" style="background-color: red">responsive</div>
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
