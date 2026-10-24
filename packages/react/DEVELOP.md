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

### テスト

```bash
$ pnpm test            # ユニットテスト + Storybook テストを全て実行
$ pnpm test:unit       # ユニットテスト (Vitest + happy-dom)
$ pnpm test:storybook  # Storybook のストーリーを Chromium で実行 (play 関数 + axe)
$ pnpm test:watch      # ウォッチモード
```

Storybook テストは全ストーリーを実ブラウザで描画し、`play` 関数のインタラクションと axe による
アクセシビリティ検査（`parameters.a11y.test = 'error'`）を行います。
初回は Playwright の Chromium が必要です。

```bash
$ pnpm exec playwright install chromium
# もしくはローカルの Google Chrome を使う
$ PLAYWRIGHT_CHANNEL=chrome pnpm test:storybook
```

操作を伴うコンポーネントは `stories/Interaction.stories.tsx` に play 関数を書いてください。
variant とクラス名の対応はユニットテスト、見た目はビジュアルリグレッション、操作・フォーカス・ARIA は
インタラクションテストで検証する、という分担にしています。
