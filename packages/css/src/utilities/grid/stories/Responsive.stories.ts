import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Grid/Responsive',
};

export const Responsive: Story = {
  render: (_args) => {
    return `
<div class="ab-grid ab-grid-cols-4 border">
  <div class="ab-sm-col-span-2 ab-bg-rest-secondary ab-border">01 (.ab-sm-col-span-2)</div>
  <div class="ab-md-col-span-3 ab-bg-rest-secondary ab-border">02 (.ab-md-col-span-3)</div>
  <div class="ab-lg-col-span-4 ab-bg-rest-secondary ab-border">03 (.ab-lg-col-span-4)</div>
  <div class="ab-bg-rest-secondary ab-border">04</div>
  <div class="ab-bg-rest-secondary ab-border">05</div>
  <div class="ab-bg-rest-secondary ab-border">06</div>
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
