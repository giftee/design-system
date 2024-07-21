import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Color/Background',
};

export const Background: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-flex-column ab-gap-8">
  <div class="ab-bg-base-primary">
    <h1 class="ab-text-headline-l">Primary（廃止予定）</h1>
  </div>

  <div class="ab-bg-base-secondary">
    <h1 class="ab-text-headline-l">Secondary（廃止予定）</h1>
  </div>

  <div class="ab-bg-disabled">
    <h1 class="ab-text-headline-l">Disabled</h1>
  </div>

  <div class="ab-bg-base-accent">
    <h1 class="ab-text-headline-l">Accent（廃止予定）</h1>
  </div>

  <div class="ab-bg-base">
    <h1 class="ab-text-headline-l">Base</h1>
  </div>

  <div class="ab-bg-rest-primary">
    <h1 class="ab-text-headline-l">Rest Primary</h1>
  </div>

  <div class="ab-bg-rest-secondary">
    <h1 class="ab-text-headline-l">Rest Secondary</h1>
  </div>

  <div class="ab-bg-rest-accent">
    <h1 class="ab-text-headline-l">Rest Accent</h1>
  </div>
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
