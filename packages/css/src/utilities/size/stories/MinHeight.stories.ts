import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Size/MinHeight',
};

export const MinHeight: Story = {
  render: (_args) => {
    return `
<div>
  <p class="ab-text-headline-m">Min Height</p>
  <div class="ab-flex" style="height: 300px">
    <div class="ab-min-h-full ab-bg-secondary ab-border">
      .ab-min-h-full(min-height: 100%;)
    </div>
    <div class="ab-min-h-screen ab-bg-secondary ab-border">
      .ab-min-h-screen(min-height: 100vh;)
    </div>
    <div class="ab-min-h-min ab-bg-secondary ab-border">
      .ab-min-h-min(min-height: min-content;)
    </div>
    <div class="ab-min-h-max ab-bg-secondary ab-border">
      .ab-min-h-max(min-height: max-content;)
    </div>
    <div class="ab-min-h-fit ab-bg-secondary ab-border">
      .ab-min-h-fit(min-height: fit-content;)
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
