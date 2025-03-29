import { Typography } from '@/components/typography/Index';
import { GridTable } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'GridTable',
  tags: ['autodocs'],
  component: GridTable.Root,
  args: {
    columnsCount: 4,
    isSelectable: false,
    isBordered: false,
  },
  argTypes: {
    columnsCount: {
      type: 'number',
      table: {
        defaultValue: {
          summary: '4',
        },
        category: 'GridTable.Root',
      },
      description: 'ヘッダーカラム数',
    },
    isSelectable: {
      type: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
        category: 'GridTable.Root',
      },
      description: '行選択',
    },
    isBordered: {
      type: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
        category: 'GridTable.Root',
      },
      description: '行ボーダー',
    },
    // @ts-expect-error Subcomponent 用
    'align(GridTable.HeaderCell)': {
      table: {
        defaultValue: {
          summary: 'left',
        },
        type: {
          summary: 'center | left | right',
        },
        category: 'GridTable.HeaderCell',
      },
      description: 'ヘッダーセル Align',
    },
    columnStart: {
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
        category: 'GridTable.RowGroup',
      },
      description: 'カラム方向 GridStart',
    },
    columnEnd: {
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
        category: 'GridTable.RowGroup',
      },
      description: 'カラム方向 GridEnd',
    },
    'align(GridTable.BodyCell)': {
      table: {
        defaultValue: {
          summary: 'left',
        },
        type: {
          summary: 'center | left | right',
        },
        category: 'GridTable.BodyCell',
      },
      description: 'ボディセル Align',
    },
    rowSpan: {
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
        category: 'GridTable.BodyCell',
      },
      description: 'rowspan',
    },
    colSpan: {
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
        category: 'GridTable.BodyCell',
      },
      description: 'colspan',
    },
    'isBordered(GridTable.BodyCell)': {
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
        category: 'GridTable.BodyCell',
      },
      description: 'セルボーダー',
    },
  },
} satisfies Meta<GridTable.RootProps>;

export default meta;
type Story = StoryObj<typeof meta>;

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
          <GridTable.RowGroup>
            <GridTable.Row>
              <GridTable.BodyCell>
                <div className="ab-flex ab-items-center">
                  <img
                    src="https://abukuma-css-storybook.netlify.app/assets/giftee-box-Bjg1pmYW.svg"
                    className="ab-mr-2 ab-inline"
                    style={{ height: '56px' }}
                    alt="giftee Box"
                  />
                  <div className="ab-flex ab-flex-column">
                    <Typography variant="body-xs" className="ab-text-secondary">
                      ギフティ
                    </Typography>
                    <Typography variant="body-s">giftee Box</Typography>
                  </div>
                </div>
              </GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥100</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥10</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥1,000</GridTable.BodyCell>
            </GridTable.Row>
          </GridTable.RowGroup>
          <GridTable.RowGroup>
            <GridTable.Row>
              <GridTable.BodyCell>
                <div className="ab-flex ab-items-center">
                  <img
                    src="https://abukuma-css-storybook.netlify.app/assets/giftee-box-Bjg1pmYW.svg"
                    className="ab-mr-2 ab-inline"
                    style={{ height: '56px' }}
                    alt="giftee Box"
                  />
                  <div className="ab-flex ab-flex-column">
                    <Typography variant="body-xs" className="ab-text-secondary">
                      ギフティ
                    </Typography>
                    <Typography variant="body-s">giftee Box</Typography>
                  </div>
                </div>
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

export const Select: Story = {
  render: ({ ...args }: GridTable.RootProps) => (
    <GridTable.Root {...args} isSelectable={true}>
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
        <GridTable.RowGroup>
          <GridTable.Row>
            <GridTable.BodyCell>
              <div className="ab-flex ab-items-center">
                <img
                  src="https://abukuma-css-storybook.netlify.app/assets/giftee-box-Bjg1pmYW.svg"
                  className="ab-mr-2 ab-inline"
                  style={{ height: '56px' }}
                  alt="giftee Box"
                />
                <div className="ab-flex ab-flex-column">
                  <Typography variant="body-xs" className="ab-text-secondary">
                    ギフティ
                  </Typography>
                  <Typography variant="body-s">giftee Box</Typography>
                </div>
              </div>
            </GridTable.BodyCell>
            <GridTable.BodyCell align="right">¥100</GridTable.BodyCell>
            <GridTable.BodyCell align="right">¥10</GridTable.BodyCell>
            <GridTable.BodyCell align="right">¥1,000</GridTable.BodyCell>
          </GridTable.Row>
        </GridTable.RowGroup>
        <GridTable.RowGroup>
          <GridTable.Row>
            <GridTable.BodyCell>
              <div className="ab-flex ab-items-center">
                <img
                  src="https://abukuma-css-storybook.netlify.app/assets/giftee-box-Bjg1pmYW.svg"
                  className="ab-mr-2 ab-inline"
                  style={{ height: '56px' }}
                  alt="giftee Box"
                />
                <div className="ab-flex ab-flex-column">
                  <Typography variant="body-xs" className="ab-text-secondary">
                    ギフティ
                  </Typography>
                  <Typography variant="body-s">giftee Box</Typography>
                </div>
              </div>
            </GridTable.BodyCell>
            <GridTable.BodyCell align="right">¥100</GridTable.BodyCell>
            <GridTable.BodyCell align="right">¥10</GridTable.BodyCell>
            <GridTable.BodyCell align="right">¥1,000</GridTable.BodyCell>
          </GridTable.Row>
        </GridTable.RowGroup>
      </GridTable.Body>
    </GridTable.Root>
  ),
};

export const BorderedRow: Story = {
  render: ({ ...args }: GridTable.RootProps) => (
    <GridTable.Root {...args} isBordered={true}>
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
        <GridTable.RowGroup>
          <GridTable.Row>
            <GridTable.BodyCell>
              <div className="ab-flex ab-items-center">
                <img
                  src="https://abukuma-css-storybook.netlify.app/assets/giftee-box-Bjg1pmYW.svg"
                  className="ab-mr-2 ab-inline"
                  style={{ height: '56px' }}
                  alt="giftee Box"
                />
                <div className="ab-flex ab-flex-column">
                  <Typography variant="body-xs" className="ab-text-secondary">
                    ギフティ
                  </Typography>
                  <Typography variant="body-s">giftee Box</Typography>
                </div>
              </div>
            </GridTable.BodyCell>
            <GridTable.BodyCell align="right">¥100</GridTable.BodyCell>
            <GridTable.BodyCell align="right">¥10</GridTable.BodyCell>
            <GridTable.BodyCell align="right">¥1,000</GridTable.BodyCell>
          </GridTable.Row>
        </GridTable.RowGroup>
        <GridTable.RowGroup>
          <GridTable.Row>
            <GridTable.BodyCell>
              <div className="ab-flex ab-items-center">
                <img
                  src="https://abukuma-css-storybook.netlify.app/assets/giftee-box-Bjg1pmYW.svg"
                  className="ab-mr-2 ab-inline"
                  style={{ height: '56px' }}
                  alt="giftee Box"
                />
                <div className="ab-flex ab-flex-column">
                  <Typography variant="body-xs" className="ab-text-secondary">
                    ギフティ
                  </Typography>
                  <Typography variant="body-s">giftee Box</Typography>
                </div>
              </div>
            </GridTable.BodyCell>
            <GridTable.BodyCell align="right">¥100</GridTable.BodyCell>
            <GridTable.BodyCell align="right">¥10</GridTable.BodyCell>
            <GridTable.BodyCell align="right">¥1,000</GridTable.BodyCell>
          </GridTable.Row>
        </GridTable.RowGroup>
      </GridTable.Body>
    </GridTable.Root>
  ),
};

export const RowSpan: Story = {
  render: ({ ...args }: GridTable.RootProps) => (
    <>
      <Typography>GridTable.BodyCell に rowSpan を設定できます。</Typography>
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
              <GridTable.BodyCell align="right">¥200</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥30</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥6,000</GridTable.BodyCell>
            </GridTable.Row>
          </GridTable.RowGroup>
          <GridTable.RowGroup>
            <GridTable.Row>
              <GridTable.BodyCell rowSpan={3}>
                <div className="ab-flex ab-items-center">
                  <img
                    src="https://abukuma-css-storybook.netlify.app/assets/giftee-box-Bjg1pmYW.svg"
                    className="ab-mr-2 ab-inline"
                    style={{ height: '56px' }}
                    alt="giftee Box"
                  />
                  <div className="ab-flex ab-flex-column">
                    <Typography variant="body-xs" className="ab-text-secondary">
                      ギフティ
                    </Typography>
                    <Typography variant="body-s">giftee Box</Typography>
                  </div>
                </div>
              </GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥100</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥10</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥1,000</GridTable.BodyCell>
            </GridTable.Row>
            <GridTable.Row>
              <GridTable.BodyCell align="right">¥200</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥30</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥6,000</GridTable.BodyCell>
            </GridTable.Row>
            <GridTable.Row>
              <GridTable.BodyCell align="right">¥300</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥50</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥10,000</GridTable.BodyCell>
            </GridTable.Row>
          </GridTable.RowGroup>
        </GridTable.Body>
      </GridTable.Root>
    </>
  ),
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
              <GridTable.BodyCell rowSpan={4}>
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
            <GridTable.Row>
              <GridTable.BodyCell align="right">¥200</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥30</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥6,000</GridTable.BodyCell>
            </GridTable.Row>
            <GridTable.Row>
              <GridTable.BodyCell colSpan={3} align="right">
                長めのエラーメッセージがここに来たりするかも知れない
              </GridTable.BodyCell>
            </GridTable.Row>
          </GridTable.RowGroup>
          <GridTable.RowGroup>
            <GridTable.Row>
              <GridTable.BodyCell rowSpan={3}>
                <div className="ab-flex ab-items-center">
                  <img
                    src="https://abukuma-css-storybook.netlify.app/assets/giftee-box-Bjg1pmYW.svg"
                    className="ab-mr-2 ab-inline"
                    style={{ height: '56px' }}
                    alt="giftee Box"
                  />
                  <div className="ab-flex ab-flex-column">
                    <Typography variant="body-xs" className="ab-text-secondary">
                      ギフティ
                    </Typography>
                    <Typography variant="body-s">giftee Box</Typography>
                  </div>
                </div>
              </GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥100</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥10</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥1,000</GridTable.BodyCell>
            </GridTable.Row>
            <GridTable.Row>
              <GridTable.BodyCell align="right">¥200</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥30</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥6,000</GridTable.BodyCell>
            </GridTable.Row>
            <GridTable.Row>
              <GridTable.BodyCell align="right">¥300</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥50</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥10,000</GridTable.BodyCell>
            </GridTable.Row>
          </GridTable.RowGroup>
        </GridTable.Body>
      </GridTable.Root>
    </>
  ),
};

export const GridColumn: Story = {
  render: ({ ...args }: GridTable.RootProps) => (
    <>
      <Typography>
        GridTable.RowGroup に grid-column を設定できます。
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
              <GridTable.BodyCell align="right">¥200</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥30</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥6,000</GridTable.BodyCell>
            </GridTable.Row>
          </GridTable.RowGroup>
          <GridTable.RowGroup>
            <GridTable.Row>
              <GridTable.BodyCell rowSpan={3}>
                <div className="ab-flex ab-items-center">
                  <img
                    src="https://abukuma-css-storybook.netlify.app/assets/giftee-box-Bjg1pmYW.svg"
                    className="ab-mr-2 ab-inline"
                    style={{ height: '56px' }}
                    alt="giftee Box"
                  />
                  <div className="ab-flex ab-flex-column">
                    <Typography variant="body-xs" className="ab-text-secondary">
                      ギフティ
                    </Typography>
                    <Typography variant="body-s">giftee Box</Typography>
                  </div>
                </div>
              </GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥100</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥10</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥1,000</GridTable.BodyCell>
            </GridTable.Row>
            <GridTable.Row>
              <GridTable.BodyCell align="right">¥200</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥30</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥6,000</GridTable.BodyCell>
            </GridTable.Row>
            <GridTable.Row>
              <GridTable.BodyCell align="right">¥300</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥50</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥10,000</GridTable.BodyCell>
            </GridTable.Row>
          </GridTable.RowGroup>
          <GridTable.RowGroup columnStart={3} columnEnd={5}>
            <GridTable.Row>
              <GridTable.BodyCell>商品代合計</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥32,000</GridTable.BodyCell>
            </GridTable.Row>
            <GridTable.Row>
              <GridTable.BodyCell>消費税</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥3,200</GridTable.BodyCell>
            </GridTable.Row>
            <GridTable.Row>
              <GridTable.BodyCell>お支払い合計</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥35,200</GridTable.BodyCell>
            </GridTable.Row>
          </GridTable.RowGroup>
        </GridTable.Body>
      </GridTable.Root>
    </>
  ),
};

export const BorderedCell: Story = {
  render: ({ ...args }: GridTable.RootProps) => (
    <>
      <Typography>
        GridTable.BodyCell の isBordered を設定することで cell の border-top
        を設定できます。
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
              <GridTable.BodyCell align="right" isBordered={true}>
                ¥200
              </GridTable.BodyCell>
              <GridTable.BodyCell align="right" isBordered={true}>
                ¥30
              </GridTable.BodyCell>
              <GridTable.BodyCell align="right" isBordered={true}>
                ¥6,000
              </GridTable.BodyCell>
            </GridTable.Row>
          </GridTable.RowGroup>
          <GridTable.RowGroup>
            <GridTable.Row>
              <GridTable.BodyCell rowSpan={3}>
                <div className="ab-flex ab-items-center">
                  <img
                    src="https://abukuma-css-storybook.netlify.app/assets/giftee-box-Bjg1pmYW.svg"
                    className="ab-mr-2 ab-inline"
                    style={{ height: '56px' }}
                    alt="giftee Box"
                  />
                  <div className="ab-flex ab-flex-column">
                    <Typography variant="body-xs" className="ab-text-secondary">
                      ギフティ
                    </Typography>
                    <Typography variant="body-s">giftee Box</Typography>
                  </div>
                </div>
              </GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥100</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥10</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥1,000</GridTable.BodyCell>
            </GridTable.Row>
            <GridTable.Row>
              <GridTable.BodyCell align="right" isBordered={true}>
                ¥200
              </GridTable.BodyCell>
              <GridTable.BodyCell align="right" isBordered={true}>
                ¥30
              </GridTable.BodyCell>
              <GridTable.BodyCell align="right" isBordered={true}>
                ¥6,000
              </GridTable.BodyCell>
            </GridTable.Row>
            <GridTable.Row>
              <GridTable.BodyCell align="right" isBordered={true}>
                ¥300
              </GridTable.BodyCell>
              <GridTable.BodyCell align="right" isBordered={true}>
                ¥50
              </GridTable.BodyCell>
              <GridTable.BodyCell align="right" isBordered={true}>
                ¥10,000
              </GridTable.BodyCell>
            </GridTable.Row>
          </GridTable.RowGroup>
          <GridTable.RowGroup columnStart={3} columnEnd={5}>
            <GridTable.Row>
              <GridTable.BodyCell>商品代合計</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥32,000</GridTable.BodyCell>
            </GridTable.Row>
            <GridTable.Row>
              <GridTable.BodyCell>消費税</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥3,200</GridTable.BodyCell>
            </GridTable.Row>
            <GridTable.Row>
              <GridTable.BodyCell>お支払い合計</GridTable.BodyCell>
              <GridTable.BodyCell align="right">¥35,200</GridTable.BodyCell>
            </GridTable.Row>
          </GridTable.RowGroup>
        </GridTable.Body>
      </GridTable.Root>
    </>
  ),
};
