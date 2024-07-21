import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Spacing/Padding',
};

export const Padding: Story = {
  render: (_args) => {
    return `
<div style="display:flex; flex-wrap: wrap;">
  <div class="ab-m-1">
    <div class="ab-p-0" style="background-color: red">ab-p-0</div>
  </div>
  <div class="ab-m-1">
    <div class="ab-p-1" style="background-color: red">ab-p-1</div>
  </div>
  <div class="ab-m-1">
    <div class="ab-p-2" style="background-color: red">ab-p-2</div>
  </div>
  <div class="ab-m-1">
    <div class="ab-p-4" style="background-color: red">ab-p-4</div>
  </div>
  <div class="ab-m-1">
    <div class="ab-p-6" style="background-color: red">ab-p-6</div>
  </div>
  <div class="ab-m-1">
    <div class="ab-p-8" style="background-color: red">ab-p-8</div>
  </div>
  <div class="ab-m-1">
    <div class="ab-p-10" style="background-color: red">ab-p-10</div>
  </div>
  <div class="ab-m-1">
    <div class="ab-p-12" style="background-color: red">ab-p-12</div>
  </div>
  <div class="ab-m-1">
    <div class="ab-p-16" style="background-color: red">ab-p-16</div>
  </div>
  <div class="ab-m-1">
    <div class="ab-p-20" style="background-color: red">ab-p-20</div>
  </div>
  <div class="ab-m-1">
    <div class="ab-p-24" style="background-color: red">ab-p-24</div>
  </div>
  <div class="ab-m-1">
    <div class="ab-p-30" style="background-color: red">ab-p-30</div>
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
