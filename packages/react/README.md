# @giftee/abukuma-react

@giftee/abukuma-react は株式会社ギフティのデザインシステム Abukuma の React component library です。

## インストール

```bash
$ npm install @giftee/abukuma-react
```

## 使い方

package のインストール後は適切な箇所にインポートして使ってください。

```tsx
<body>
  <div>
    <Button variant="default">Button</Button>
  </div>
</body>
```

### テーマ

デフォルトで g4b-light テーマになっています。テーマをスイッチしたい場合は、任意の箇所に `data-theme='g4b-light/skeleton-light'` を追加してください。

```tsx
<body>
  <div>
    <Button>g4b-light Button</Button>
    <div data-theme="skeleton-light">
      <Button>skeleton-light Button</Button>
      <div data-theme="g4b-light">
        <Button>g4b-light Button</Button>
      </div>
    </div>
  </div>
</body>
```

## 開発

開発については [DEVELOP.md](DEVELOP.md) を参照してください。

## リリース

リリースについては [RELEASING.md](../../RELEASING.md) を参照してください。

## ライセンス

このプロダクトは[MIT](../../LICENSE)の条件に従ってライセンスされています。

## 当社 OSS の利用にあたっての注意事項

[当社 OSS の利用にあたっての注意事項](https://docs.google.com/document/d/1PXmZr5g1I5VxAsLNAmgvLDu0Yxzc4wHVlCusKmPtR4o/edit#heading=h.hezrzkxytrbw) をご参照ください。
