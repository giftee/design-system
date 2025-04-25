# 開発

@giftee/abukuma-css の開発用の README です。
どんな形であれ、貢献していただけるととても助かります 🙇

## セットアップ

```bash
$ pnpm install
```

## 構成

```
- src
    - base： reset.css などのベースとなる CSS が置かれています。
    - components： コンポーネントです。
    - designTokens： デザイントークンが定義されています（`@giftee/abukuma-design-tokens` があるので廃止予定）。
    - themes： テーマ定義（marine-light/marine-dark/skeleton-light/coral-light）があります。
    - utilities： spacing などの utility クラスがあります。
- stories： story 群です。
- .storybook: storybook の設定です
```

## 開発フロー

1. SCSS ファイルを編集
2. storybook を編集
3. commit 前にレポジトリのルートで `pnpm changeset` を打つ
4. PR 作成/マージ

### SCSS ファイルを編集

編集を確認したい場合は、storybook や vite dev server を利用してください。vite dev server はホットリロード付きです。ただ、いずれにしろ storybook は書いてもらうことになります。

#### vite dev server

index.html を編集して CSS クラスを当てるだけです。ただし、基本的に開発で利用するだけで、それを commit する必要はないです。

```bash
$ pnpm dev
```

```html
<button class="ab-Button">開発中</button>
```

#### Storybook

既存の実装内容を一覧で確認できます。Storybook は SCSS の build 結果を利用するため、事前に build する必要があります。

```bash
$ pnpm build
$ pnpm storybook
```

開発中に Storybook を利用する場合、毎回 build をし直す必要があります（ホットリロードではない）。
