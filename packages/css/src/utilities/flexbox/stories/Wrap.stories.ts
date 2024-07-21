import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Flexbox/Wrap',
};

export const Wrap: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-flex-column ab-gap-8">
  <div class="ab-flex ab-flex-nowrap ab-border">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">nowrap item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">nowrap item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">nowrap item 3</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">nowrap item 4</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">nowrap item 5</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">nowrap item 6</div>
  </div>
  <div class="ab-flex ab-flex-wrap ab-border">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">wrap item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">wrap item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">wrap item 3</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">wrap item 4</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">wrap item 5</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">wrap item 6</div>
  </div>
  <div class="ab-flex ab-flex-wrap-reverse ab-border">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">nowrap item 1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">nowrap item 2</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">nowrap item 3</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">nowrap item 4</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">nowrap item 5</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">nowrap item 6</div>
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
