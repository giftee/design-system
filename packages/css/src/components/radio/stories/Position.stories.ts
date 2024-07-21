import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Radio/Position',
};

export const Position: Story = {
  render: (args) => {
    return `
<div class="ab-m-4">
  ${createComponent({
    ...args,
    position: 'top',
    children: 'Top',
  })}
  ${createComponent({
    ...args,
    position: 'right',
    children: 'Right',
  })}
  ${createComponent({
    ...args,
    position: 'bottom',
    children: 'Bottom',
  })}
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
