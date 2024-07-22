import { meta, createComponent } from './shared';
import type { Story } from './shared';
import { plus } from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/LinkText/Icon',
};

export const Icon: Story = {
  render: (args) => {
    return `
<div class="ab-flex ab-flex-row ab-gap-8">
  ${createComponent({ ...args, children: `${plus('ab-Icon ab-Icon-small')}IconLeft`, type: 'default' })}
  ${createComponent({ ...args, children: `IconRight${plus('ab-Icon ab-Icon-small')}`, type: 'default' })}
</div>
  `;
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
