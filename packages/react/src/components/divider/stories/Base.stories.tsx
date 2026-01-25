import { meta, Divider, type DividerProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Divider/Base',
};

export const Base: Story = {
  render: ({ ...args }: DividerProps) => <Divider {...args}></Divider>,
};
