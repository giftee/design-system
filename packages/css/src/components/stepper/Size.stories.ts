import { meta, Story } from './shared';

export default {
  ...meta,
  title: 'Component/Stepper/Size',
};

export const State: Story = {
  render: (_args) => `
<div class="ab-m-8">
  <ol class="ab-Stepper ab-Stepper-vertical ab-Stepper-medium">
    <li class="ab-Stepper-item ab-Stepper-item-passed">
      <div class="ab-Stepper-marker"></div>
      <div class="ab-Stepper-label">メールアドレス確認</div>
    </li>
    <li class="ab-Stepper-item ab-Stepper-item-current" aria-current="step">
      <div class="ab-Stepper-marker"></div>
      <div class="ab-Stepper-label">認証コード入力</div>
    </li>
    <li class="ab-Stepper-item">
      <div class="ab-Stepper-marker"></div>
      <div class="ab-Stepper-label">パスワード設定</div>
    </li>
    <li class="ab-Stepper-item">
      <div class="ab-Stepper-marker"></div>
      <div class="ab-Stepper-label">企業情報入力</div>
    </li>
    <li class="ab-Stepper-item">
      <div class="ab-Stepper-marker"></div>
      <div class="ab-Stepper-label">登録内容確認</div>
    </li>
  </ol>
</div>
<div class="ab-m-8">
  <ol class="ab-Stepper ab-Stepper-vertical ab-Stepper-small">
    <li class="ab-Stepper-item ab-Stepper-item-passed">
      <div class="ab-Stepper-marker"></div>
      <div class="ab-Stepper-label">メールアドレス確認</div>
    </li>
    <li class="ab-Stepper-item ab-Stepper-item-current" aria-current="step">
      <div class="ab-Stepper-marker"></div>
      <div class="ab-Stepper-label">認証コード入力</div>
    </li>
    <li class="ab-Stepper-item">
      <div class="ab-Stepper-marker"></div>
      <div class="ab-Stepper-label">パスワード設定</div>
    </li>
    <li class="ab-Stepper-item">
      <div class="ab-Stepper-marker"></div>
      <div class="ab-Stepper-label">企業情報入力</div>
    </li>
    <li class="ab-Stepper-item">
      <div class="ab-Stepper-marker"></div>
      <div class="ab-Stepper-label">登録内容確認</div>
    </li>
  </ol>
</div>
`,
};
