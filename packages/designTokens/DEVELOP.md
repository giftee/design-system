# 開発

@giftee/abukuma-design-tokens の開発用の README です。
どんな形であれ、貢献していただけるととても助かります 🙇

## セットアップ

```bash
$ pnpm install
$ pnpm build
# dist に結果ができます
```

## Figma <=> Npm package の流れ

<img src="assets/flow.png" />

1. Figma の [Variables](https://help.figma.com/hc/ja/articles/15339657135383-Figma%E3%81%A7%E3%81%AE%E3%83%90%E3%83%AA%E3%82%A2%E3%83%96%E3%83%AB%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%82%AC%E3%82%A4%E3%83%89) でデザイントークンを管理
2. Figma の [Prism Token Exporter](https://www.figma.com/community/plugin/1479197616943612145) プラグインで、Variables を [W3C 形式](https://tr.designtokens.org/format/) の JSON format に export
3. export したものを本ディレクトリの `/tokens`に配置
4. [style-dictionary](https://amzn.github.io/style-dictionary/#/) で CSS variables などの形式に整形し npm package として配布

### Figma から W3C 形式で export

<img src="assets/plugin_variable_export.png" />

[Prism Token Exporter](https://www.figma.com/community/plugin/1479197616943612145) を起動し、Generate するだけです。Generate したファイルは Collection と Mode ごとになっています。

### tokens ディレクトリに格納

Generate した JSON は以下のようになっています。それらを以下のようにコピーしてください。（そのうち自動連携したいです）

- global base.json → `tokens/globals/index.tokens.json`
- semantic-theme marine-light.json → `tokens/semantics/brands/marine-light/index.tokens.json`
- semantic-theme marine-dark.json → `tokens/semantics/brands/marine-dark/index.tokens.json`
- semantic-theme skeleton-light.json → `tokens/semantics/brands/skeleton-light/index.tokens.json`
- semantic-theme coral-light.json → `tokens/semantics/brands/coral-light/index.tokens.json`
- semantic-theme skelton-dark.json → `tokens/semantics/brands/skeleton-dark/index.tokens.json`
- semantic-common base.json → `tokens/semantics/common/index.tokens.json`

```json
/* global base.json */
{
  "global": {
    "color": {
      "white": {
        "50": {
          "$value": "#ffffff0d",
          "$type": "color"
        }
      }
    }
  }
}

/* semantic-theme coral-light.json */
{
  "semantic": {
    "color": {
      "brand": {
        "default": {
          "$value": "{global.color.sepia.600}",
          "$type": "color"
        }
      },
      "text": {
        "default": {
          "$value": "{global.color.sepia.600}",
          "$type": "color"
        }
      }
    }
  }
}

/* semantic-theme marine-light.json */
{
  "semantic": {
    "color": {
      "brand": {
        "default": {
          "$value": "{global.color.marine.600}",
          "$type": "color"
        }
      },
      "text": {
        "default": {
          "$value": "{global.color.steel.600}",
          "$type": "color"
        }
      }
    }
  }
}

/* semantic-theme marine-dark.json */
{
  "semantic": {
    "color": {
      "brand": {
        "default": {
          "$value": "{global.color.marine.600}",
          "$type": "color"
        }
      },
      "text": {
        "default": {
          "$value": "{global.color.white.800}",
          "$type": "color"
        }
      }
    }
  }
}

/* semantic-theme skeleton-light.json */
{
  "semantic": {
    "color": {
      "brand": {
        "default": {
          "$value": "{global.color.steel.600}",
          "$type": "color"
        }
      },
      "text": {
        "default": {
          "$value": "{global.color.slate.600}",
          "$type": "color"
        }
      }
    }
  }
}

/* semantic-common base.json */
{
  "semantic": {
    "spacing": {
      "4": {
        "$type": "dimension",
        "$value": "{global.size.1600}"
      }
    },
    "border": {
      "radius": {
        "sm": {
          "$type": "dimension",
          "$value": "{global.size.800}"
        }
      }
    },
    "icon": {
      "size-medium": {
        "$type": "number",
        "$value": "{global.size.2100}"
      }
    }
  }
}
```

### Build

コピーした状態で `pnpm build` すると、CSS Variables などの形式で吐き出されます。

```bash
$ pnpm build
```

## 開発フロー

1. Figma Variables を編集
2. Prism Token Exporter でエクスポートし、`tokens` ディレクトリにコピー
3. `pnpm build` で適切に確認
4. commit 前にレポジトリのルートで `pnpm changeset` を打つ
5. PR 作成/マージ
