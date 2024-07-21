import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Grid/GridAutoFlow',
};

export const GridAutoFlow: Story = {
  render: (_args) => {
    return `
<div class="ab-grid ab-grid-flow-row-dense ab-grid-cols-3 ab-grid-rows-3 ab-gap-4 ab-border">
  <div class="ab-col-span-2 ab-border ab-bg-rest-secondary">01</div>
  <div class="ab-col-span-2 ab-border ab-bg-rest-secondary">02</div>
  <div class="ab-border ab-bg-rest-secondary">03</div>
  <div class="ab-border ab-bg-rest-secondary">04</div>
  <div class="ab-border ab-bg-rest-secondary">05</div>
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
