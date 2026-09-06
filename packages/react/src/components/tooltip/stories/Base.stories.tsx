import { meta, Tooltip, type Story } from './shared';

export default {
  ...meta,
  title: 'Tooltip/Base',
};

export const Base: Story = {
  args: {
    position: 'top',
  },

  parameters: {
    docs: {
      source: {
        code: `<Tooltip.Root position="top">
  <Tooltip.Trigger>ホバーしてください</Tooltip.Trigger>
  <Tooltip.Content>ツールチップ</Tooltip.Content>
</Tooltip.Root>`,
      },
    },
  },

  render: ({ ...args }: Tooltip.RootProps) => (
    <Tooltip.Root {...args}>
      <Tooltip.Trigger>ホバーしてください</Tooltip.Trigger>
      <Tooltip.Content>ツールチップ</Tooltip.Content>
    </Tooltip.Root>
  ),
};
