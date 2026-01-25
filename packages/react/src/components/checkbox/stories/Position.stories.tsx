import { meta, Checkbox, type CheckboxProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Checkbox/Position',
};

export const Position: Story = {
  render: ({ ...args }: CheckboxProps) => (
    <div className="ab-flex ab-flex-column ab-gap-4">
      <Checkbox name="top" {...args} position="top">
        Top
      </Checkbox>
      <Checkbox name="right" {...args} position="right">
        Right
      </Checkbox>
      <Checkbox name="bottom" {...args} position="bottom">
        Bottom
      </Checkbox>
      <Checkbox name="left" {...args} position="left">
        Left
      </Checkbox>
    </div>
  ),
};
