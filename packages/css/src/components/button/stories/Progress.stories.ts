import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Button/Progress',
};

export const Progress: Story = {
  render: (args) => {
    return `
<div class="ab-mb-4 ab-flex">
  ${createComponent({ ...args, id: 'disabled', size: 'xsmall', children: '<div class="ab-CircularProgress ab-CircularProgress-xsmall ab-CircularProgress-disabled"></div>' })}
  ${createComponent({ ...args, id: 'disabled', size: 'small', children: '<div class="ab-CircularProgress ab-CircularProgress-small ab-CircularProgress-disabled"></div>' })}
  ${createComponent({ ...args, id: 'disabled', size: 'large', children: '<div class="ab-CircularProgress ab-CircularProgress-large ab-CircularProgress-disabled"></div>' })}
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
