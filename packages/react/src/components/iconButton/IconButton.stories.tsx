import type { IconButtonProps } from '@/index';
import { IconButton } from '@/index';
import { Xmark } from '@/storyAssets/inlineSvgs';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'IconButton',
  tags: ['autodocs'],
  component: IconButton,
  args: {
    variant: 'default',
    size: 'small',
    children: <Xmark className="ab-Icon" />,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'neutral', 'text'],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
      description: '種類',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
      table: {
        defaultValue: {
          summary: 'small',
        },
      },
      description: 'サイズ',
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variant: Story = {
  render: ({ children, ...args }: IconButtonProps) => (
    <>
      <IconButton {...args} variant="default">
        {children}
      </IconButton>
      <IconButton {...args} variant="outlined">
        {children}
      </IconButton>
      <IconButton {...args} variant="neutral">
        {children}
      </IconButton>
      <IconButton {...args} variant="text">
        {children}
      </IconButton>
    </>
  ),
};

export const Disabled: Story = {
  render: ({ children, ...args }: IconButtonProps) => (
    <>
      <IconButton {...args} disabled={false}>
        {children}
      </IconButton>
      <IconButton {...args} disabled={true}>
        {children}
      </IconButton>
    </>
  ),
};

export const Size: Story = {
  render: ({ children, ...args }: IconButtonProps) => (
    <>
      <IconButton {...args} size="small">
        {children}
      </IconButton>
      <IconButton {...args} size="large">
        {children}
      </IconButton>
    </>
  ),
};
