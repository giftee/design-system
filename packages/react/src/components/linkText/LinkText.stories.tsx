import type { LinkTextProps } from '@/index';
import { LinkText } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'LinkText',
  tags: ['autodocs'],
  component: LinkText,
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'brand'],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
      description: '種類',
    },
  },
} satisfies Meta<typeof LinkText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variant: Story = {
  render: ({ ...args }: LinkTextProps) => (
    <div className="ab-flex ab-flex-row ab-gap-8">
      <LinkText {...args} variant="default">
        Default
      </LinkText>
      <LinkText {...args} variant="brand">
        Brand
      </LinkText>
    </div>
  ),
};

export const Disabled: Story = {
  render: ({ ...args }: LinkTextProps) => (
    <>
      <div className="ab-flex ab-flex-row ab-gap-8">
        <LinkText {...args} variant="default" disabled={false}>
          Default
        </LinkText>
        <LinkText {...args} variant="default" disabled={true}>
          Default Disabled
        </LinkText>
      </div>
      <div className="ab-flex ab-flex-row ab-gap-8">
        <LinkText {...args} variant="brand" disabled={false}>
          Brand
        </LinkText>
        <LinkText {...args} variant="brand" disabled={true}>
          Brand Disabled
        </LinkText>
      </div>
    </>
  ),
};
