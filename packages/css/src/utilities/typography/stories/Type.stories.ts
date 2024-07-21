import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Typography/Type',
};

export const Type: Story = {
  render: (_args) => {
    return `
<h1 class="ab-text-headline-l">Headline-L（大見出し）</h1>
<h2 class="ab-text-headline-m">Headline-M（中見出し）</h2>
<h3 class="ab-text-headline-s">Headline-S（小見出し）</h3>
<p class="ab-text-body-m">Body-M（文章）</p>
<span class="ab-text-body-s">Body-S（補足）</span>
<span class="ab-text-body-xs">Body-XS（補足）</span>
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
