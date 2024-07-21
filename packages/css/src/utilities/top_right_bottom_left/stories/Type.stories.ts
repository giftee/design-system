import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/TopRightBottomLeft/Type',
};

export const Type: Story = {
  render: (_args) => {
    return `
<div style="height: 64px;">
  <div class="ab-position-absolute ab-top-0 ab-left-0 ab-border">
    .ab-top-0 .ab-left-0
  </div>
  <div class="ab-position-absolute ab-top-0 ab-right-0 ab-border">
    .ab-top-0 .ab-right-0
  </div>
  <div class="ab-position-absolute ab-bottom-0 ab-right-0 ab-border">
    .ab-bottom-0 .ab-right-0
  </div>
  <div class="ab-position-absolute ab-bottom-0 ab-left-0 ab-border">
    .ab-bottom-0 .ab-left-0
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
