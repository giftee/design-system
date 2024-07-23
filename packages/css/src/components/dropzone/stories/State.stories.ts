import { meta } from './shared';
import type { Story } from './shared';
import { downToBracket } from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/Dropzone/State',
};

export const State: Story = {
  render: (_args) => {
    return `
<div class="ab-Dropzone ab-mb-10">
  <div class="ab-Dropzone-input">
    ${downToBracket('ab-Icon ab-Icon-primary ab-Icon-medium')}
    <div>
      <p class="ab-font-bold">
        ファイルをドラッグしてアップロード
      </p>
      <span class="ab-text-body-s">
        対応フォーマットはPNG/JPG、最大ファイルサイズは15MBです。
      </span>
    </div>
    <button class="ab-Button-outlined">ファイルを選択</button>
    <span class="ab-Dropzone-success ab-text-body-s ab-font-bold">
      アップロードが完了しました。
    </span>
    <span class="ab-Dropzone-error ab-text-body-s ab-font-bold ab-text-negative">
      ファイルサイズが制限を超過しています。
    </span>
  </div>
  <div class="ab-Dropzone-dragging">
    <p class="ab-font-bold">
      ここにファイルをドロップしてアップロード
    </p>
  </div>
  <div class="ab-Dropzone-uploading">
    <div>
      <p class="ab-font-bold">ファイルをアップロード中</p>
      <span class="ab-text-body-s"
        >アップロードの完了までそのままお待ちください。</span
      >
    </div>
    <button class="ab-Button-neutral ab-Button-small">
      アップロードのキャンセル
    </button>
  </div>
</div>

<div class="ab-Dropzone is-dragging ab-mb-10">
  <div class="ab-Dropzone-input">
    ${downToBracket('ab-Icon ab-Icon-primary ab-Icon-medium')}
    <div>
      <p class="ab-font-bold">
        ファイルをドラッグしてアップロード
      </p>
      <span class="ab-text-body-s">
        対応フォーマットはPNG/JPG、最大ファイルサイズは15MBです。
      </span>
    </div>
    <button class="ab-Button-outlined">ファイルを選択</button>
    <span class="ab-Dropzone-success ab-text-body-s ab-font-bold">
      アップロードが完了しました。
    </span>
    <span class="ab-Dropzone-error ab-text-body-s ab-font-bold ab-text-negative">
      ファイルサイズが制限を超過しています。
    </span>
  </div>
  <div class="ab-Dropzone-dragging">
    <p class="ab-font-bold">
      ここにファイルをドロップしてアップロード
    </p>
  </div>
  <div class="ab-Dropzone-uploading">
    <div>
      <p class="ab-font-bold">ファイルをアップロード中</p>
      <span class="ab-text-body-s"
        >アップロードの完了までそのままお待ちください。</span
      >
    </div>
    <button class="ab-Button-neutral ab-Button-small">
      アップロードのキャンセル
    </button>
  </div>
</div>

<div class="ab-Dropzone is-uploading ab-mb-10">
  <div class="ab-Dropzone-input">
    ${downToBracket('ab-Icon ab-Icon-primary ab-Icon-medium')}
    <div>
      <p class="ab-font-bold">
        ファイルをドラッグしてアップロード
      </p>
      <span class="ab-text-body-s">
        対応フォーマットはPNG/JPG、最大ファイルサイズは15MBです。
      </span>
    </div>
    <button class="ab-Button-outlined">ファイルを選択</button>
    <span class="ab-Dropzone-success ab-text-body-s ab-font-bold">
      アップロードが完了しました。
    </span>
    <span class="ab-Dropzone-error ab-text-body-s ab-font-bold ab-text-negative">
      ファイルサイズが制限を超過しています。
    </span>
  </div>
  <div class="ab-Dropzone-dragging">
    <p class="ab-font-bold">
      ここにファイルをドロップしてアップロード
    </p>
  </div>
  <div class="ab-Dropzone-uploading">
    <div>
      <p class="ab-font-bold">ファイルをアップロード中</p>
      <span class="ab-text-body-s"
        >アップロードの完了までそのままお待ちください。</span
      >
    </div>
    <button class="ab-Button-neutral ab-Button-small">
      アップロードのキャンセル
    </button>
  </div>
</div>

<div class="ab-Dropzone is-error ab-mb-10">
  <div class="ab-Dropzone-input">
    ${downToBracket('ab-Icon ab-Icon-primary ab-Icon-medium')}
    <div>
      <p class="ab-font-bold">
        ファイルをドラッグしてアップロード
      </p>
      <span class="ab-text-body-s">
        対応フォーマットはPNG/JPG、最大ファイルサイズは15MBです。
      </span>
    </div>
    <button class="ab-Button-outlined">ファイルを選択</button>
    <span class="ab-Dropzone-success ab-text-body-s ab-font-bold">
      アップロードが完了しました。
    </span>
    <span class="ab-Dropzone-error ab-text-body-s ab-font-bold ab-text-negative">
      ファイルサイズが制限を超過しています。
    </span>
  </div>
  <div class="ab-Dropzone-dragging">
    <p class="ab-font-bold">
      ここにファイルをドロップしてアップロード
    </p>
  </div>
  <div class="ab-Dropzone-uploading">
    <div>
      <p class="ab-font-bold">ファイルをアップロード中</p>
      <span class="ab-text-body-s"
        >アップロードの完了までそのままお待ちください。</span
      >
    </div>
    <button class="ab-Button-neutral ab-Button-small">
      アップロードのキャンセル
    </button>
  </div>
</div>

<div class="ab-Dropzone is-success ab-mb-10">
  <div class="ab-Dropzone-input">
    ${downToBracket('ab-Icon ab-Icon-primary ab-Icon-medium')}
    <div>
      <p class="ab-font-bold">
        ファイルをドラッグしてアップロード
      </p>
      <span class="ab-text-body-s">
        対応フォーマットはPNG/JPG、最大ファイルサイズは15MBです。
      </span>
    </div>
    <button class="ab-Button-outlined">ファイルを選択</button>
    <span class="ab-Dropzone-success ab-text-body-s ab-font-bold">
      アップロードが完了しました。
    </span>
    <span class="ab-Dropzone-error ab-text-body-s ab-font-bold ab-text-negative">
      ファイルサイズが制限を超過しています。
    </span>
  </div>
  <div class="ab-Dropzone-dragging">
    <p class="ab-font-bold">
      ここにファイルをドロップしてアップロード
    </p>
  </div>
  <div class="ab-Dropzone-uploading">
    <div>
      <p class="ab-font-bold">ファイルをアップロード中</p>
      <span class="ab-text-body-s"
        >アップロードの完了までそのままお待ちください。</span
      >
    </div>
    <button class="ab-Button-neutral ab-Button-small">
      アップロードのキャンセル
    </button>
  </div>
</div>
  `;
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
