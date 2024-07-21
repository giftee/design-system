import type { StatusLabelProps } from '@/index';
import { StatusLabel } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'StatusLabel',
  tags: ['autodocs'],
  component: StatusLabel,
  args: {
    variant: 'primary',
    size: 'small',
    children: 'StatusLabelText',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'outlined',
        'neutral',
        'info',
        'notice',
        'positive',
        'negative',
        'disabled',
      ],
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
      description: '種類',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: {
          summary: 'small',
        },
      },
      description: 'サイズ',
    },
  },
} satisfies Meta<typeof StatusLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variant: Story = {
  render: ({ children, ...args }: StatusLabelProps) => (
    <>
      <StatusLabel {...args} variant="primary">
        {children}
      </StatusLabel>
      <StatusLabel {...args} variant="outlined">
        {children}
      </StatusLabel>
      <StatusLabel {...args} variant="neutral">
        {children}
      </StatusLabel>
      <StatusLabel {...args} variant="info">
        {children}
      </StatusLabel>
      <StatusLabel {...args} variant="notice">
        {children}
      </StatusLabel>
      <StatusLabel {...args} variant="positive">
        {children}
      </StatusLabel>
      <StatusLabel {...args} variant="negative">
        {children}
      </StatusLabel>
      <StatusLabel {...args} variant="disabled">
        {children}
      </StatusLabel>
    </>
  ),
};

export const Size: Story = {
  render: ({ children, ...args }: StatusLabelProps) => (
    <>
      <StatusLabel {...args} size="small">
        {children}
      </StatusLabel>
      <StatusLabel {...args} size="medium">
        {children}
      </StatusLabel>
      <StatusLabel {...args} size="large">
        {children}
      </StatusLabel>
    </>
  ),
};
