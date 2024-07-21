import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Grid/GridTemplateColumns',
};

export const GridTemplateColumns: Story = {
  render: (_args) => {
    return `
<div class="ab-grid ab-grid-cols-4 ab-gap-4 ab-border">
  <div class="ab-border ab-bg-rest-secondary">01</div>
  <div class="ab-border ab-bg-rest-secondary">02</div>
  <div class="ab-border ab-bg-rest-secondary">03</div>
  <div class="ab-border ab-bg-rest-secondary">04</div>
  <div class="ab-border ab-bg-rest-secondary">05</div>
  <div class="ab-border ab-bg-rest-secondary">06</div>
  <div class="ab-border ab-bg-rest-secondary">07</div>
  <div class="ab-border ab-bg-rest-secondary">08</div>
  <div class="ab-border ab-bg-rest-secondary">09</div>
</div>
<div class="ab-grid ab-grid-cols-none ab-gap-4 ab-border ab-mt-12">
  <div class="ab-border ab-bg-rest-secondary">01</div>
  <div class="ab-border ab-bg-rest-secondary">02</div>
  <div class="ab-border ab-bg-rest-secondary">03</div>
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
