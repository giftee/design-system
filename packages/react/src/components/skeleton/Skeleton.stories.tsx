import type { SkeletonProps } from '@/index';
import { Skeleton } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Skeleton',
  tags: ['autodocs'],
  component: Skeleton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'circular', 'rectangular'],
      table: {
        defaultValue: {
          summary: 'text',
        },
      },
      description: '形状',
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variant: Story = {
  render: (args: SkeletonProps) => (
    <div>
      <div>
        <span className="ab-text-body-m ab-font-bold">text</span>
        <br />
        <br />
        <div className="ab-flex ab-flex-column ab-gap-4">
          <Skeleton {...args} variant="text" />
          <Skeleton {...args} variant="text" />
        </div>
        <br />
      </div>
      <div>
        <span className="ab-text-body-m ab-font-bold">circular</span>
        <br />
        <br />
        <div className="ab-flex ab-gap-4">
          <Skeleton {...args} variant="circular" width={48} height={48} />
          <Skeleton {...args} variant="circular" width={48} height={48} />
        </div>
        <br />
      </div>
      <div>
        <span className="ab-text-body-m ab-font-bold">rectangular</span>
        <br />
        <br />
        <div className="ab-flex ab-gap-4">
          <Skeleton {...args} variant="rectangular" width={280} height={212} />
          <Skeleton {...args} variant="rectangular" width={280} height={212} />
        </div>
      </div>
      <br />
    </div>
  ),
};
