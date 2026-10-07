import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Outline/FocusVisibleOutline',
};

export const FocusVisibleOutline: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-flex-column ab-gap-8">
  <div class="ab-flex ab-flex-column ab-gap-2">
    <p class="ab-text-body-s ab-text-secondary">ab-focus-visible-outline-brand</p>
    <div class="ab-flex ab-gap-4">
      <a href="#" class="ab-bg-rest-primary ab-focus-visible-outline-brand ab-p-4 ab-border">
        <h1 class="ab-text-headline-l">Default</h1>
      </a>
      <a id="focus-visible-brand" href="#" class="ab-bg-rest-primary ab-focus-visible-outline-brand ab-p-4 ab-border">
        <h1 class="ab-text-headline-l">Focus Visible</h1>
      </a>
    </div>
  </div>
</div>
`;
  },
  args: {},
  parameters: {
    pseudo: {
      focusVisible: '#focus-visible-brand',
    },
  },
};
