import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Flexbox/Justify',
};

export const Justify: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-flex-column ab-gap-8">
  <div class="ab-flex ab-flex-justify-start ab-border">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">start item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">start item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">start item 3</div>
  </div>
  <div class="ab-flex ab-flex-justify-end ab-border">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">end item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">end item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">end item 3</div>
  </div>
  <div class="ab-flex ab-flex-justify-center ab-border">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">center item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">center item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">center item 3</div>
  </div>
  <div class="ab-flex ab-flex-justify-between ab-border">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">between item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">between item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">between item 3</div>
  </div>
  <div class="ab-flex ab-flex-justify-around ab-border">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">around item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">around item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">around item 3</div>
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
