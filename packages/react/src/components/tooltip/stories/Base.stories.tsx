import { meta, Tooltip, type Story } from './shared';

export default {
  ...meta,
  title: 'Tooltip/Base',
};

export const Base: Story = {
  args: {
    position: 'top',
  },

  render: ({ ...args }: Tooltip.RootProps) => (
    <Tooltip.Root {...args}>
      <Tooltip.Trigger>
        {(props) => (
          <span tabIndex={0} {...props}>
            ホバーしてください
          </span>
        )}
      </Tooltip.Trigger>
      <Tooltip.Content>ツールチップ</Tooltip.Content>
    </Tooltip.Root>
  ),
};
