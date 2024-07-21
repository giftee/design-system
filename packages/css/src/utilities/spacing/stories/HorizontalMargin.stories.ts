import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Spacing/HorizontalMargin',
};

export const HorizontalMargin: Story = {
  render: (_args) => {
    return `
<div style="display:flex; flex-wrap: wrap;">
  <div style="background-color: blue; height: 100%;">
    <div class="ab-mx-4 ab-p-1" style="background-color: red">ab-mx-4</div>
  </div>
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
