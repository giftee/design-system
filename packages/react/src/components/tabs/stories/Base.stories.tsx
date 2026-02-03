import { meta, Tabs, type Story } from './shared';

export default {
  ...meta,
  title: 'Tabs/Base',
};

export const Base: Story = {
  render: ({ ...args }: Tabs.RootProps) => (
    <Tabs.Root {...args}>
      <Tabs.Item selected>ラベル</Tabs.Item>
      <Tabs.Item>ラベル</Tabs.Item>
      <Tabs.Item>ラベル</Tabs.Item>
      <Tabs.Item>ラベル</Tabs.Item>
    </Tabs.Root>
  ),
};
