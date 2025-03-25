import type { TextfieldProps } from '@/index';
import { Textfield } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Textfield',
  tags: ['autodocs'],
  component: Textfield,
  args: {
    label: 'label',
    helptext: 'helptext',
    error: false,
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
          summary: 'false',
        },
      },
      description: 'エラー',
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

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: ({ ...args }: TextfieldProps) => (
    <Textfield name="base" {...args}></Textfield>
  ),
};

export const Type: Story = {
  render: ({ ...args }: TextfieldProps) => (
    <>
      <div className="ab-flex ab-flex-column ab-gap-12">
        <Textfield name="input" {...args} label="input"></Textfield>
        <Textfield
          name="textarea"
          {...args}
          label="textarea"
          multiline={5}
          helptext="multilineの指定でテキストエリアになります"
        ></Textfield>
        <Textfield
          name="textarea-resize-both"
          {...args}
          label="textarea-resize-both"
          multiline={5}
          resize="both"
          helptext="multilineとresizeを組み合わせることで、サイズ可変のテキストエリアになります"
        ></Textfield>
        <Textfield
          name="textarea-resize-horizontal"
          {...args}
          label="textarea-resize-horizontal"
          multiline={5}
          resize="horizontal"
        ></Textfield>
        <Textfield
          name="textarea-resize-vertical"
          {...args}
          label="textarea-resize-vertical"
          multiline={5}
          resize="vertical"
        ></Textfield>
      </div>
    </>
  ),
};

export const Required: Story = {
  render: ({ ...args }: TextfieldProps) => (
    <>
      <div className="ab-flex ab-flex-column ab-gap-12">
        <Textfield
          name="required"
          {...args}
          label="必須"
          required={true}
        ></Textfield>
        <Textfield
          name="notRequired"
          {...args}
          label="任意"
          required={false}
        ></Textfield>
      </div>
    </>
  ),
};

export const Error: Story = {
  render: ({ ...args }: TextfieldProps) => (
    <>
      <div className="ab-flex ab-flex-column ab-gap-12">
        <Textfield
          name="error"
          {...args}
          error={true}
          helptext="エラーメッセージ"
        ></Textfield>
        <Textfield name="notError" {...args}></Textfield>
      </div>
    </>
  ),
};

export const Disabled: Story = {
  render: ({ ...args }: TextfieldProps) => (
    <>
      <div className="ab-flex ab-flex-column ab-gap-12">
        <Textfield
          name="disabled"
          {...args}
          disabled={true}
          helptext="disabled"
        ></Textfield>
        <Textfield name="notDisabled" {...args}></Textfield>
      </div>
    </>
  ),
};

export const SlotProps: Story = {
  render: ({ ...args }: TextfieldProps) => (
    <>
      <div className="ab-flex ab-flex-column ab-gap-12">
        <Textfield
          name="slotProps"
          {...args}
          helptext="slotProps で input tag に ab-w-120 を設定しています"
          slotProps={{
            input: {
              className: 'ab-w-120',
            },
          }}
        />
        <Textfield
          name="slotProps"
          {...args}
          multiline={5}
          helptext="slotProps で textarea tag に ab-w-120 を設定しています"
          slotProps={{
            textarea: {
              className: 'ab-w-120',
            },
          }}
        />
      </div>
    </>
  ),
};
