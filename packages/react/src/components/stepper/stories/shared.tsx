import type { StepperProps } from '@/index';
import { Stepper } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { Stepper };
export type { StepperProps };

export const meta = {
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

export type Story = StoryObj<typeof meta>;
