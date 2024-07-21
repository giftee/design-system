import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Overflow/XY',
};

export const XY: Story = {
  render: (_args) => {
    return `
<div class="ab-m-4">
  Overflow-x
  <div class="ab-overflow-x-visible ab-border ab-p-4" style="width: 100px">VisibleVisible</div>
  <div class="ab-overflow-x-hidden ab-border ab-p-4" style="width: 100px">HiddenHidden</div>
  <div class="ab-overflow-x-auto ab-border ab-p-4" style="width: 100px">AutoAutoAuto</div>
  <div class="ab-overflow-x-scroll ab-border ab-p-4" style="width: 100px">ScrollScroll</div>
</div>
<div class="ab-m-4">
  Overflow-y
  <div class="ab-overflow-y-visible ab-border ab-p-4" style="height: 80px">
    <p>Visible</p>
    <p>Visible</p>
    <p>Visible</p>
    <p>Visible</p>
  </div>
  <div class="ab-overflow-y-hidden ab-border ab-p-4" style="height: 80px">
    <p>Hidden</p>
    <p>Hidden</p>
    <p>Hidden</p>
    <p>Hidden</p>
  </div>
  <div class="ab-overflow-y-auto ab-border ab-p-4" style="height: 80px">
    <p>Auto</p>
    <p>Auto</p>
    <p>Auto</p>
    <p>Auto</p>
  </div>
  <div class="ab-overflow-y-scroll ab-border ab-p-4" style="height: 80px">
    <p>Scroll</p>
    <p>Scroll</p>
    <p>Scroll</p>
    <p>Scroll</p>
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
