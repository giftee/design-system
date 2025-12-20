import type { BadgeProps } from '@/index';
import { Badge } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Badge',
  tags: ['autodocs'],
  component: Badge,
  argTypes: {
    isDot: {
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
      description: 'ドットバッジ',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: ({ ...args }: BadgeProps) => (
    <>
      <div className="ab-m-4">
        <Badge {...args}>1</Badge>
      </div>
      <div className="ab-m-4">
        <Badge {...args}>+9</Badge>
      </div>
    </>
  ),
};

export const Dot: Story = {
  render: ({ ...args }: BadgeProps) => <Badge isDot={true} {...args}></Badge>,
};
