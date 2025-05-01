import { meta, createComponent, Story } from './shared';

export default {
  ...meta,
  title: 'Component/Stepper/State',
};

export const State: Story = {
  render: (_args) => `
<div class="ab-m-8">
  <ol class="ab-Stepper ab-Stepper-horizontal ab-Stepper-medium">
    <li class="ab-Stepper-item ab-Stepper-item-passed">
      <div class="ab-Stepper-marker" aria-hidden="true">
        <!-- SVG Checkmark -->
        <svg
          class="ab-Icon ab-Icon-xsmall"
          viewBox="0 0 18 13"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4857 0.514286C18 0.989011 18 1.81978 17.4857 2.29451L7.35824 12.422C6.88352 12.9363 6.05275 12.9363 5.57802 12.422L0.514286 7.35824C0 6.88352 0 6.05275 0.514286 5.57802C0.989011 5.06374 1.81978 5.06374 2.29451 5.57802L6.48791 9.73187L15.7055 0.514286C16.1802 0 17.011 0 17.4857 0.514286Z"
          />
        </svg>
      </div>
      <div class="ab-Stepper-label">メールアドレス確認</div>
    </li>
    <li class="ab-Stepper-item ab-Stepper-item-current" aria-current="step">
      <div class="ab-Stepper-marker">2</div>
      <div class="ab-Stepper-label">認証コード入力</div>
    </li>
    <li class="ab-Stepper-item">
      <div class="ab-Stepper-marker">3</div>
      <div class="ab-Stepper-label">パスワード設定</div>
    </li>
    <li class="ab-Stepper-item">
      <div class="ab-Stepper-marker">4</div>
      <div class="ab-Stepper-label">企業情報入力</div>
    </li>
    <li class="ab-Stepper-item">
      <div class="ab-Stepper-marker">5</div>
      <div class="ab-Stepper-label">登録内容確認</div>
    </li>
  </ol>
</div>
`,
};
