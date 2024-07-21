import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Grid/GridRow',
};

export const GridRow: Story = {
  render: (_args) => {
    return `
<div class="ab-grid ab-grid-rows-3 ab-grid-flow-col ab-gap-4 ab-border">
  <div class="ab-row-span-3 ab-border ab-bg-rest-secondary">01</div>
  <div class="ab-col-span-2 ab-border ab-bg-rest-secondary">02</div>
  <div class="ab-row-span-2 ab-col-span-2 ab-border ab-bg-rest-secondary">03</div>
</div>
<div class="ab-grid ab-grid-rows-3 ab-grid-flow-col ab-gap-4 ab-border ab-mt-12">
  <div class="ab-row-start-2 ab-row-span-2 ab-border ab-bg-rest-secondary">01</div>
  <div class="ab-row-end-3 ab-row-span-2 ab-border ab-bg-rest-secondary">02</div>
  <div class="ab-row-start-1 ab-row-end-4 ab-border ab-bg-rest-secondary">03</div>
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
