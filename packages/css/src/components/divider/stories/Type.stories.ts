import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Divider/Type',
};

export const Type: Story = {
  render: (args) => {
    return `
<div class="ab-mb-8">
  ${createComponent({ ...args, type: 'horizontal' })}
</div>
<div class="ab-mb-8">
<div style="display: flex">
  <button class="ab-IconButton ab-mr-8">X</button>
  ${createComponent({ ...args, type: 'vertical' })}
  <button class="ab-IconButton ab-ml-8">X</button>
</div>
  `;
  },
  args: {
    type: 'horizontal',
    size: 'small',
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
