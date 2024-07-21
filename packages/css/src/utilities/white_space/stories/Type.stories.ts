import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/WhiteSpace/Type',
};

export const Type: Story = {
  render: (_args) => {
    return `
<div class="ab-m-4">
  <div class="ab-white-space-nomal ab-border ab-p-4" style="width: 250px">
        テキストが入ります。テキストが入ります。
    テキストが入ります。テキストが入ります。   テキストが入ります。   
  </div>
  <div class="ab-white-space-nowrap ab-border ab-p-4" style="width: 250px">
        テキストが入ります。テキストが入ります。
    テキストが入ります。テキストが入ります。   テキストが入ります。   
  </div>
  <div class="ab-white-space-pre ab-border ab-p-4" style="width: 250px">
        テキストが入ります。テキストが入ります。
    テキストが入ります。テキストが入ります。   テキストが入ります。   
  </div>
  <div class="ab-white-space-pre-wrap ab-border ab-p-4" style="width: 250px">
        テキストが入ります。テキストが入ります。
    テキストが入ります。テキストが入ります。   テキストが入ります。   
  </div>
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
