import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Align/AlignSelf',
};

export const AlignSelf: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-border ab-h-80">
  <div class="ab-self-auto ab-p-5 ab-border ab-bg-rest-secondary">auto</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
</div>
<div class="ab-flex ab-border ab-h-80">
  <div class="ab-self-start ab-p-5 ab-border ab-bg-rest-secondary">start</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
</div>
<div class="ab-flex ab-border ab-h-80">
  <div class="ab-self-end ab-p-5 ab-border ab-bg-rest-secondary">end</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
</div>
<div class="ab-flex ab-border ab-h-80">
  <div class="ab-self-center ab-p-5 ab-border ab-bg-rest-secondary">center</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
</div>
<div class="ab-flex ab-border ab-h-80">
  <div class="ab-self-baseline ab-p-5 ab-border ab-bg-rest-secondary">baseline</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
</div>
<div class="ab-flex ab-border ab-h-80">
  <div class="ab-self-stretch ab-p-5 ab-border ab-bg-rest-secondary">stretch</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
  <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
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
