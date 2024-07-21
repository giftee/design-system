# @giftee/abukuma-design-tokens

Abukuma のデザイントークンを提供しています。デザイントークンの Single Source of Truth になります。

## インストール

```bash
$ npm install @giftee/abukuma-design-tokens
```

## テーマ

現在、g4b-light と skeleton-light を提供しています。テーマ設定の方法は言語ごとに違います。

## 使い方

現在、CSS Variables の形態と JavaScript + 型定義の携帯でデザイントークンを提供しています。他の形態で欲しい場合は、お問い合わせください。

### CSS/SCSS

CSS variables の形で提供しています。テーマ設定は HTML に `[data-theme=g4b-light]` とすることで可能です。

```css
@import "@giftee/abukuma-design-tokens";
```

### JS/TS

JavaScript の object とそれに対応した型定義を提供しています。テーマごとにデザイントークンが import できるので、好きに使ってください。

```ts
import { g4bLight, saasLight } from "@giftee/abukuma-design-tokens";
```

## 開発

開発については [DEVELOP.md](DEVELOP.md) を参照してください。

## リリース

リリースについては [RELEASING.md](../../RELEASING.md) を参照してください。

## ライセンス

このプロダクトは[MIT](../../LICENSE)の条件に従ってライセンスされています。
