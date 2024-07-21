import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Overflow/Type',
};

export const Type: Story = {
  render: (_args) => {
    return `
<div class="ab-m-4">
  Overflow
  <div class="ab-overflow-visible ab-border ab-p-4" style="width: 100px">VisibleVisible</div>
  <div class="ab-overflow-hidden ab-border ab-p-4" style="width: 100px">HiddenHidden</div>
  <div class="ab-overflow-auto ab-border ab-p-4" style="width: 100px">AutoAutoAuto</div>
  <div class="ab-overflow-scroll ab-border ab-p-4" style="width: 100px">ScrollScroll</div>
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
