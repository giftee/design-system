import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Switch/Position',
};

export const Position: Story = {
  render: (args) => {
    return `
  <div class="ab-m-2 ab-p-2" style="display: inline-block; border: 1px solid #d5dde2">
  ${createComponent({
    ...args,
    position: 'top',
    children: 'Top',
  })}
  </div>

  <div class="ab-m-2 ab-p-2" style="display: inline-block; border: 1px solid #d5dde2">
  ${createComponent({
    ...args,
    position: 'right',
    children: 'Right',
  })}
  </div>

  <div class="ab-m-2 ab-p-2" style="display: inline-block; border: 1px solid #d5dde2">
  ${createComponent({
    ...args,
    position: 'bottom',
    children: 'Bottom',
  })}
  </div>

  <div class="ab-m-2 ab-p-2" style="display: inline-block; border: 1px solid #d5dde2">
  ${createComponent({
    ...args,
    position: 'left',
    children: 'Left',
  })}
  </div>
  `;
  },
  args: {
    checked: false,
    position: 'right',
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
