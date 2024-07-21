import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Position/Absolute',
};

export const Absolute: Story = {
  render: (_args) => {
    return `
<div class="ab-position-relative">
  <p class="ab-p-20 ab-border ab-bg-secondary">
    通常の block 要素です
  </p>
  <p class="ab-position-absolute ab-p-6 ab-border" style="top: 12px; left: 12px;">
    .ab-position-absolute は直近の relative 要素に対して絶対位置で配置されます。
  </p>
  <p class="ab-p-20 ab-border ab-bg-secondary">
    通常の block 要素です
  </p>
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
