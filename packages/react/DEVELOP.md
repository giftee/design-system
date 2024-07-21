# 開発

@giftee/abukuma-react の開発用の README です。

## セットアップ

```bash
$ pnpm install
```

## 構成

```
- src
    - components： コンポーネントです。
    - utilities： spacing などの utility クラスがあります。
    - index.ts： Build のエントリーです。ライブラリとして export したいコンポーネントを全て export します。
- .storybook: storybook の設定です
```

## 開発フロー

1. コンポーネントファイルを編集
2. storybook を編集
3. commit 前にレポジトリのルートで `pnpm changeset` を打つ
4. PR 作成/マージ

### コンポーネントファイルを編集

ロジックは ark.ui に、見た目は @giftee/abukuma-css に任せます。
Storybook で開発してください。

```bash
$ pnpm storybook
```
