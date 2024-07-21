import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Position/Relative',
};

export const Relative: Story = {
  render: (_args) => {
    return `
<div>
  <p class="ab-p-6 ab-border ab-bg-secondary">
    通常の block 要素です
  </p>
  <p class="ab-position-relative ab-p-6 ab-border" style="top: 12px; left: 12px;">
    .ab-position-relative が適用されると、通常要素の挙動に加えて、position を設定できます。
  </p>
  <p class="ab-p-6 ab-border ab-bg-secondary">
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
