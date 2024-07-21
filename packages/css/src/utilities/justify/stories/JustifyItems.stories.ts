import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Justify/JustifyItems',
};

export const JustifyItems: Story = {
  render: (_args) => {
    return `
<div class="ab-grid ab-gap-8">
  <div class="ab-grid ab-justify-items-start ab-grid-cols-3 ab-gap-8 ab-border">
    <div class="ab-border ab-bg-rest-secondary">01</div>
    <div class="ab-border ab-bg-rest-secondary">02</div>
    <div class="ab-border ab-bg-rest-secondary">03</div>
    <div class="ab-border ab-bg-rest-secondary">04</div>
    <div class="ab-border ab-bg-rest-secondary">05</div>
    <div class="ab-border ab-bg-rest-secondary">06</div>
  </div>
  <div class="ab-grid ab-justify-items-end ab-grid-cols-3 ab-gap-8 ab-border">
    <div class="ab-border ab-bg-rest-secondary">01</div>
    <div class="ab-border ab-bg-rest-secondary">02</div>
    <div class="ab-border ab-bg-rest-secondary">03</div>
    <div class="ab-border ab-bg-rest-secondary">04</div>
    <div class="ab-border ab-bg-rest-secondary">05</div>
    <div class="ab-border ab-bg-rest-secondary">06</div>
  </div>
  <div class="ab-grid ab-justify-items-center ab-grid-cols-3 ab-gap-8 ab-border">
    <div class="ab-border ab-bg-rest-secondary">01</div>
    <div class="ab-border ab-bg-rest-secondary">02</div>
    <div class="ab-border ab-bg-rest-secondary">03</div>
    <div class="ab-border ab-bg-rest-secondary">04</div>
    <div class="ab-border ab-bg-rest-secondary">05</div>
    <div class="ab-border ab-bg-rest-secondary">06</div>
  </div>
  <div class="ab-grid ab-justify-items-stretch ab-grid-cols-3 ab-gap-8 ab-border">
    <div class="ab-border ab-bg-rest-secondary">01</div>
    <div class="ab-border ab-bg-rest-secondary">02</div>
    <div class="ab-border ab-bg-rest-secondary">03</div>
    <div class="ab-border ab-bg-rest-secondary">04</div>
    <div class="ab-border ab-bg-rest-secondary">05</div>
    <div class="ab-border ab-bg-rest-secondary">06</div>
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
