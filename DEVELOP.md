# 開発

どんな形であれ、貢献していただけるととても助かります 🙇

## リポジトリ構成

個別の環境構築方法などはそれぞれの DEVELOP.md をご参照ください。

- `/packages` : Abukuma の各種 package のディレクトリです。
  - `/designTokens` : [デザイントークン](packages/designTokens/DEVELOP.md) です。
  - `/css` : [CSS framework](packages/css/DEVELOP.md) です。
  - `/react` : [React Component Library](packages/react/DEVELOP.md) です。

## セットアップ

### Node.js

v18.16.1 以降を用意してください。

### pnpm

repository 全体で pnpm を利用しているので、pnpm を用意しましょう。pnpm は corepack で管理されているので、以下のようにすれば pnpm がセットアップされます。

```bash
$ corepack enable
$ pnpm
```

node を別の version manager で管理している場合、rehash を打ってください。 nodenv や asdf などで管理している場合、nodenv rehash/reshim が必要になります。

```bash
$ nodenv rehash # nodenv
$ asdf reshim nodejs # asdf
```

## 開発フロー

1. [Issue](https://github.com/giftee/design-system/issues) を確認し、InProgress ラベルになっていない Issue から選択
2. 取り組む Issue に InPregress ラベルをつけ、Slack に宣言
3. 開発
4. commit 前にレポジトリのルートで `pnpm changeset` を打ち、CHANGELOG の自動作成を行えるようにする
5. PR 作成/マージ
6. Issue を Close

### `pnpm changeset`

リリースには [changesets](https://github.com/changesets/changesets) を利用しています。そのため、commit と一緒に changeset コマンドで作成されたファイルも commit してください。changeset からリリースノートが自動で作成されます。

```bash
# repo root
❯ pnpm changeset
pnpm run v1.22.17
$ npx changeset
🦋  What kind of change is this for @giftee/abukuma-css? (current version is 0.14.0) · minor
🦋  Please enter a summary for this change (this will be in the changelogs).
🦋    (submit empty line to open external editor)
🦋  Summary · work-break utility class を追加
🦋
🦋  === Summary of changesets ===
🦋  minor:  @giftee/abukuma-css
🦋
🦋  Is this your desired changeset? (Y/n) · true
🦋  Changeset added! - you can now commit it
🦋
🦋  If you want to modify or expand on the changeset summary, you can find it here
🦋  info /Users/eguchitooru/Documents/development/abukuma-css/.changeset/eighty-books-check.md
✨  Done in 27.05s.
```

なお、リリースノートに載せるほどのものではない場合、changeset を作成せずに commit しちゃっても OK です。

### PR 作成/マージ

1 つの approve があればマージ可能です。マージすると、前述の changeset のリリース PR に changeset の内容が追加されます。
