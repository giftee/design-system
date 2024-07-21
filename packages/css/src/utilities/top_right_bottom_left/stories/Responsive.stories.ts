import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/TopRightBottomLeft/Responsive',
};

export const Responsive: Story = {
  render: (_args) => {
    return `
<div class="ab-position-relative" style="height: 100px;">
  <div class="ab-position-absolute ab-top-0 ab-right-0 ab-md-right-auto ab-border">
    Auto（.ab-top-0 .ab-right-0 .ab-md-right-auto）
  </div>
</div>
<div class="ab-position-relative" style="height: 200px;">
  <div class="ab-position-absolute ab-top-0 ab-left-0 ab-md-left-auto ab-md-right-0 ab-border">
    レスポンシブ（.ab-bottom-0 .ab-left-0 .ab-md-left-auto）
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
