import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/CircularProgress/Size',
};

export const Size: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-flex-column ab-gap-4">
  ${createComponent({ size: 'xsmall' })}
  ${createComponent({ size: 'small' })}
  ${createComponent({ size: 'large' })}
  ${createComponent({ size: 'xlarge' })}
</div>
  `;
  },
  args: {
    size: 'xlarge',
    type: 'brand',
  },
  parameters: {},
};
