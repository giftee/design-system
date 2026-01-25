import { meta, Table, Typography, type Story } from './shared';

export default {
  ...meta,
  title: 'Table/Base',
};

export const Base: Story = {
  render: ({ ...args }: Table.RootProps) => (
    <Table.Root {...args}>
      <Table.Header>
        <Table.HeaderRow>
          <Table.HeaderCell>商品情報</Table.HeaderCell>
          <Table.HeaderCell>価格</Table.HeaderCell>
          <Table.HeaderCell>審査</Table.HeaderCell>
          <Table.HeaderCell>有効期限</Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        <Table.BodyRow>
          <Table.BodyCell>
            <Typography variant="body-xs" className="ab-text-secondary">
              ギフティ
            </Typography>
            <Typography variant="body-s" className="ab-block">
              giftee Box
            </Typography>
          </Table.BodyCell>
          <Table.BodyCell>¥500</Table.BodyCell>
          <Table.BodyCell>1〜2営業日</Table.BodyCell>
          <Table.BodyCell>１ヶ月後の月末</Table.BodyCell>
        </Table.BodyRow>
        <Table.BodyRow>
          <Table.BodyCell className="ab-flex ab-items-center">
            <img
              src="https://abukuma-css-storybook.netlify.app/assets/giftee-box-Bjg1pmYW.svg"
              className="ab-mr-2 ab-inline"
              style={{ height: '56px' }}
              alt="giftee Box"
              width={56}
              height={56}
            />
            <div className="ab-flex ab-flex-column">
              <Typography variant="body-xs" className="ab-text-secondary">
                ギフティ
              </Typography>
              <Typography variant="body-s">giftee Box</Typography>
            </div>
          </Table.BodyCell>
          <Table.BodyCell>¥500</Table.BodyCell>
          <Table.BodyCell>1〜2営業日</Table.BodyCell>
          <Table.BodyCell>１ヶ月後の月末</Table.BodyCell>
        </Table.BodyRow>
      </Table.Body>
    </Table.Root>
  ),
};
