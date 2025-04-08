import * as React from 'react';
import type { SelectProps } from '@/index';
import { Select } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Select',
  tags: ['autodocs'],
  component: Select,
  args: {
    label: 'label',
    helptext: 'helptext',
    error: false,
    errorMessages: undefined,
    required: false,
    disabled: false,
    options: [
      { value: 'option1', label: 'Option1' },
      { value: 'option2', label: 'Option2' },
      { value: 'option3', label: 'Option3' },
    ],
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
    name: {
      control: { type: 'text' },
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'string',
        },
      },
      description: 'Select の name。label と input を紐づけるのに必須',
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
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: ({ ...args }: SelectProps) => {
    const [selectedOption, setSelectedOption] = React.useState('option1');

    return (
      <Select
        name="base"
        {...args}
        options={[
          { value: 'option1', label: 'Option1' },
          { value: 'option2', label: 'Option2' },
          { value: 'option3', label: 'Option3' },
        ]}
        onChange={(event) => setSelectedOption(event.target.value)}
        value={selectedOption}
      ></Select>
    );
  },
};

export const Error: Story = {
  render: ({ ...args }: SelectProps) => {
    const [selectedOption, setSelectedOption] = React.useState('option1');

    return (
      <>
        <div className="ab-flex ab-flex-column ab-gap-12">
          <Select
            name="single-error"
            {...args}
            error={true}
            errorMessages="単一エラーメッセージ"
            options={[
              { value: 'option1', label: 'Option1' },
              { value: 'option2', label: 'Option2' },
              { value: 'option3', label: 'Option3' },
            ]}
            onChange={(event) => setSelectedOption(event.target.value)}
            value={selectedOption}
          ></Select>
          <Select
            name="multi-errors"
            {...args}
            error={true}
            errorMessages={['複数エラーメッセージ1', '複数エラーメッセージ2']}
            options={[
              { value: 'option1', label: 'Option1' },
              { value: 'option2', label: 'Option2' },
              { value: 'option3', label: 'Option3' },
            ]}
            onChange={(event) => setSelectedOption(event.target.value)}
            value={selectedOption}
          ></Select>
          <Select
            name="notError"
            {...args}
            options={[
              { value: 'option1', label: 'Option1' },
              { value: 'option2', label: 'Option2' },
              { value: 'option3', label: 'Option3' },
            ]}
            onChange={(event) => setSelectedOption(event.target.value)}
            value={selectedOption}
          ></Select>
        </div>
      </>
    );
  },
};
