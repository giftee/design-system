import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Color/Text',
};

export const Text: Story = {
  render: (_args) => {
    return `
<div class="ab-bg-rest-secondary">
  <h1 class="ab-text-default ab-text-headline-l">Default</h1>
  <h1 class="ab-text-secondary ab-text-headline-l">Secondary</h1>
  <h1 class="ab-text-brand ab-text-headline-l">Brand</h1>
  <h1 class="ab-text-brand-secondary ab-text-headline-l">BrandSecondary</h1>
  <h1 class="ab-text-contrast ab-text-headline-l">Contrast</h1>
  <h1 class="ab-text-info ab-text-headline-l">Info</h1>
  <h1 class="ab-text-notice ab-text-headline-l">Notice</h1>
  <h1 class="ab-text-positive ab-text-headline-l">Positive</h1>
  <h1 class="ab-text-negative ab-text-headline-l">Negative</h1>
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
