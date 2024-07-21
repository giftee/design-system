# リリース

リリースは [changesets](https://github.com/changesets/changesets) を利用しています。

# 流れ

1. PR に changeset を混ぜる
2. PR をマージすると、package の version と CHANGELOG を更新する changesets の PR が立つ
3. PR をマージするごとに changesets PR が更新される
4. changesets PR のマージで Publish

## Pull Request

commit に changeset を混ぜてください。こうすることで、PR のマージを hook に changeset の内容がリリースノートに載ります。リリースノートに載せる必要がない場合は、changeset を混ぜる必要はないです。

```bash
# repo root
$ pnpm changeset
```

PR をあげると [changeset bot](https://github.com/apps/changeset-bot) が勝手に changeset の有無をコメントしてくれます。changeset をつけるのを忘れていた場合は、該当のコメントから changeset を追加することも可能です。

## Publish

changesets のリリース PR をマージすることで本来は勝手に行われます。
