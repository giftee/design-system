import { InlineAlert } from '@/index';
import {
  CircleInfo,
  CircleExclamation,
  TriangleExclamation,
  CircleCheck,
} from '@/storyAssets/inlineSvgs';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'InlineAlert',
  tags: ['autodocs'],
  component: InlineAlert.Root,
  args: {
    variant: 'neutral',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['neutral', 'info', 'notice', 'positive', 'negative'],
      table: {
        defaultValue: {
          summary: 'neutral',
        },
      },
      description: '種類',
    },
  },
} satisfies Meta<InlineAlert.RootProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variant: Story = {
  render: ({ children, ...args }: InlineAlert.RootProps) => (
    <div className="ab-flex ab-flex-column ab-gap-8">
      <InlineAlert.Root {...args} variant="neutral">
        <InlineAlert.Title>
          <CircleInfo className="ab-Icon ab-Icon-medium ab-text-neutral" />
          Neutral
        </InlineAlert.Title>
        <InlineAlert.Description>
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        </InlineAlert.Description>
      </InlineAlert.Root>
      <InlineAlert.Root {...args} variant="info">
        <InlineAlert.Title>
          <CircleInfo className="ab-Icon ab-Icon-medium ab-text-info" />
          Info
        </InlineAlert.Title>
        <InlineAlert.Description>
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        </InlineAlert.Description>
      </InlineAlert.Root>
      <InlineAlert.Root {...args} variant="notice">
        <InlineAlert.Title>
          <CircleExclamation className="ab-Icon ab-Icon-medium ab-text-notice" />
          Notice
        </InlineAlert.Title>
        <InlineAlert.Description>
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        </InlineAlert.Description>
      </InlineAlert.Root>
      <InlineAlert.Root {...args} variant="negative">
        <InlineAlert.Title>
          <TriangleExclamation className="ab-Icon ab-Icon-medium ab-text-negative" />
          Negative
        </InlineAlert.Title>
        <InlineAlert.Description>
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        </InlineAlert.Description>
      </InlineAlert.Root>
      <InlineAlert.Root {...args} variant="positive">
        <InlineAlert.Title>
          <CircleCheck className="ab-Icon ab-Icon-medium ab-text-positive" />
          Positive
        </InlineAlert.Title>
        <InlineAlert.Description>
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        </InlineAlert.Description>
      </InlineAlert.Root>
    </div>
  ),
};

export const Customize: Story = {
  render: ({ children, ...args }: InlineAlert.RootProps) => (
    <div className="ab-flex ab-flex-column ab-gap-8">
      <InlineAlert.Root {...args} variant="info">
        <InlineAlert.Title>
          <CircleInfo className="ab-Icon ab-Icon-medium ab-text-neutral" />
          titleのみ
        </InlineAlert.Title>
      </InlineAlert.Root>
      <InlineAlert.Root {...args} variant="info">
        <InlineAlert.Description>description のみ</InlineAlert.Description>
      </InlineAlert.Root>
      <InlineAlert.Root {...args} variant="info">
        <InlineAlert.Title>
          <CircleExclamation className="ab-Icon ab-Icon-medium ab-text-notice" />
          title, description 両方あり
        </InlineAlert.Title>
        <InlineAlert.Description>
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        </InlineAlert.Description>
      </InlineAlert.Root>
    </div>
  ),
};
