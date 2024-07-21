import { meta } from './shared';
import type { Story } from './shared';
import { downToBracket } from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/Dropzone/Size',
};

export const Size: Story = {
  render: (_args) => {
    return `
    <div class="ab-Dropzone ab-Dropzone-small ab-mb-10">
      <div class="ab-Dropzone-input">
        ${downToBracket('ab-Icon ab-Icon-primary ab-Icon-medium')}
        <div>
          <p class="ab-text-body-s ab-font-bold">
            ファイルをドラッグしてアップロード
          </p>
          <span class="ab-text-body-xs">
            対応フォーマットはPNG/JPG、最大ファイルサイズは15MBです。
          </span>
          <span class="ab-Dropzone-error ab-text-body-xs ab-font-bold ab-text-negative">
            ファイルサイズが制限を超過しています。
          </span>
          <span class="ab-Dropzone-success ab-text-body-xs ab-font-bold">
            アップロードが完了しました。
          </span>
        </div>
        <button class="ab-Button-outlined">ファイルを選択</button>
      </div>
      <div class="ab-Dropzone-dragging">
        <p class="ab-text-body-s ab-font-bold">
          ここにファイルをドロップしてアップロード
        </p>
      </div>
      <div class="ab-Dropzone-uploading">
        <div>
          <p class="ab-text-body-s ab-font-bold">ファイルをアップロード中</p>
          <span class="ab-text-body-xs">アップロードの完了までそのままお待ちください。</span>
        </div>
        <button class="ab-Button-negative ab-Button-small">
          アップロードのキャンセル
        </button>
      </div>
    </div>

    <div class="ab-Dropzone ab-Dropzone-small is-dragging ab-mb-10">
      <div class="ab-Dropzone-input">
        ${downToBracket('ab-Icon ab-Icon-primary ab-Icon-medium')}
        <div>
          <p class="ab-text-body-s ab-font-bold">
            ファイルをドラッグしてアップロード
          </p>
          <span class="ab-text-body-xs">
            対応フォーマットはPNG/JPG、最大ファイルサイズは15MBです。
          </span>
          <span class="ab-Dropzone-error ab-text-body-xs ab-font-bold ab-text-negative">
            ファイルサイズが制限を超過しています。
          </span>
          <span class="ab-Dropzone-success ab-text-body-xs ab-font-bold">
            アップロードが完了しました。
          </span>
        </div>
        <button class="ab-Button-outlined">ファイルを選択</button>
      </div>
      <div class="ab-Dropzone-dragging">
        <p class="ab-text-body-s ab-font-bold">
          ここにファイルをドロップしてアップロード
        </p>
      </div>
      <div class="ab-Dropzone-uploading">
        <div>
          <p class="ab-text-body-s ab-font-bold">ファイルをアップロード中</p>
          <span class="ab-text-body-xs">アップロードの完了までそのままお待ちください。</span>
        </div>
        <button class="ab-Button-negative ab-Button-small">
          アップロードのキャンセル
        </button>
      </div>
    </div>

    <div class="ab-Dropzone ab-Dropzone-small is-uploading ab-mb-10">
      <div class="ab-Dropzone-input">
        ${downToBracket('ab-Icon ab-Icon-primary ab-Icon-medium')}
        <div>
          <p class="ab-text-body-s ab-font-bold">
            ファイルをドラッグしてアップロード
          </p>
          <span class="ab-text-body-xs">
            対応フォーマットはPNG/JPG、最大ファイルサイズは15MBです。
          </span>
          <span class="ab-Dropzone-error ab-text-body-xs ab-font-bold ab-text-negative">
            ファイルサイズが制限を超過しています。
          </span>
          <span class="ab-Dropzone-success ab-text-body-xs ab-font-bold">
            アップロードが完了しました。
          </span>
        </div>
        <button class="ab-Button-outlined">ファイルを選択</button>
      </div>
      <div class="ab-Dropzone-dragging">
        <p class="ab-text-body-s ab-font-bold">
          ここにファイルをドロップしてアップロード
        </p>
      </div>
      <div class="ab-Dropzone-uploading">
        <div>
          <p class="ab-text-body-s ab-font-bold">ファイルをアップロード中</p>
          <span class="ab-text-body-xs">アップロードの完了までそのままお待ちください。</span>
        </div>
        <button class="ab-Button-negative ab-Button-small">
          アップロードのキャンセル
        </button>
      </div>
    </div>

    <div class="ab-Dropzone ab-Dropzone-small is-error ab-mb-10">
      <div class="ab-Dropzone-input">
        ${downToBracket('ab-Icon ab-Icon-primary ab-Icon-medium')}
        <div>
          <p class="ab-text-body-s ab-font-bold">
            ファイルをドラッグしてアップロード
          </p>
          <span class="ab-text-body-xs">
            対応フォーマットはPNG/JPG、最大ファイルサイズは15MBです。
          </span>
          <span class="ab-Dropzone-error ab-text-body-xs ab-font-bold ab-text-negative">
            ファイルサイズが制限を超過しています。
          </span>
          <span class="ab-Dropzone-success ab-text-body-xs ab-font-bold">
            アップロードが完了しました。
          </span>
        </div>
        <button class="ab-Button-outlined">ファイルを選択</button>
      </div>
      <div class="ab-Dropzone-dragging">
        <p class="ab-text-body-s ab-font-bold">
          ここにファイルをドロップしてアップロード
        </p>
      </div>
      <div class="ab-Dropzone-uploading">
        <div>
          <p class="ab-text-body-s ab-font-bold">ファイルをアップロード中</p>
          <span class="ab-text-body-xs">アップロードの完了までそのままお待ちください。</span>
        </div>
        <button class="ab-Button-negative ab-Button-small">
          アップロードのキャンセル
        </button>
      </div>
    </div>

    <div class="ab-Dropzone ab-Dropzone-small is-success ab-mb-10">
      <div class="ab-Dropzone-input">
        ${downToBracket('ab-Icon ab-Icon-primary ab-Icon-medium')}
        <div>
          <p class="ab-text-body-s ab-font-bold">
            ファイルをドラッグしてアップロード
          </p>
          <span class="ab-text-body-xs">
            対応フォーマットはPNG/JPG、最大ファイルサイズは15MBです。
          </span>
          <span class="ab-Dropzone-error ab-text-body-xs ab-font-bold ab-text-negative">
            ファイルサイズが制限を超過しています。
          </span>
          <span class="ab-Dropzone-success ab-text-body-xs ab-font-bold">
            アップロードが完了しました。
          </span>
        </div>
        <button class="ab-Button-outlined">ファイルを選択</button>
      </div>
      <div class="ab-Dropzone-dragging">
        <p class="ab-text-body-s ab-font-bold">
          ここにファイルをドロップしてアップロード
        </p>
      </div>
      <div class="ab-Dropzone-uploading">
        <div>
          <p class="ab-text-body-s ab-font-bold">ファイルをアップロード中</p>
          <span class="ab-text-body-xs">アップロードの完了までそのままお待ちください。</span>
        </div>
        <button class="ab-Button-negative ab-Button-small">
          アップロードのキャンセル
        </button>
      </div>
    </div>
  `;
  },
  args: {
    type: 'horizontal',
    size: 'small',
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
