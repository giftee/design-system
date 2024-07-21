import { meta, createComponent } from './shared';
import type { Story } from './shared';
import GifteeBox from '../../../../story_assets/giftee-box.svg';

export default {
  ...meta,
  title: 'Component/Checkbox/Image',
};

export const Image: Story = {
  render: (args) => {
    return `
${createComponent({
  ...args,
  position: 'top',
  children: `
    <div class="ab-flex ab-items-center">
      <img src="${GifteeBox}" class="ab-mr-1" style="height: 30px;" />
      Top
    </div>
  `,
})}
  `;
  },
  args: {
    checked: false,
    position: 'right',
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
