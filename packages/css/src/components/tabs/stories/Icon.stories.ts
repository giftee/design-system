import { meta } from './shared';
import type { Story } from './shared';
import { user } from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/Tabs/Icon',
};

export const Icon: Story = {
  render: (args) => {
    const fullWidthClass = args.fullWidth ? 'is-fullwidth' : '';
    const positionClass =
      args.position === 'left'
        ? 'is-left'
        : args.position === 'center'
          ? 'is-center'
          : '';

    return `
<div class="ab-Tabs ab-Tabs-small ${fullWidthClass} ${positionClass} ab-mb-4">
  <a href="#1" class="ab-Tabs-item">
    ${user('ab-Icon ab-Icon-small ab-mr-2')}
    <span class="ab-Tabs-item-label">Small1</span>
  </a>
  <a href="#2" class="ab-Tabs-item is-selected">
    ${user('ab-Icon ab-Icon-small ab-mr-2')}
    <span class="ab-Tabs-item-label">Small2</span>
  </a>
</div>
<div class="ab-Tabs ab-Tabs-medium ${fullWidthClass} ${positionClass} ab-mb-4">
  <a href="#1" class="ab-Tabs-item">
    ${user('ab-Icon ab-Icon-medium ab-mr-2')}
    <span class="ab-Tabs-item-label">Medum1</span>
  </a>
  <a href="#2" class="ab-Tabs-item is-selected">
    ${user('ab-Icon ab-Icon-medium ab-mr-2')}
    <span class="ab-Tabs-item-label">Medum2</span>
  </a>
</div>
  `;
  },
  args: {
    fullWidth: false,
    position: 'left',
    size: 'medium',
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focusVisible: '#focus',
    },
  },
};
