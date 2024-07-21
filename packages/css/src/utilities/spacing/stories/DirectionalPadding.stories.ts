import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Spacing/DirectionalPadding',
};

export const DirectionalPadding: Story = {
  render: (_args) => {
    return `
<div style="display:flex; flex-wrap: wrap;">
  <div class="ab-pt-4 ab-m-1" style="background-color: red">ab-pt-4</div>
  <div class="ab-pr-4 ab-m-1" style="background-color: red">ab-pr-4</div>
  <div class="ab-pb-4 ab-m-1" style="background-color: red">ab-pb-4</div>
  <div class="ab-pl-4 ab-m-1" style="background-color: red">ab-pl-4</div>
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
