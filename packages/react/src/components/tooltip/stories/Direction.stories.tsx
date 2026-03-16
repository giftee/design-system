import { meta, Tooltip, type TooltipProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Tooltip/Direction',
};

export const Direction: Story = {
  render: ({ ...args }: TooltipProps) => (
    <div className="ab-flex ab-justify-center ab-items-center ab-gap-30 ab-p-30">
      <Tooltip {...args} position="top" content="¥1,000">
        Top
      </Tooltip>
      <Tooltip
        {...args}
        position="right"
        content="長い文章の場合折り返されるようになっております。"
      >
        Right（長い文章）
      </Tooltip>
      <Tooltip {...args} position="bottom" content="Bottom">
        Bottom
      </Tooltip>
      <Tooltip {...args} position="left" content="Left">
        Left
      </Tooltip>
    </div>
  ),
};
