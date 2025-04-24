# @giftee/abukuma-design-tokens

@giftee/abukuma-design-tokens は株式会社ギフティのデザインシステム Abukuma のデザイントークンです。

## インストール

```bash
$ npm install @giftee/abukuma-design-tokens
```

## テーマ

現在、marine-light, marine-dark, skeleton-light を提供しています。テーマ設定の方法は言語ごとに違います。

## 使い方

現在、CSS Variables の形態と JavaScript + 型定義の形態でデザイントークンを提供しています。他の形態で欲しい場合は、お問い合わせください。

### CSS/SCSS

CSS variables の形で提供しています。テーマ設定は HTML に `[data-theme=marine-light]` とすることで可能です。

```css
@import '@giftee/abukuma-design-tokens';
```

### JS/TS

JavaScript の object とそれに対応した型定義を提供しています。テーマごとにデザイントークンが import できるので、好きに使ってください。

```ts
import { marineLight, saasLight } from '@giftee/abukuma-design-tokens';
```

## 開発

開発については [DEVELOP.md](DEVELOP.md) を参照してください。

## リリース

リリースについては [RELEASING.md](../../RELEASING.md) を参照してください。

## ライセンス

このプロダクトは[MIT](../../LICENSE)の条件に従ってライセンスされています。

## 当社 OSS の利用にあたっての注意事項

[当社 OSS の利用にあたっての注意事項](https://docs.google.com/document/d/1PXmZr5g1I5VxAsLNAmgvLDu0Yxzc4wHVlCusKmPtR4o/edit#heading=h.hezrzkxytrbw) をご参照ください。
