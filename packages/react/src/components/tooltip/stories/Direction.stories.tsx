import { meta, Tooltip, type Story } from './shared';

export default {
  ...meta,
  title: 'Tooltip/Direction',
};

export const Direction: Story = {
  render: ({ ...args }: Tooltip.RootProps) => (
    <div className="ab-flex ab-justify-center ab-items-center ab-gap-30 ab-p-30">
      <Tooltip.Root {...args} position="top">
        <Tooltip.Trigger>{(props) => <span {...props}>Top</span>}</Tooltip.Trigger>
        <Tooltip.Content>¥1,000</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root {...args} position="right">
        <Tooltip.Trigger>{(props) => <span {...props}>Right（長い文章）</span>}</Tooltip.Trigger>
        <Tooltip.Content>
          長い文章の場合折り返されるようになっております。
        </Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root {...args} position="bottom">
        <Tooltip.Trigger>{(props) => <span {...props}>Bottom</span>}</Tooltip.Trigger>
        <Tooltip.Content>Bottom</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root {...args} position="left">
        <Tooltip.Trigger>{(props) => <span {...props}>Left</span>}</Tooltip.Trigger>
        <Tooltip.Content>Left</Tooltip.Content>
      </Tooltip.Root>
    </div>
  ),
};
