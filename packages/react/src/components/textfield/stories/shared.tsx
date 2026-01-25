import type { TextfieldProps } from '@/index';
import { Textfield } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

export { Textfield };
export type { TextfieldProps };

export const meta = {
  component: Textfield,
  args: {
    label: 'label',
    helptext: 'helptext',
    error: false,
    errorMessages: undefined,
    required: false,
    disabled: false,
    multiline: undefined,
    resize: 'none',
    slotProps: undefined,
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      table: {
        defaultValue: {
          summary: 'label',
        },
      },
      description: 'ラベル',
    },
    helptext: {
      control: { type: 'text' },
      table: {
        defaultValue: {
          summary: 'helptext',
        },
      },
      description: 'helpテキスト',
    },
    error: {
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
      description: 'エラー有無',
    },
    errorMessages: {
      control: { type: 'select' },
      options: [
        '単一エラーメッセージ',
        ['複数エラーメッセージ1', '複数エラーメッセージ2'],
      ],
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'string | string[]',
        },
      },
      description: 'エラーメッセージ',
    },
    required: {
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
      description: '必須',
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
      description: '非活性',
    },
    multiline: {
      control: { type: 'number' },
      table: {
        defaultValue: {
          summary: undefined,
        },
      },
      description: 'テキストエリアデフォルト行数',
    },
    slotProps: {
      control: { type: 'object' },
      table: {
        defaultValue: {
          summary: undefined,
        },
      },
      description: 'SlotProps',
    },
  },
} satisfies Meta<typeof Textfield>;

export type Story = StoryObj<typeof meta>;
