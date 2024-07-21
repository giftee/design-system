import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Typography/FontWeight',
};

export const FontWeight: Story = {
  render: (_args) => {
    return `
<h1 class="ab-text-headline-l ab-font-bold">Bold</h1>
<h1 class="ab-text-headline-l ab-font-normal">Normal</h1>
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
