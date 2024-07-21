import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Size/MaxHeight',
};

export const MaxHeight: Story = {
  render: (_args) => {
    return `
<div>
  <p class="ab-text-headline-m">Semantic Height</p>
  <div class="ab-flex" style="height: 300px">
    <div class="ab-h-max-full ab-bg-secondary ab-border">
      .ab-h-max-full
    </div>
    <div class="ab-h-max-min ab-bg-secondary ab-border">
      .ab-h-max-min
    </div>
    <div class="ab-h-max-max ab-bg-secondary ab-border">
      .ab-h-max-max
    </div>
    <div class="ab-h-max-fit ab-bg-secondary ab-border">
      .ab-h-max-fit
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
