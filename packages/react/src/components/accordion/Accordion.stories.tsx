import { Accordion } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Accordion',
  tags: ['autodocs'],
  component: Accordion.Root,
  args: {
    size: 'medium',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
      description: 'サイズ',
    },
  },
} satisfies Meta<Accordion.RootProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: ({ ...args }: Accordion.RootProps) => (
    <Accordion.Root {...args}>
      <Accordion.Summary>Summary</Accordion.Summary>
      <Accordion.Content>
        Something small enough to escape casual notice.
      </Accordion.Content>
    </Accordion.Root>
  ),
};

export const Disabled: Story = {
  render: ({ ...args }: Accordion.RootProps) => (
    <div>
      <Accordion.Root {...args} disabled={false}>
        <Accordion.Summary>Summary</Accordion.Summary>
        <Accordion.Content>
          Something small enough to escape casual notice.
        </Accordion.Content>
      </Accordion.Root>
      <Accordion.Root {...args} disabled={true}>
        <Accordion.Summary>Disabled Summary</Accordion.Summary>
        <Accordion.Content>
          Something small enough to escape casual notice.
        </Accordion.Content>
      </Accordion.Root>
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <>
      <div className="ab-mb-12">
        <Accordion.Root size="small">
          <Accordion.Summary>Small</Accordion.Summary>
          <Accordion.Content>
            Something small enough to escape casual notice.
          </Accordion.Content>
        </Accordion.Root>
      </div>
      <div className="ab-mb-12">
        <Accordion.Root size="medium">
          <Accordion.Summary>Medium(Default)</Accordion.Summary>
          <Accordion.Content>
            Something small enough to escape casual notice.
          </Accordion.Content>
        </Accordion.Root>
      </div>
    </>
  ),
};
