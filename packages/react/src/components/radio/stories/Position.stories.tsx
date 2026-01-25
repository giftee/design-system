import { meta, Radio, type RadioProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Radio/Position',
};

export const Position: Story = {
  render: ({ ...args }: RadioProps) => (
    <div className="ab-flex ab-flex-column ab-gap-4">
      <Radio name="top" {...args} position="top">
        Top
      </Radio>
      <Radio name="right" {...args} position="right">
        Right
      </Radio>
      <Radio name="bottom" {...args} position="bottom">
        Bottom
      </Radio>
      <Radio name="left" {...args} position="left">
        Left
      </Radio>
    </div>
  ),
};
