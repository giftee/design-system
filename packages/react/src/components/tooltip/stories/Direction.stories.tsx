import { meta, Tooltip, type Story } from './shared';

export default {
  ...meta,
  title: 'Tooltip/Direction',
};

export const Direction: Story = {
  render: ({ ...args }: Tooltip.RootProps) => (
    <div className="ab-flex ab-justify-center ab-items-center ab-gap-30 ab-p-30">
      <Tooltip.Root {...args} position="top">
        Top
        <Tooltip.Content>¥1,000</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root {...args} position="right">
        Right（長い文章）
        <Tooltip.Content>
          長い文章の場合折り返されるようになっております。
        </Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root {...args} position="bottom">
        Bottom
        <Tooltip.Content>Bottom</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root {...args} position="left">
        Left
        <Tooltip.Content>Left</Tooltip.Content>
      </Tooltip.Root>
    </div>
  ),
};
