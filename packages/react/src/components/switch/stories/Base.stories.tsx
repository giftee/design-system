import { meta, Switch, type SwitchProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Switch/Base',
};

export const Base: Story = {
  render: ({ ...args }: SwitchProps) => (
    <div className="ab-flex ab-flex-column ab-gap-4">
      <div className="ab-flex ab-flex-row ab-gap-2">
        <Switch id="default" {...args}>
          Default
        </Switch>
      </div>
      <div className="ab-flex ab-flex-row ab-gap-2">
        <Switch disabled={true} {...args}>
          Disabled
        </Switch>
      </div>
    </div>
  ),
};
