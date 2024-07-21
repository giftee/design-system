import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Size/MinWidth',
};

export const MinWidth: Story = {
  render: (_args) => {
    return `
<div>
  <p class="ab-text-headline-m">Min Width</p>
  <div class="ab-min-w-full ab-bg-secondary ab-border">
    .ab-min-w-full(min-width: 100%;)
  </div>
  <div class="ab-min-w-screen ab-bg-secondary ab-border">
    .ab-min-w-screen(min-width: 100vw;)
  </div>
  <div class="ab-min-w-min ab-bg-secondary ab-border">
    .ab-min-w-min(min-width: min-content;)
  </div>
  <div class="ab-min-w-max ab-bg-secondary ab-border">
    .ab-min-w-max(min-width: max-content;)
  </div>
  <div class="ab-min-w-fit ab-bg-secondary ab-border">
    .ab-min-w-fit(min-width: fit-content;)
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
