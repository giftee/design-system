import { meta, Divider, type DividerProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Divider/Direction',
};

export const Direction: Story = {
  render: ({ ...args }: DividerProps) => (
    <div>
      <div className="ab-flex ab-flex-column ab-gap-8 ab-mb-8">
        Y<Divider {...args} direction="horizontal"></Divider>Y
      </div>
      <div className="ab-flex ab-gap-8">
        X<Divider {...args} direction="vertical"></Divider>X
      </div>
    </div>
  ),
};
