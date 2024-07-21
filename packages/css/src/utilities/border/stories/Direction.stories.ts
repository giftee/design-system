import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Border/Direction',
};

export const Direction: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-gap-8">
  <div class="ab-border-t">Top</div>
  <div class="ab-border-r">Right</div>
  <div class="ab-border-b">Bottom</div>
  <div class="ab-border-l">Left</div>
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
