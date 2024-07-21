import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Align/AlignItems',
};

export const AlignItems: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-flex-column ab-gap-8">
  <div class="ab-flex ab-items-start ab-border ab-h-80">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">start item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">start item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">start item 3</div>
  </div>
  <div class="ab-flex ab-items-end ab-border ab-h-80">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">end item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">end item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">end item 3</div>
  </div>
  <div class="ab-flex ab-items-center ab-border ab-h-80">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">center item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">center item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">center item 3</div>
  </div>
  <div class="ab-flex ab-items-baseline ab-border ab-h-80">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">baseline item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">baseline item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">baseline item 3</div>
  </div>
  <div class="ab-flex ab-items-stretch ab-border ab-h-80">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">stretch item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">stretch item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">stretch item 3</div>
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
