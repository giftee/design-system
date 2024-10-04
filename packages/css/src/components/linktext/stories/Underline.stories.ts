import { meta, createComponent } from './shared';
import type { Story } from './shared';
import { plus } from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/LinkText/Underline',
};

export const Underline: Story = {
  render: (args) => {
    return `
<div>
  <div class="ab-flex ab-flex-row ab-gap-8">
    ${createComponent({ ...args, children: 'Default Underlined', quiet: false, type: 'default' })}
    ${createComponent({ ...args, children: 'No Underline', quiet: true, type: 'default' })}
    ${createComponent({ ...args, children: `${plus('ab-Icon ab-Icon-small')}IconUnderlined`, type: 'default' })}
    ${createComponent({ ...args, children: `${plus('ab-Icon ab-Icon-small')}IconNoUnderlined`, quiet: true, type: 'default' })}
  </div>
  <div class="ab-flex ab-flex-row ab-gap-8">
    ${createComponent({ ...args, children: 'Brand Underlined', quiet: false, type: 'brand' })}
    ${createComponent({ ...args, children: 'Brand No Underline', quiet: true, type: 'brand' })}
    ${createComponent({ ...args, children: `${plus('ab-Icon ab-Icon-small')}IconBrandUnderlined`, type: 'brand' })}
    ${createComponent({ ...args, children: `${plus('ab-Icon ab-Icon-small')}IconBrandNoUnderlined`, quiet: true, type: 'brand' })}
  </div>
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
