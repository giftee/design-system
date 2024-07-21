import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Spacing/DirectionalMargin',
};

export const DirectionalMargin: Story = {
  render: (_args) => {
    return `
<div style="display:flex; flex-wrap: wrap;">
  <div style="background-color: blue; height: 100%;">
    <div class="ab-mt-4 ab-p-1" style="background-color: red">ab-mt-4</div>
    <div class="ab-mr-4 ab-p-1" style="background-color: red">ab-mr-4</div>
    <div class="ab-mb-4 ab-p-1" style="background-color: red">ab-mb-4</div>
    <div class="ab-ml-4 ab-p-1" style="background-color: red">ab-ml-4</div>
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
