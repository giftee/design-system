import { meta, Badge, type BadgeProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Badge/Base',
};

export const Base: Story = {
  render: ({ ...args }: BadgeProps) => (
    <>
      <div className="ab-m-4">
        <Badge {...args}>1</Badge>
      </div>
      <div className="ab-m-4">
        <Badge {...args}>+9</Badge>
      </div>
    </>
  ),
};
