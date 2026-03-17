import { meta, Tooltip, type Story } from './shared';

export default {
  ...meta,
  title: 'Tooltip/Base',
};

export const Base: Story = {
  render: ({ ...args }: Tooltip.RootProps) => (
    <Tooltip.Root {...args}>
      <Tooltip.Trigger>ホバーしてください</Tooltip.Trigger>
      <Tooltip.Content>ツールチップ</Tooltip.Content>
    </Tooltip.Root>
  ),
};
