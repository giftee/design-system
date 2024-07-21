import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/CircularProgress/Type',
};

export const Type: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-flex-column ab-gap-4 ab-bg-rest-secondary">
  ${createComponent({ type: 'brand' })}
  ${createComponent({ type: 'disabled' })}
</div>
  `;
  },
  args: {
    size: 'xlarge',
    type: 'brand',
  },
  parameters: {},
};
