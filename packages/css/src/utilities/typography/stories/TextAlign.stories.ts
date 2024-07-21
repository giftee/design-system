import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Typography/TextAlign',
};

export const TextAlign: Story = {
  render: (_args) => {
    return `
<div>
  <p class="ab-text-left">Left align</p>
  <p class="ab-text-center">Center</p>
  <p class="ab-text-right">Right align</p>
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
