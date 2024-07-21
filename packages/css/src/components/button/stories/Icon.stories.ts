import { meta, createComponent } from './shared';
import type { Story } from './shared';
import { arrowUpRightFromSquare, user } from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/Button/Icon',
};

export const Icon: Story = {
  render: (args) => {
    return `
<div class="ab-mb-4 ab-flex">
  ${createComponent({
    ...args,
    size: 'xsmall',
    children: `
    Small
    ${arrowUpRightFromSquare('ab-Icon ab-Icon-xxsmall ab-ml-2')}
  `,
  })}
  ${createComponent({
    ...args,
    size: 'xsmall',
    children: `
    ${user('ab-Icon ab-Icon-xxsmall ab-mr-2')}
    Small
  `,
  })}
</div>
<div class="ab-mb-4 ab-flex">
  ${createComponent({
    ...args,
    size: 'small',
    children: `
    Small
    ${arrowUpRightFromSquare('ab-Icon ab-Icon-xsmall ab-ml-2')}
  `,
  })}
  ${createComponent({
    ...args,
    size: 'small',
    children: `
    ${user('ab-Icon ab-Icon-xsmall ab-mr-2')}
    Small
  `,
  })}
</div>
<div class="ab-mb-4 ab-flex">
  ${createComponent({
    ...args,
    size: 'large',
    children: `
    Large
    ${arrowUpRightFromSquare('ab-Icon ab-Icon-small ab-ml-2')}
  `,
  })}
  ${createComponent({
    ...args,
    size: 'large',
    children: `
    ${user('ab-Icon ab-Icon-small ab-mr-2')}
    Large
  `,
  })}
</div>
  `;
  },
  args: {
    type: 'default',
    size: 'small',
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focusVisible: '#focus',
    },
  },
};
