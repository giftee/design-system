import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Border/BorderRadius',
};

export const BorderRadius: Story = {
  render: (_args) => {
    return `
<div class="ab-flex ab-flex-column ab-gap-16">
  <div class="ab-flex ab-flex-column ab-gap-8">
    <p class="ab-text-headline-s">border-radius の大きさは以下を参考に</p>
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
  <div class="ab-flex ab-flex-column ab-gap-8">
    <p class="ab-text-headline-s">border-radius の方向は以下を参考に</p>
    <div class="ab-flex ab-gap-2">
      <div class="ab-border ab-rounded-t-sm ab-bg-disabled ab-w-32 ab-h-32"></div>
      <span>rounded-t: 上のみ</span>
    </div>
    <div class="ab-flex ab-gap-2">
      <div class="ab-border ab-rounded-r-sm ab-bg-disabled ab-w-32 ab-h-32"></div>
      <span>rounded-r: 右のみ</span>
    </div>
    <div class="ab-flex ab-gap-2">
      <div class="ab-border ab-rounded-b-sm ab-bg-disabled ab-w-32 ab-h-32"></div>
      <span>rounded-b: 下のみ</span>
    </div>
    <div class="ab-flex ab-gap-2">
      <div class="ab-border ab-rounded-l-sm ab-bg-disabled ab-w-32 ab-h-32"></div>
      <span>rounded-l: 左のみ</span>
    </div>
    <div class="ab-flex ab-gap-2">
      <div class="ab-border ab-rounded-tr-sm ab-bg-disabled ab-w-32 ab-h-32"></div>
      <span>rounded-tr: 右上のみ</span>
    </div>
    <div class="ab-flex ab-gap-2">
      <div class="ab-border ab-rounded-br-sm ab-bg-disabled ab-w-32 ab-h-32"></div>
      <span>rounded-br: 右下のみ</span>
    </div>
    <div class="ab-flex ab-gap-2">
      <div class="ab-border ab-rounded-bl-sm ab-bg-disabled ab-w-32 ab-h-32"></div>
      <span>rounded-bl: 右下のみ</span>
    </div>
    <div class="ab-flex ab-gap-2">
      <div class="ab-border ab-rounded-tl-sm ab-bg-disabled ab-w-32 ab-h-32"></div>
      <span>rounded-tl: 左上のみ</span>
    </div>
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
