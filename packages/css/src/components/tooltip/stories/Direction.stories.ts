import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Tooltip/Direction',
};

export const Size: Story = {
  render: (_args) => {
    return `
<div class="ab-m-20">
  <span class="ab-Tooltip ab-Tooltip-top">
    Top
    <span class="ab-Tooltip-description">
      ¥1,000
    </span>
  </span>
</div>
<div class="ab-m-20">
  <span class="ab-Tooltip ab-Tooltip-right">
    Right（長い文章）
    <span class="ab-Tooltip-description">
      長い文章の場合折り返されるようになっております。
    </span>
  </span>
</div>
<div class="ab-m-20">
  <span class="ab-Tooltip ab-Tooltip-bottom">
    Bottom
    <span class="ab-Tooltip-description">
      Bottom
    </span>
  </span>
</div>
<div class="ab-m-20">
  <span class="ab-Tooltip ab-Tooltip-left">
    Left
    <span class="ab-Tooltip-description">
      Left
    </span>
  </span>
</div>
  `;
  },
  args: {
    position: 'top',
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
