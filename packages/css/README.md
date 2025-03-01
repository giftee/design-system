# @giftee/abukuma-css

@giftee/abukuma-css は株式会社ギフティのデザインシステム Abukuma の CSS framework です。

## インストール

```bash
$ npm install @giftee/abukuma-css
```

アイコンは [figma](https://www.figma.com/file/LegilW7nsLAzyYDgokO8PX) からダウンロードして使ってください。

Ruby on Rails で利用する場合は、[abukumacss-rails](https://github.com/giftee/abukumacss-rails) でのインストールがスムーズです。

## 使い方

package のインストール後は適切な箇所にインポートして使ってください。

```html
<body>
  <div>
    <button class="ab-Button">g4b-light Button</button>
  </div>
</body>
```

### テーマ

デフォルトで g4b-light テーマになっています。テーマをスイッチしたい場合は、任意の箇所に `data-theme='g4b-light/skeleton-light'` を追加してください。

```html
<body>
  <div>
    <button class="ab-Button">g4b-light Button</button>
    <div data-theme="g4b-dark">
      <button class="ab-Button">g4b-dark Button</button>
      <div data-theme="skeleton-light">
        <button class="ab-Button">skeleton-light Button</button>
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
