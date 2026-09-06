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
  <div class="ab-border ab-border-color-bold">Bold</div>
  <div class="ab-border ab-border-color-light">Light</div>
  <div class="ab-border ab-border-color-info">Info</div>
  <div class="ab-border ab-border-color-notice">Notice</div>
  <div class="ab-border ab-border-color-positive">Positive</div>
  <div class="ab-border ab-border-color-negative">Negative</div>
  <div class="ab-border ab-border-color-neutral">Neutral</div>
  <div class="ab-border ab-border-color-disable">Disable</div>
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
