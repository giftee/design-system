import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Justify/Responsive',
};

export const Responsive: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-flex-justify-start ab-sm-flex-justify-end ab-md-flex-justify-center ab-border">
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">start item 1</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">start item 2</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">start item 3</div>
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
