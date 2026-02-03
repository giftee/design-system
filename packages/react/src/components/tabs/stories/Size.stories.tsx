import { meta, Tabs, type Story } from './shared';

export default {
  ...meta,
  title: 'Tabs/Size',
};

export const Size: Story = {
  render: () => (
    <>
      <div className="ab-mb-12">
        <p className="ab-mb-4">Small</p>
        <Tabs.Root size="small">
          <Tabs.Item selected>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
        </Tabs.Root>
      </div>
      <div className="ab-mb-12">
        <p className="ab-mb-4">Medium (Default)</p>
        <Tabs.Root size="medium">
          <Tabs.Item selected>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
        </Tabs.Root>
      </div>
    </>
  ),
};
