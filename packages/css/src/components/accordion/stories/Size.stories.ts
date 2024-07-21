import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Accordion/Size',
};

export const Size: Story = {
  render: (args) => {
    return `
<div class="ab-m-12">
  ${createComponent({ ...args, size: 'small', summary: 'Small' })}
</div>
<div class="ab-m-12">
  ${createComponent({ ...args, size: 'medium', summary: 'Medium(Default)' })}
</div>
  `;
  },
  args: {
    size: 'medium',
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focusVisible: '#focus',
    },
  },
};
