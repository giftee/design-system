---
'@giftee/abukuma-react': patch
---

Storybook の play 関数によるインタラクションテストと axe による自動アクセシビリティ検査を Vitest ブラウザモードで実行する基盤を追加（`pnpm test:storybook`）。実ブラウザでの検証により見つかった以下の不具合を修正:

- Modal: submit / 背景クリックで閉じたときに `onClose` が 2 回呼ばれていた問題を修正（ネイティブの close イベント経由で 1 回だけ呼ぶ）
- Switch: `name` prop が input に渡っていなかった問題を修正
- GridTable: `GridTable.RowGroup` の role を `rowgroup` から `presentation` に変更（`rowgroup` の入れ子は ARIA で許可されないため）
- Textfield / Select / DatePicker / DateTimePicker: `errorMessages` が配列のとき `aria-errormessage` が複数 id を参照していた問題を修正（alert 要素の単一 id を参照する）
- Divider: `direction="vertical"` のとき `aria-orientation="vertical"` を付与する
