import { meta, Tabs, type Story } from './shared';

export default {
  ...meta,
  title: 'Tabs/Layout',
};

export const Layout: Story = {
  render: () => (
    <>
      <div className="ab-mb-12">
        <p className="ab-mb-4">Left (Default)</p>
        <Tabs.Root align="left">
          <Tabs.Item selected>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
        </Tabs.Root>
      </div>
      <div className="ab-mb-12">
        <p className="ab-mb-4">Center</p>
        <Tabs.Root align="center">
          <Tabs.Item selected>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
        </Tabs.Root>
      </div>
      <div className="ab-mb-12">
        <p className="ab-mb-4">Full Width</p>
        <Tabs.Root fullWidth>
          <Tabs.Item selected>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
        </Tabs.Root>
      </div>
      <div className="ab-mb-12">
        <p className="ab-mb-4">Full Width (5 tabs)</p>
        <Tabs.Root fullWidth>
          <Tabs.Item selected>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
        </Tabs.Root>
      </div>
    </>
  ),
};
