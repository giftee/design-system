import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Flexbox/Direction',
};

export const Direction: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-flex-column ab-gap-8">
  <div class="ab-flex ab-flex-row ab-border">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">row item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">row item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">row item 3</div>
  </div>
  <div class="ab-flex ab-flex-row-reverse ab-border">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">row-reverse item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">row-reverse item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">row-reverse item 3</div>
  </div>
  <div class="ab-flex ab-flex-column ab-border">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">column item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">column item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">column item 3</div>
  </div>
  <div class="ab-flex ab-flex-column-reverse ab-border">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">column-reverse item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">column-reverse item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">column-reverse item 3</div>
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
