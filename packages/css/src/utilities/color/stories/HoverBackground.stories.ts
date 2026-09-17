import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Color/HoverBackground',
};

export const HoverBackground: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-flex-column ab-gap-8">
  <div class="ab-flex ab-flex-column ab-gap-2">
    <p class="ab-text-body-s ab-text-secondary">ab-hover-bg-on-neutral</p>
    <div class="ab-flex ab-gap-4">
      <div class="ab-bg-rest-primary ab-hover-bg-on-neutral ab-p-4 ab-border">
        <h1 class="ab-text-headline-l">Default</h1>
      </div>
      <div id="hover-on-neutral" class="ab-bg-rest-primary ab-hover-bg-on-neutral ab-p-4 ab-border">
        <h1 class="ab-text-headline-l">Hover</h1>
      </div>
    </div>
  </div>

  <div class="ab-flex ab-flex-column ab-gap-2">
    <p class="ab-text-body-s ab-text-secondary">ab-hover-bg-on-brand</p>
    <div class="ab-flex ab-gap-4">
      <div class="ab-bg-rest-primary ab-hover-bg-on-brand ab-p-4 ab-border">
        <h1 class="ab-text-headline-l">Default</h1>
      </div>
      <div id="hover-on-brand" class="ab-bg-rest-primary ab-hover-bg-on-brand ab-p-4 ab-border">
        <h1 class="ab-text-headline-l ab-text-contrast">Hover</h1>
      </div>
    </div>
  </div>

  <div class="ab-flex ab-flex-column ab-gap-2">
    <p class="ab-text-body-s ab-text-secondary">ab-hover-bg-on-negative</p>
    <div class="ab-flex ab-gap-4">
      <div class="ab-bg-rest-primary ab-hover-bg-on-negative ab-p-4 ab-border">
        <h1 class="ab-text-headline-l">Default</h1>
      </div>
      <div id="hover-on-negative" class="ab-bg-rest-primary ab-hover-bg-on-negative ab-p-4 ab-border">
        <h1 class="ab-text-headline-l">Hover</h1>
      </div>
    </div>
  </div>
</div>
`;
  },
  args: {},
  parameters: {
    pseudo: {
      hover: ['#hover-on-neutral', '#hover-on-brand', '#hover-on-negative'],
    },
  },
};
