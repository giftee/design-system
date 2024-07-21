import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Badge/Type',
};

export const Type: Story = {
  render: (args) => {
    return `
<div class="ab-m-4">
  ${createComponent({ ...args, type: 'basic', text: '1' })}
</div>
<div class="ab-m-4">
  ${createComponent({ ...args, type: 'basic', text: '9+' })}
</div>
<div class="ab-m-4">
  ${createComponent({ ...args, type: 'dot' })}
</div>
  `;
  },
  args: {
    type: 'basic',
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
