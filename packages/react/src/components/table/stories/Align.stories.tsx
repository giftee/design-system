import { meta, Table, Typography, type Story } from './shared';

export default {
  ...meta,
  title: 'Table/Align',
};

export const Align: Story = {
  render: ({ ...args }: Table.RootProps) => (
    <Table.Root {...args}>
      <Table.Header>
        <Table.HeaderRow>
          <Table.HeaderCell>Headerはデフォルト center</Table.HeaderCell>
          <Table.HeaderCell align="right">価格</Table.HeaderCell>
          <Table.HeaderCell align="center">審査</Table.HeaderCell>
          <Table.HeaderCell align="left">有効期限</Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        <Table.BodyRow>
          <Table.BodyCell>
            <Typography variant="body-xs" className="ab-text-secondary">
              Bodyはデフォルト
            </Typography>
            <Typography variant="body-s" className="ab-block">
              left
            </Typography>
          </Table.BodyCell>
          <Table.BodyCell align="right">¥500</Table.BodyCell>
          <Table.BodyCell align="center">1〜2営業日</Table.BodyCell>
          <Table.BodyCell align="left">１ヶ月後の月末</Table.BodyCell>
        </Table.BodyRow>
      </Table.Body>
    </Table.Root>
  ),
};
