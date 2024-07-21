import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Grid/GridColumn',
};

export const GridColumn: Story = {
  render: (_args) => {
    return `
<div class="ab-grid ab-grid-cols-3 ab-gap-4 ab-border">
  <div class="ab-border ab-bg-rest-secondary">01</div>
  <div class="ab-border ab-bg-rest-secondary">02</div>
  <div class="ab-border ab-bg-rest-secondary">03</div>
  <div class="ab-col-span-2 ab-border ab-bg-rest-secondary">04</div>
  <div class="ab-border ab-bg-rest-secondary">05</div>
  <div class="ab-border ab-bg-rest-secondary">06</div>
  <div class="ab-col-span-2 ab-border ab-bg-rest-secondary">07</div>
</div>
<div class="ab-grid ab-grid-cols-6 ab-gap-4 ab-border ab-mt-12">
  <div class="ab-col-start-2 ab-col-span-4 ab-border ab-bg-rest-secondary">01</div>
  <div class="ab-col-start-1 ab-col-end-3 ab-border ab-bg-rest-secondary">02</div>
  <div class="ab-col-end-7 ab-col-span-2 ab-border ab-bg-rest-secondary">03</div>
  <div class="ab-col-start-1 ab-col-end-7 ab-border ab-bg-rest-secondary">04</div>
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
