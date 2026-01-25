import { meta, GridTable, Typography, type Story } from './shared';

export default {
  ...meta,
  title: 'GridTable/Base',
};

export const Base: Story = {
  render: ({ ...args }: GridTable.RootProps) => (
    <>
      <Typography>
        カラム数は GridTable.Root の columnsCount
        で指定する必要があります。各セルに align を設定できます。
      </Typography>
      <GridTable.Root {...args}>
        <GridTable.Header>
          <GridTable.Row>
            <GridTable.HeaderCell>商品情報</GridTable.HeaderCell>
            <GridTable.HeaderCell align="right">価格</GridTable.HeaderCell>
            <GridTable.HeaderCell align="right">数量</GridTable.HeaderCell>
            <GridTable.HeaderCell align="right">小計</GridTable.HeaderCell>
          </GridTable.Row>
        </GridTable.Header>
        <GridTable.Body>
          <GridTable.RowGroup>
            <GridTable.Row>
              <GridTable.BodyCell>
                <Typography variant="body-xs" className="ab-text-secondary">
                  ギフティ
                </Typography>
                <Typography variant="body-s" className="ab-block">
                  giftee Box
                </Typography>
              </GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥100</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥10</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥1,000</GridTable.BodyCell>
            </GridTable.Row>
          </GridTable.RowGroup>
        </GridTable.Body>
      </GridTable.Root>
    </>
  ),
};
