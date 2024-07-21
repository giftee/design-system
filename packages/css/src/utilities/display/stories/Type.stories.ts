import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Display/Type',
};

export const Type: Story = {
  render: (_args) => {
    return `
<div class="ab-inline ab-border">
  .ab-inline
  <div class="ab-inline-block ab-border">.ab-inline-block</div>
  <span class="ab-block ab-border">.ab-block</span>
  <div class="ab-table ab-border">
    <div class="ab-table-cell ab-border">.ab-table-cell</div>
  </div>
  <div class="ab-table-cell ab-border">.ab-table-cell</div>
  <div class="ab-none">.ab-none</div>
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
