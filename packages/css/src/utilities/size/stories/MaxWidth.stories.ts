import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Size/MaxWidth',
};

export const MaxWidth: Story = {
  render: (_args) => {
    return `
<div>
  <p class="ab-text-headline-m">Max Width</p>
  <div class="ab-max-w-full ab-bg-secondary ab-border">
    .ab-max-w-full(max-width: 100%;)
  </div>
  <div class="ab-max-w-min ab-bg-secondary ab-border">
    .ab-max-w-min(max-width: min-content;)
  </div>
  <div class="ab-max-w-max ab-bg-secondary ab-border">
    .ab-max-w-max(max-width: max-content;)
  </div>
  <div class="ab-max-w-fit ab-bg-secondary ab-border">
    .ab-max-w-fit(max-width: fit-content;)
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
