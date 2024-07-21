import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Flexbox/Flex',
};

export const Flex: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-flex-column ab-gap-8">
  <div class="ab-flex ab-border">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
    <div class="ab-flex-1 ab-p-5 ab-border ab-bg-rest-secondary">flex1</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
  </div>
  <div class="ab-flex ab-border">
    <div class="ab-flex-1 ab-p-5 ab-border ab-bg-rest-secondary">flex1</div>
    <div class="ab-flex-auto ab-p-5 ab-border ab-bg-rest-secondary">flex-auto (中身の content を考慮に入れる)</div>
    <div class="ab-flex-1 ab-p-5 ab-border ab-bg-rest-secondary">flex1</div>
  </div>
  <div class="ab-flex ab-border">
    <div class="ab-flex-1 ab-p-5 ab-border ab-bg-rest-secondary">flex1</div>
    <div class="ab-flex-none ab-p-5 ab-border ab-bg-rest-secondary">flex-none (中身の content サイズで固定)</div>
    <div class="ab-flex-1 ab-p-5 ab-border ab-bg-rest-secondary">flex1</div>
  </div>
  <div class="ab-flex ab-border">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
    <div class="ab-flex-grow-0 ab-p-5 ab-border ab-bg-rest-secondary">grow0 (大きくならない)</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
  </div>
  <div class="ab-flex ab-border ab-p-2" style="max-width: 340px;">
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
    <div class="ab-flex-shrink-0 ab-p-5 ab-border ab-bg-rest-secondary">shrink0 (小さくならない)</div>
    <div class="ab-p-5 ab-border ab-bg-rest-secondary">item</div>
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
