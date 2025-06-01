import type { CircularProgressProps } from '@/index';
import { CircularProgress } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'CircularProgress',
  tags: ['autodocs'],
  component: CircularProgress,
  args: {
    variant: 'brand',
    size: 'large',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['brand', 'disabled'],
      table: {
        defaultValue: {
          summary: 'brand',
        },
      },
      description: '種類',
    },
    size: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'large', 'xlarge'],
      table: {
        defaultValue: {
          summary: 'large',
        },
      },
      description: 'サイズ',
    },
  },
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variant: Story = {
  render: (args: CircularProgressProps) => (
    <div className="ab-bg-rest-secondary">
      <CircularProgress {...args} variant="brand"></CircularProgress>
      <CircularProgress {...args} variant="disabled"></CircularProgress>
    </div>
  ),
};

export const Size: Story = {
  render: (args: CircularProgressProps) => (
    <div className="ab-bg-rest-secondary">
      <CircularProgress {...args} size="xsmall"></CircularProgress>
      <CircularProgress {...args} size="small"></CircularProgress>
      <CircularProgress {...args} size="large"></CircularProgress>
      <CircularProgress {...args} size="xlarge"></CircularProgress>
    </div>
  ),
};
