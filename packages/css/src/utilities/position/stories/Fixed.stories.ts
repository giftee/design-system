import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Position/Fixed',
};

export const Fixed: Story = {
  render: (_args) => {
    return `
<div>
  <p class="ab-p-20 ab-border ab-bg-secondary">
    通常の block 要素です
  </p>
  <p class="ab-position-fixed ab-p-6 ab-border" style="top: 12px; left: 12px;">
    .ab-position-fixed は absolute と挙動は似ていますが、viewport に対して固定されます。
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
