import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Size/Width',
};

export const Width: Story = {
  render: (_args) => {
    return `
<div>
  <p class="ab-text-headline-m">Fixed Width</p>
  <div class="ab-w-16 ab-bg-secondary ab-border">
    .ab-w-16
  </div>
  <div class="ab-w-32 ab-bg-secondary ab-border">
    .ab-w-32
  </div>
  <div class="ab-w-48 ab-bg-secondary ab-border">
    .ab-w-48
  </div>
  <div class="ab-w-80 ab-bg-secondary ab-border">
    .ab-w-80
  </div>
  <div class="ab-w-128 ab-bg-secondary ab-border">
    .ab-w-128
  </div>
  <div class="ab-w-192 ab-bg-secondary ab-border">
    .ab-w-192
  </div>
</div>
<div>
  <p class="ab-text-headline-m">Dynamic Width</p>
  <div class="ab-w-full ab-bg-secondary ab-border">
    .ab-w-full
  </div>
  <div class="ab-w-screen ab-bg-secondary ab-border">
    .ab-w-screen
  </div>
  <div class="ab-w-min ab-bg-secondary ab-border">
    .ab-w-min
  </div>
  <div class="ab-w-max ab-bg-secondary ab-border">
    .ab-w-max
  </div>
</div>
<div>
  <p class="ab-text-headline-m">Responsive Width</p>
  <div class="ab-w-48 ab-md-w-128 ab-bg-secondary ab-border">
    .ab-w-48 ab-md-w-128
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
