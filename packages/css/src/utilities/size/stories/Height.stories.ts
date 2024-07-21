import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Size/Height',
};

export const Height: Story = {
  render: (_args) => {
    return `
<div>
  <p class="ab-text-headline-m">Fixed Height</p>
  <div class="ab-flex">
    <div class="ab-h-16 ab-bg-secondary ab-border">
      .ab-h-16
    </div>
    <div class="ab-h-32 ab-bg-secondary ab-border">
      .ab-h-32
    </div>
    <div class="ab-h-48 ab-bg-secondary ab-border">
      .ab-h-48
    </div>
    <div class="ab-h-80 ab-bg-secondary ab-border">
      .ab-h-80
    </div>
    <div class="ab-h-128 ab-bg-secondary ab-border">
      .ab-h-128
    </div>
    <div class="ab-h-192 ab-bg-secondary ab-border">
      .ab-h-192
    </div>
  </div>
</div>
<div>
  <p class="ab-text-headline-m">Dynamic Height</p>
  <div class="ab-flex" style="height: 300px">
    <div class="ab-h-full ab-bg-secondary ab-border">
      .ab-h-full
    </div>
    <div class="ab-h-screen ab-bg-secondary ab-border">
      .ab-h-screen
    </div>
    <div class="ab-h-min ab-bg-secondary ab-border">
      .ab-h-min
    </div>
    <div class="ab-h-max ab-bg-secondary ab-border">
      .ab-h-max
    </div>
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
