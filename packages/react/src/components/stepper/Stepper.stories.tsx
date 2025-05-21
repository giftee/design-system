import type { StepperProps } from '@/index';
import { Stepper } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Stepper',
  tags: ['autodocs'],
  component: Stepper,
  args: {
    currentStep: 1,
    steps: [
      {
        label: 'メールアドレス確認',
      },
      {
        label: '認証コード入力',
      },
      {
        label: 'パスワード設定',
      },
      {
        label: '企業情報入力',
      },
      {
        label: '登録内容確認',
      },
    ],
    direction: 'horizontal',
    size: 'medium',
  },
  argTypes: {
    currentStep: {
      control: { type: 'number', min: 0 },
      description: '現在のステップ（0始まり）',
    },
    steps: {
      control: false,
      description: 'ステップラベルの配列',
    },
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      table: {
        defaultValue: {
          summary: 'horizontal',
        },
      },
      description: 'ステッパーの方向（横並び／縦並び）',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
      description: 'ステッパーのサイズ',
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args: StepperProps) => (
    <div className="ab-m-8">
      <Stepper {...args} />
    </div>
  ),
};

export const Size: Story = {
  render: (args: StepperProps) => (
    <div className="ab-flex ab-gap-8">
      <div>
        <p className="ab-mb-2">small</p>
        <Stepper {...args} size="small" />
      </div>
      <div>
        <p className="ab-mb-2">medium</p>
        <Stepper {...args} size="medium" />
      </div>
    </div>
  ),
};

export const Direction: Story = {
  render: (args: StepperProps) => (
    <div className="ab-flex ab-gap-8">
      <div>
        <p className="ab-mb-2">Horizontal</p>
        <Stepper {...args} direction="horizontal" />
      </div>
      <div>
        <p className="ab-mb-2">Vertical</p>
        <Stepper {...args} direction="vertical" />
      </div>
    </div>
  ),
};
