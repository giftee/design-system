import type { ButtonProps } from '@/index';
import { Button, CircularProgress } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Button',
  tags: ['autodocs'],
  component: Button,
  args: {
    variant: 'default',
    size: 'small',
    children: 'ButtonText',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'negative', 'text'],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
      description: '種類',
    },
    size: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'large'],
      table: {
        defaultValue: {
          summary: 'small',
        },
      },
      description: 'サイズ',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variant: Story = {
  render: ({ children, ...args }: ButtonProps) => (
    <>
      <Button {...args} variant="default">
        {children}
      </Button>
      <Button {...args} variant="outlined">
        {children}
      </Button>
      <Button {...args} variant="negative">
        {children}
      </Button>
      <Button {...args} variant="text">
        {children}
      </Button>
    </>
  ),
};

export const Disabled: Story = {
  render: ({ children, ...args }: ButtonProps) => (
    <>
      <Button {...args} disabled={false}>
        {children}
      </Button>
      <Button {...args} disabled={true}>
        {children}
      </Button>
    </>
  ),
};

export const Progress: Story = {
  render: ({ children, ...args }: ButtonProps) => (
    <>
      <Button {...args} size="xsmall" disabled={true}>
        <CircularProgress variant="disabled" size="xsmall"></CircularProgress>
      </Button>
      <Button {...args} size="small" disabled={true}>
        <CircularProgress variant="disabled" size="small"></CircularProgress>
      </Button>
      <Button {...args} size="large" disabled={true}>
        <CircularProgress variant="disabled" size="large"></CircularProgress>
      </Button>
    </>
  ),
};

export const Size: Story = {
  render: ({ children, ...args }: ButtonProps) => (
    <>
      <Button {...args} size="xsmall">
        {children}
      </Button>
      <Button {...args} size="small">
        {children}
      </Button>
      <Button {...args} size="large">
        {children}
      </Button>
    </>
  ),
};

export const Link: Story = {
  render: ({ children, ...args }: ButtonProps) => (
    <>
      <Button {...args} href="/">
        {children}
      </Button>
    </>
  ),
};

export const Component: Story = {
  render: ({ children, ...args }: ButtonProps) => (
    <>
      <Button {...args} component="a" href="/path">
        {children}
      </Button>
    </>
  ),
};
