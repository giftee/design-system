import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Gap/Base',
};

export const Base: Story = {
  render: (_args) => {
    return `
<div class="ab-grid ab-gap-4 ab-grid-cols-2 ab-border">
  <div class="ab-border ab-bg-rest-secondary">01</div>
  <div class="ab-border ab-bg-rest-secondary">02</div>
  <div class="ab-border ab-bg-rest-secondary">03</div>
  <div class="ab-border ab-bg-rest-secondary">04</div>
</div>
<div class="ab-grid ab-gap-x-8 ab-gap-y-4 ab-grid-cols-3 ab-border ab-mt-12">
  <div class="ab-border ab-bg-rest-secondary">01</div>
  <div class="ab-border ab-bg-rest-secondary">02</div>
  <div class="ab-border ab-bg-rest-secondary">03</div>
  <div class="ab-border ab-bg-rest-secondary">04</div>
  <div class="ab-border ab-bg-rest-secondary">05</div>
  <div class="ab-border ab-bg-rest-secondary">06</div>
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
