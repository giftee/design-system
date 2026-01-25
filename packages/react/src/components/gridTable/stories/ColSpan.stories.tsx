import { meta, GridTable, Typography, type Story } from './shared';

export default {
  ...meta,
  title: 'GridTable/ColSpan',
};

export const ColSpan: Story = {
  render: ({ ...args }: GridTable.RootProps) => (
    <>
      <Typography>GridTable.BodyCell に colSpan を設定できます。</Typography>
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
              <GridTable.BodyCell rowSpan={2}>
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
            <GridTable.Row>
              <GridTable.BodyCell colSpan={3} align="right">
                長めのエラーメッセージがここに来たりするかも知れない
              </GridTable.BodyCell>
            </GridTable.Row>
          </GridTable.RowGroup>
        </GridTable.Body>
      </GridTable.Root>
    </>
  ),
};
