import { useState } from 'react';
import { expect, fn, userEvent, within } from 'storybook/test';
import { Button } from '@/index';
import { meta, Tabs, type Story } from './shared';

export default {
  ...meta,
  title: 'Tabs/Interaction',
};

const LABELS = ['概要', '詳細', '履歴'];

const onSelect = fn();

export const SelectTab: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(0);
    return (
      <Tabs.Root {...args} aria-label="タブ">
        {LABELS.map((label, index) => (
          <Tabs.Item
            key={label}
            selected={selected === index}
            onClick={() => {
              setSelected(index);
              onSelect(index);
            }}
          >
            {label}
          </Tabs.Item>
        ))}
      </Tabs.Root>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onSelect.mockClear();

    await expect(canvas.getByRole('tablist')).toBeInTheDocument();
    const tabs = canvas.getAllByRole('tab');
    await expect(tabs).toHaveLength(3);
    await expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    await expect(tabs[1]).toHaveAttribute('aria-selected', 'false');

    await userEvent.click(tabs[1]);

    await expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
    await expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
    await expect(onSelect).toHaveBeenCalledWith(1);
  },
};

export const DisabledTab: Story = {
  render: (args) => (
    <Tabs.Root {...args} aria-label="タブ">
      <Tabs.Item selected onClick={onSelect}>
        有効
      </Tabs.Item>
      <Tabs.Item disabled onClick={onSelect}>
        無効
      </Tabs.Item>
    </Tabs.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onSelect.mockClear();
    const disabledTab = canvas.getByRole('tab', { name: '無効' });

    await expect(disabledTab).toBeDisabled();

    await userEvent.click(disabledTab);
    await expect(onSelect).not.toHaveBeenCalled();
  },
};

/**
 * WAI-ARIA APG の Tabs パターン（手動アクティベーション）:
 * Tab キーは選択中のタブにのみ止まり、左右矢印 / Home / End でフォーカスを移動し、
 * Enter / Space で選択を確定する。
 */
export const KeyboardNavigation: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(1);
    return (
      <>
        <Tabs.Root {...args} aria-label="タブ">
          {LABELS.map((label, index) => (
            <Tabs.Item
              key={label}
              selected={selected === index}
              onClick={() => {
                setSelected(index);
                onSelect(index);
              }}
            >
              {label}
            </Tabs.Item>
          ))}
        </Tabs.Root>
        <Button>タブの後ろ</Button>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    onSelect.mockClear();
    const tabs = canvas.getAllByRole('tab');
    const after = canvas.getByRole('button', { name: 'タブの後ろ' });

    // Tab キーは選択中のタブ（2 番目）に止まり、他のタブは飛ばす
    await userEvent.tab();
    await expect(tabs[1]).toHaveFocus();
    await expect(tabs[0]).toHaveAttribute('tabindex', '-1');
    await expect(tabs[2]).toHaveAttribute('tabindex', '-1');

    // 矢印キーでフォーカスを移動する（選択は変わらない）
    await userEvent.keyboard('{ArrowRight}');
    await expect(tabs[2]).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    await expect(tabs[0]).toHaveFocus();
    await userEvent.keyboard('{ArrowLeft}');
    await expect(tabs[2]).toHaveFocus();
    await userEvent.keyboard('{Home}');
    await expect(tabs[0]).toHaveFocus();
    await userEvent.keyboard('{End}');
    await expect(tabs[2]).toHaveFocus();
    await expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
    await expect(onSelect).not.toHaveBeenCalled();

    // Enter で選択を確定すると、選択中のタブが Tab ストップになる
    await userEvent.keyboard('{Enter}');
    await expect(onSelect).toHaveBeenCalledWith(2);
    await expect(tabs[2]).toHaveAttribute('aria-selected', 'true');
    await expect(tabs[2]).toHaveAttribute('tabindex', '0');
    await expect(tabs[1]).toHaveAttribute('tabindex', '-1');

    // Tab キーでタブリストの外へ出る
    await userEvent.tab();
    await expect(after).toHaveFocus();

    // Shift+Tab で戻ると選択中のタブに止まる
    await userEvent.tab({ shift: true });
    await expect(tabs[2]).toHaveFocus();
  },
};

export const ArrowKeysSkipDisabledTab: Story = {
  render: (args) => (
    <Tabs.Root {...args} aria-label="タブ">
      <Tabs.Item selected>1</Tabs.Item>
      <Tabs.Item disabled>2</Tabs.Item>
      <Tabs.Item>3</Tabs.Item>
    </Tabs.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole('tab');

    await userEvent.tab();
    await expect(tabs[0]).toHaveFocus();

    await userEvent.keyboard('{ArrowRight}');
    await expect(tabs[2]).toHaveFocus();

    await userEvent.keyboard('{ArrowLeft}');
    await expect(tabs[0]).toHaveFocus();
  },
};

export const NoSelectedTabIsStillReachable: Story = {
  render: (args) => (
    <Tabs.Root {...args} aria-label="タブ">
      <Tabs.Item>1</Tabs.Item>
      <Tabs.Item>2</Tabs.Item>
    </Tabs.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole('tab');

    await userEvent.tab();
    await expect(tabs[0]).toHaveFocus();
    await expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
  },
};
