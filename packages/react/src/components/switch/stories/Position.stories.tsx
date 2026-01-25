import { meta, Switch, type SwitchProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Switch/Position',
};

export const Position: Story = {
  render: ({ ...args }: SwitchProps) => (
    <div className="ab-flex ab-flex-column ab-gap-4">
      <Switch {...args} position="top">
        Top
      </Switch>
      <Switch {...args} position="right">
        Right
      </Switch>
      <Switch {...args} position="bottom">
        Bottom
      </Switch>
      <Switch {...args} position="left">
        Left
      </Switch>
    </div>
  ),
};
