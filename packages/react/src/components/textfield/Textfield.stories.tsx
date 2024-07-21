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
  },
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: ({ ...args }: TextfieldProps) => (
    <Textfield name="base" {...args}></Textfield>
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
