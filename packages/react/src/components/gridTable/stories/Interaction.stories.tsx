import { expect, within } from 'storybook/test';
import { meta, GridTable, type Story } from './shared';

export default {
  ...meta,
  title: 'GridTable/Interaction',
};

const ITEMS = [
  { id: 'a', name: 'giftee Box', price: '¥500' },
  { id: 'b', name: 'giftee Card', price: '¥1,000' },
];

export const Structure: Story = {
  render: (args) => (
    <GridTable.Root {...args} columnsCount={2} aria-label="商品一覧">
      <GridTable.Header>
        <GridTable.Row>
          <GridTable.HeaderCell>商品</GridTable.HeaderCell>
          <GridTable.HeaderCell>価格</GridTable.HeaderCell>
        </GridTable.Row>
      </GridTable.Header>
      <GridTable.Body>
        {ITEMS.map((item) => (
          <GridTable.RowGroup key={item.id}>
            <GridTable.Row>
              <GridTable.BodyCell>{item.name}</GridTable.BodyCell>
              <GridTable.BodyCell>{item.price}</GridTable.BodyCell>
            </GridTable.Row>
          </GridTable.RowGroup>
        ))}
      </GridTable.Body>
    </GridTable.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole('table', { name: '商品一覧' }),
    ).toBeInTheDocument();

    const headers = canvas.getAllByRole('columnheader');
    await expect(headers).toHaveLength(2);
    await expect(headers[1]).toHaveTextContent('価格');

    await expect(canvas.getAllByRole('row')).toHaveLength(3);
    await expect(canvas.getAllByRole('cell')).toHaveLength(4);
    await expect(
      canvas.getByRole('cell', { name: '¥1,000' }),
    ).toBeInTheDocument();
  },
};
