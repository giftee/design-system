import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Spacing/VerticalPadding',
};

export const VerticalPadding: Story = {
  render: (_args) => {
    return `
<div style="display:flex; flex-wrap: wrap;">
  <div class="ab-py-4" style="background-color: red">ab-py-4</div>
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
