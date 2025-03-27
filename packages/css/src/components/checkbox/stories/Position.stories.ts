import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Checkbox/Position',
};

export const Position: Story = {
  render: (args) => {
    return `
${createComponent({
  ...args,
  position: 'top',
  children: 'Top',
  name: 'top',
})}
${createComponent({
  ...args,
  position: 'right',
  children: 'Right',
  name: 'right',
})}
${createComponent({
  ...args,
  position: 'bottom',
  children: 'Bottom',
  name: 'bottom',
})}
${createComponent({
  ...args,
  position: 'left',
  children: 'Left',
  name: 'left',
})}
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
