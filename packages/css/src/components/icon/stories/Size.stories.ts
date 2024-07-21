import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Icon/Size',
};

export const Size: Story = {
  render: (args) => {
    return `
<div class="ab-flex ab-flex-column ab-gap-8">
  ${createComponent({ ...args, size: 'xxsmall' })}
  ${createComponent({ ...args, size: 'xsmall' })}
  ${createComponent({ ...args, size: 'small' })}
  ${createComponent({ ...args, size: 'medium' })}
</div>
  `;
  },
  args: {
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
