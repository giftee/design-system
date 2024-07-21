import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Border/BorderRadius',
};

export const BorderRadius: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-flex-column ab-gap-8">
  <div class="ab-flex ab-gap-2">
    <div class="ab-border ab-rounded-none ab-bg-disabled ab-w-32 ab-h-32"></div>
    <span>none: radius を利用したくない場合に使います</span>
  </div>
  <div class="ab-flex ab-gap-2">
    <div class="ab-border ab-rounded-xs ab-bg-disabled ab-w-8 ab-h-8"></div>
    <span>xs: 〜16px に収まる範囲のものに主に使います</span>
  </div>
  <div class="ab-flex ab-gap-2">
    <div class="ab-border ab-rounded-sm ab-bg-disabled ab-w-32 ab-h-32"></div>
    <span>sm: 16〜64px に収まる範囲のものに主に使います</span>
  </div>
  <div class="ab-flex ab-gap-2">
    <div class="ab-border ab-rounded-md ab-bg-disabled ab-w-80 ab-h-80"></div>
    <span>md: 64〜480px に収まる範囲のものに主に使います</span>
  </div>
  <div class="ab-flex ab-gap-2">
    <div class="ab-border ab-rounded-lg ab-bg-disabled ab-w-120 ab-h-120"></div>
    <span>lg: 480px 以上のものに主に使います</span>
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
