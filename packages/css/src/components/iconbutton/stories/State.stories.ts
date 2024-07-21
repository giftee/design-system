import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/IconButton/State',
};

export const State: Story = {
  render: (args) => {
    return `
<div class="ab-flex ab-flex-column">
  ${createComponent({ ...args, id: 'default' })}Default
  ${createComponent({ ...args, id: 'hover' })}Hover
  ${createComponent({ ...args, id: 'focus' })}Focus
  ${createComponent({ ...args, id: 'active' })}Active
  ${createComponent({ ...args, id: 'disabled' })}Disabled
</div>
  `;
  },
  args: {
    type: 'default',
    size: 'small',
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focusVisible: '#focus',
    },
  },
};
