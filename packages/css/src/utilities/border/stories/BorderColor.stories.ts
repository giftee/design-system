import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Border/BorderColor',
};

export const BorderColor: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-flex-column ab-gap-8">
  <div class="ab-border ab-border-color-brand">Brand</div>
  <div class="ab-border ab-border-color-default">Default</div>
  <div class="ab-border ab-border-color-strong">Strong</div>
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
