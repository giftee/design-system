import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Cursor/Type',
};

export const Type: Story = {
  render: (_args) => {
    return `
<div>
  <h1 class="ab-text-headline-l ab-cursor-auto">Auto</h1>
  <h1 class="ab-text-headline-l ab-cursor-default">Default</h1>
  <h1 class="ab-text-headline-l ab-cursor-pointer">Pointer</h1>
</div>
`;
  },
  args: {},
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
