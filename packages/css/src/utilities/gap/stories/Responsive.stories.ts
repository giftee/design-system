import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Gap/Responsive',
};

export const Responsive: Story = {
  render: (_args) => {
    return `
<div class="ab-grid ab-grid-cols-3 ab-gap-4 ab-sm-gap-8 ab-md-gap-12 ab-lg-gap-16 ab-border">
  <div class="ab-bg-rest-secondary ab-border">01</div>
  <div class="ab-bg-rest-secondary ab-border">02</div>
  <div class="ab-bg-rest-secondary ab-border">03</div>
  <div class="ab-bg-rest-secondary ab-border">04</div>
  <div class="ab-bg-rest-secondary ab-border">05</div>
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
