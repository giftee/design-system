import { meta, Badge, type BadgeProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Badge/Dot',
};

export const Dot: Story = {
  render: ({ ...args }: BadgeProps) => <Badge isDot={true} {...args}></Badge>,
};
