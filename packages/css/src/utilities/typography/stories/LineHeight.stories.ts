import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Typography/LineHeight',
};

export const LineHeight: Story = {
  render: (_args) => {
    return `
<div style="display: flex; flex-direction: column; gap: 24px;">
  <div>
    <p class="ab-text-body-s ab-text-secondary ab-mb-2">.ab-leading-none (line-height: 1)</p>
    <p class="ab-leading-none ab-bg-rest-secondary ab-p-4">The quick brown fox jumps over the lazy dog.<br>The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <p class="ab-text-body-s ab-text-secondary ab-mb-2">.ab-leading-s (line-height: 1.25)</p>
    <p class="ab-leading-s ab-bg-rest-secondary ab-p-4">The quick brown fox jumps over the lazy dog.<br>The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <p class="ab-text-body-s ab-text-secondary ab-mb-2">.ab-leading-m (line-height: 1.5)</p>
    <p class="ab-leading-m ab-bg-rest-secondary ab-p-4">The quick brown fox jumps over the lazy dog.<br>The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <p class="ab-text-body-s ab-text-secondary ab-mb-2">.ab-leading-l (line-height: 1.75)</p>
    <p class="ab-leading-l ab-bg-rest-secondary ab-p-4">The quick brown fox jumps over the lazy dog.<br>The quick brown fox jumps over the lazy dog.</p>
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
