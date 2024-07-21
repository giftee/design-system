import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/TextOverflow/Type',
};

export const Type: Story = {
  render: (_args) => {
    return `
<div class="ab-m-4">
  <div class="ab-overflow-hidden ab-text-overflow-clip ab-white-space-nowrap ab-border ab-p-4" style="width: 100px">ClipClipClipClip</div>
  <div class="ab-overflow-hidden ab-text-overflow-ellipsis ab-white-space-nowrap ab-border ab-p-4" style="width: 100px">EllipsisEllipsis</div>
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
