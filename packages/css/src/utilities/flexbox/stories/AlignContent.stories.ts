import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Flexbox/AlignContent',
};

export const AlignContent: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-flex-column ab-gap-8">
  <div class="ab-flex ab-flex-wrap ab-flex-content-start ab-border ab-h-80">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">start item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">start item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">start item 3</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">start item 4</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">start item 5</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">start item 6</div>
  </div>
  <div class="ab-flex ab-flex-wrap ab-flex-content-end ab-border ab-h-80">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">end item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">end item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">end item 3</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">end item 4</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">end item 5</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">end item 6</div>
  </div>
  <div class="ab-flex ab-flex-wrap ab-flex-content-center ab-border ab-h-80">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">center item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">center item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">center item 3</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">center item 4</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">center item 5</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">center item 6</div>
  </div>
  <div class="ab-flex ab-flex-wrap ab-flex-content-between ab-border ab-h-80">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">between item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">between item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">between item 3</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">between item 4</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">between item 5</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">between item 6</div>
  </div>
  <div class="ab-flex ab-flex-wrap ab-flex-content-around ab-border ab-h-80">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">around item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">around item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">around item 3</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">around item 4</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">around item 5</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">around item 6</div>
  </div>
  <div class="ab-flex ab-flex-wrap ab-flex-content-stretch ab-border ab-h-80">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">stretch item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">stretch item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">stretch item 3</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">stretch item 4</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">stretch item 5</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">stretch item 6</div>
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
