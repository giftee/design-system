import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Spacing/MarginAuto',
};

export const MarginAuto: Story = {
  render: (_args) => {
    return `
<div class="ab-bg-secondary">
  <div class="ab-mx-auto ab-bg-tertiary" style="max-width: 500px; text-align: center">
    .ab-mx-auto
  </div>
</div>
<div>
  <div class="ab-flex ab-border ab-mb-4">
    <div style="height: 100px;"></div>
    <div class="ab-border ab-mt-auto">
      .ab-mt-auto will push this box to the bottom.
    </div>
    <div class="ab-border ab-mb-auto">.ab-mb-auto will push this box to the top.</div>
  </div>
  <div class="ab-flex ab-flex-column ab-border">
    <div class="ab-border ab-ml-auto">.ab-ml-auto will push this box to the right.</div>
    <div class="ab-border ab-mr-auto">.ab-mr-auto will push this box to the left.</div>
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
