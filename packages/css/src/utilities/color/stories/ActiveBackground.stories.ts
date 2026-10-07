import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Color/ActiveBackground',
};

export const ActiveBackground: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-flex-column ab-gap-8">
  <div class="ab-flex ab-flex-column ab-gap-2">
    <p class="ab-text-body-s ab-text-secondary">ab-active-bg-on-neutral</p>
    <div class="ab-flex ab-gap-4">
      <div class="ab-bg-rest-primary ab-active-bg-on-neutral ab-p-4 ab-border">
        <h1 class="ab-text-headline-l">Default</h1>
      </div>
      <div id="active-on-neutral" class="ab-bg-rest-primary ab-active-bg-on-neutral ab-p-4 ab-border">
        <h1 class="ab-text-headline-l">Active</h1>
      </div>
    </div>
  </div>
</div>
`;
  },
  args: {},
  parameters: {
    pseudo: {
      active: '#active-on-neutral',
    },
  },
};
