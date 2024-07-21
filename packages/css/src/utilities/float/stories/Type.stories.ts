import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Float/Type',
};

export const Type: Story = {
  render: (_args) => {
    return `
<div class="ab-border">
  <div class="ab-float-none ab-border">.ab-float-none</div>
  <div class="ab-float-left ab-border">.ab-float-left</div>
  <div class="ab-float-right ab-border">.ab-float-right</div>
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
