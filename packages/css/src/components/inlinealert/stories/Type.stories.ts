import { meta } from './shared';
import type { Story } from './shared';
import {
  circleInfo,
  triangleExclamation,
} from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/InlineAlert/Type',
};

export const Type: Story = {
  render: (_args) => {
    return `
    <div class="ab-InlineAlert ab-InlineAlert-neutral ab-mb-4">
      <div class="ab-InlineAlert-title">
        ${circleInfo('ab-Icon ab-Icon-medium')}
        テキストが入ります
      </div>
      <div class="ab-InlineAlert-description">テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります</div>
    </div>
    <div class="ab-InlineAlert ab-InlineAlert-info ab-mb-4">
      <div class="ab-InlineAlert-title">
        ${circleInfo('ab-Icon ab-Icon-medium ab-text-info')}
        テキストが入ります
      </div>
      <div class="ab-InlineAlert-description">テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります</div>
    </div>
    <div class="ab-InlineAlert ab-InlineAlert-notice ab-mb-4">
      <div class="ab-InlineAlert-title">
        ${circleInfo('ab-Icon ab-Icon-medium ab-text-notice')}
        テキストが入ります
      </div>
      <div class="ab-InlineAlert-description">テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります</div>
    </div>
    <div class="ab-InlineAlert ab-InlineAlert-positive ab-mb-4">
      <div class="ab-InlineAlert-title">
        ${circleInfo('ab-Icon ab-Icon-medium ab-text-positive')}
        テキストが入ります
      </div>
      <div class="ab-InlineAlert-description">テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります</div>
    </div>
    <div class="ab-InlineAlert ab-InlineAlert-negative ab-mb-4">
      <div class="ab-InlineAlert-title">
        ${triangleExclamation('ab-Icon ab-Icon-medium ab-text-negative')}
        テキストが入ります
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
