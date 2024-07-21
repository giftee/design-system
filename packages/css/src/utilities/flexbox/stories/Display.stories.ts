import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Flexbox/Display',
};

export const Display: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-border">
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">flex item 1</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">flex item 2</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">flex item 3</div>
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
