import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Typography/WordBreak',
};

export const WordBreak: Story = {
  render: (_args) => {
    return `
<div>
  <p class="ab-wb-break-word ab-p-2 ab-bg-secondary ab-border">
    .ab-wb-break-word は単語を切れ目にして折り返されます。日本語には切れ目がなく横幅に合わせて改行してくれます。つまり、特にCSSで指定する必要はないです。次はアルファベットでの表示です。
    “giftee” is a service that enables one to send an eGift via email or LINE, etc, along with the wishes of thank you, congratulation, good job, in a casual manner.
  </p>
  <p class="ab-wb-break-all ab-p-2 ab-bg-secondary ab-border">
    .ab-wb-break-all は単語の途中でも折り返されます。日本語には切れ目がなく横幅に合わせて改行してくれます。つまり、.ab-wb-break-word と一緒です。次はアルファベットでの表示です。
    “giftee” is a service that enables one to send an eGift via email or LINE, etc, along with the wishes of thank you, congratulation, good job, in a casual manner.
  </p>
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
