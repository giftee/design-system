import { meta } from './shared';
import type { Story } from './shared';
import { circleInfo } from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/InlineAlert/Customize',
};

export const Customize: Story = {
  render: (_args) => {
    return `
    <div class="ab-InlineAlert ab-InlineAlert-info ab-mb-4">
      <div class="ab-InlineAlert-title">
        ${circleInfo('ab-Icon ab-Icon-medium')}
        title のみ
      </div>
    </div>
    <div class="ab-InlineAlert ab-InlineAlert-info ab-mb-4">
      <div class="ab-InlineAlert-description">description のみ</div>
    </div>
    <div class="ab-InlineAlert ab-InlineAlert-info ab-mb-4">
      <div class="ab-InlineAlert-title">
        ${circleInfo('ab-Icon ab-Icon-medium ab-text-notice')}
        title, description 両方あり
      </div>
      <div class="ab-InlineAlert-description">テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります</div>
    </div>
  `;
  },
  args: {
    type: 'neutral',
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
