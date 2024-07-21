import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Spacing/Margin',
};

export const Margin: Story = {
  render: (_args) => {
    return `
<div style="display:flex; flex-wrap: wrap;">
  <div style="background-color: blue; height: 100%;">
    <div class="ab-m-0 ab-p-1" style="background-color: red">ab-m-0</div>
  </div>
  <div style="background-color: blue; height: 100%;">
    <div class="ab-m-1 ab-p-1" style="background-color: red">ab-m-1</div>
  </div>
  <div style="background-color: blue; height: 100%;">
    <div class="ab-m-2 ab-p-1" style="background-color: red">ab-m-2</div>
  </div>
  <div style="background-color: blue; height: 100%;">
    <div class="ab-m-4 ab-p-1" style="background-color: red">ab-m-4</div>
  </div>
  <div style="background-color: blue; height: 100%;">
    <div class="ab-m-6 ab-p-1" style="background-color: red">ab-m-6</div>
  </div>
  <div style="background-color: blue; height: 100%;">
    <div class="ab-m-8 ab-p-1" style="background-color: red">ab-m-8</div>
  </div>
  <div style="background-color: blue; height: 100%;">
    <div class="ab-m-10 ab-p-1" style="background-color: red">ab-m-10</div>
  </div>
  <div style="background-color: blue; height: 100%;">
    <div class="ab-m-12 ab-p-1" style="background-color: red">ab-m-12</div>
  </div>
  <div style="background-color: blue; height: 100%;">
    <div class="ab-m-16 ab-p-1" style="background-color: red">ab-m-16</div>
  </div>
  <div style="background-color: blue; height: 100%;">
    <div class="ab-m-20 ab-p-1" style="background-color: red">ab-m-20</div>
  </div>
  <div style="background-color: blue; height: 100%;">
    <div class="ab-m-24 ab-p-1" style="background-color: red">ab-m-24</div>
  </div>
  <div style="background-color: blue; height: 100%;">
    <div class="ab-m-30 ab-p-1" style="background-color: red">ab-m-30</div>
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
