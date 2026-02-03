import { meta, Tabs, type Story } from './shared';

export default {
  ...meta,
  title: 'Tabs/State',
};

export const State: Story = {
  render: () => (
    <>
      <div className="ab-mb-12">
        <p className="ab-mb-4">Default / Selected</p>
        <Tabs.Root>
          <Tabs.Item selected>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
        </Tabs.Root>
      </div>
      <div className="ab-mb-12">
        <p className="ab-mb-4">With Disabled</p>
        <Tabs.Root>
          <Tabs.Item selected>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item disabled>ラベル</Tabs.Item>
        </Tabs.Root>
      </div>
    </>
  ),
};
