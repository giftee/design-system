import { Typography } from '@/components/typography/Index';
import { Table } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Table',
  tags: ['autodocs'],
  component: Table.Root,
  args: {
    isStripe: false,
    isSelectable: false,
  },
  argTypes: {
    isStripe: {
      type: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
      description: 'ストライプ',
    },
    isSelectable: {
      type: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
      description: '行選択',
    },
  },
} satisfies Meta<Table.RootProps>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Stripe: Story = {
  render: ({ ...args }: Table.RootProps) => (
    <Table.Root {...args} isStripe={true}>
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

export const Select: Story = {
  render: ({ ...args }: Table.RootProps) => (
    <Table.Root {...args} isSelectable={true} isStripe={true}>
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
          <Table.BodyCell align="right">¥500</Table.BodyCell>
          <Table.BodyCell align="center">1〜2営業日</Table.BodyCell>
          <Table.BodyCell align="left">１ヶ月後の月末</Table.BodyCell>
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
          <Table.BodyCell align="right">¥500</Table.BodyCell>
          <Table.BodyCell align="center">1〜2営業日</Table.BodyCell>
          <Table.BodyCell align="left">１ヶ月後の月末</Table.BodyCell>
        </Table.BodyRow>
      </Table.Body>
    </Table.Root>
  ),
};
