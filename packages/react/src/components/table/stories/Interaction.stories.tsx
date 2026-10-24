import { expect, within } from 'storybook/test';
import { meta, Table, type Story } from './shared';

export default {
  ...meta,
  title: 'Table/Interaction',
};

const ITEMS = [
  { id: 'a', name: 'giftee Box', price: '¥500' },
  { id: 'b', name: 'giftee Card', price: '¥1,000' },
];

export const Structure: Story = {
  render: (args) => (
    <Table.Root {...args} aria-label="商品一覧">
      <Table.Header>
        <Table.HeaderRow>
          <Table.HeaderCell>商品</Table.HeaderCell>
          <Table.HeaderCell>価格</Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        {ITEMS.map((item) => (
          <Table.BodyRow key={item.id}>
            <Table.BodyCell>{item.name}</Table.BodyCell>
            <Table.BodyCell>{item.price}</Table.BodyCell>
          </Table.BodyRow>
        ))}
      </Table.Body>
    </Table.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole('table', { name: '商品一覧' }),
    ).toBeInTheDocument();

    const headers = canvas.getAllByRole('columnheader');
    await expect(headers).toHaveLength(2);
    await expect(headers[0]).toHaveTextContent('商品');
    await expect(headers[0]).toHaveAttribute('scope', 'col');

    await expect(canvas.getAllByRole('row')).toHaveLength(3);
    await expect(canvas.getAllByRole('cell')).toHaveLength(4);
    await expect(
      canvas.getByRole('cell', { name: '¥1,000' }),
    ).toBeInTheDocument();
  },
};
