import { meta, createComponent } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Skeleton/Type',
};

export const Type: Story = {
  render: (_args) => {
    return `
<div class="ab-mt-4">
  ${createComponent({ type: 'text' })}
</div>
<div class="ab-mt-4">
  ${createComponent({ type: 'circular', classNames: 'ab-w-48 ab-h-48' })}
</div>
<div class="ab-mt-4">
  ${createComponent({ type: 'rectangular', classNames: 'ab-w-128 ab-h-48' })}
</div>
`;
  },
};
