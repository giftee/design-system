---
'@giftee/abukuma-react': minor
---

- Tabs: WAI-ARIA APG の Tabs パターンに従ったキーボード操作を追加。Tab キーは選択中のタブにのみ止まり、左右矢印 / Home / End でタブ間のフォーカスを移動する（選択は Enter / Space で確定）。非選択タブは `tabindex="-1"` になる
- LinkText: `disabled` 時に `aria-disabled="true"` を付与し、フォーカス順序から外し、クリック・キーボードによる onClick と href の遷移を抑止する
- Accordion: `disabled` 時に Summary へ `aria-disabled="true"` を付与し、フォーカス順序から外し、クリック・キーボードによる開閉を抑止する
