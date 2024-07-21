import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Border/BorderWidth',
};

export const BorderWidth: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-gap-8 ab-mb-12">
  <div class="ab-border ab-border-0">0</div>
  <div class="ab-border ab-border-1">1</div>
  <div class="ab-border ab-border-2">2</div>
  <div class="ab-border ab-border-3">3</div>
  <div class="ab-border ab-border-4">4</div>
</div>
<div class="ab-flex ab-gap-8">
  <div class="ab-border-t ab-border-3">Top Width</div>
  <div class="ab-border-r ab-border-3">Right Width</div>
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
