import { Tabs } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Tabs',
  tags: ['autodocs'],
  component: Tabs.Root,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
      table: { defaultValue: { summary: 'medium' } },
      description: 'サイズ',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center'],
      table: { defaultValue: { summary: 'left' } },
      description: '配置',
    },
    fullWidth: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
      description: '全幅表示',
    },
  },
} satisfies Meta<Tabs.RootProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: ({ ...args }) => (
    <Tabs.Root {...args}>
      <Tabs.Item selected>ラベル</Tabs.Item>
      <Tabs.Item>ラベル</Tabs.Item>
      <Tabs.Item>ラベル</Tabs.Item>
      <Tabs.Item>ラベル</Tabs.Item>
    </Tabs.Root>
  ),
};

export const State: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <p style={{ marginBottom: '8px' }}>Default / Selected</p>
        <Tabs.Root>
          <Tabs.Item selected>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
        </Tabs.Root>
      </div>
      <div>
        <p style={{ marginBottom: '8px' }}>With Disabled</p>
        <Tabs.Root>
          <Tabs.Item selected>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item disabled>ラベル</Tabs.Item>
        </Tabs.Root>
      </div>
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <p style={{ marginBottom: '8px' }}>Small</p>
        <Tabs.Root size="small">
          <Tabs.Item selected>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
        </Tabs.Root>
      </div>
      <div>
        <p style={{ marginBottom: '8px' }}>Medium (Default)</p>
        <Tabs.Root size="medium">
          <Tabs.Item selected>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
        </Tabs.Root>
      </div>
    </div>
  ),
};

export const Layout: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <p style={{ marginBottom: '8px' }}>Left (Default)</p>
        <Tabs.Root align="left">
          <Tabs.Item selected>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
        </Tabs.Root>
      </div>
      <div>
        <p style={{ marginBottom: '8px' }}>Center</p>
        <Tabs.Root align="center">
          <Tabs.Item selected>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
        </Tabs.Root>
      </div>
      <div>
        <p style={{ marginBottom: '8px' }}>Full Width</p>
        <Tabs.Root fullWidth>
          <Tabs.Item selected>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
        </Tabs.Root>
      </div>
      <div>
        <p style={{ marginBottom: '8px' }}>Full Width (5 tabs)</p>
        <Tabs.Root fullWidth>
          <Tabs.Item selected>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
          <Tabs.Item>ラベル</Tabs.Item>
        </Tabs.Root>
      </div>
    </div>
  ),
};
