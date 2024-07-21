import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Divider/Size',
};

export const Size: Story = {
  render: (args) => {
    return `
<div class="ab-flex ab-flex-column ab-gap-8">
  ${createComponent({ ...args, size: 'small' })}
  ${createComponent({ ...args, size: 'medium' })}
  ${createComponent({ ...args, size: 'large' })}
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
