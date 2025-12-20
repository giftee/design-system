import * as React from 'react';
import type { DatePickerProps } from '@/index';
import { DatePicker } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'DatePicker',
  tags: ['autodocs'],
  component: DatePicker,
  args: {
    label: 'label',
    helptext: 'helptext',
    error: false,
    errorMessages: undefined,
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
      description: 'DatePicker の name。label と input を紐づけるのに必須',
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
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: ({ ...args }: DatePickerProps) => {
    const [value, setValue] = React.useState('2024-01-01');

    return (
      <DatePicker
        name="base"
        {...args}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      ></DatePicker>
    );
  },
};

export const Error: Story = {
  render: ({ ...args }: DatePickerProps) => {
    const [value, setValue] = React.useState('2024-01-01');

    return (
      <>
        <div className="ab-flex ab-flex-column ab-gap-12">
          <DatePicker
            name="single-error"
            {...args}
            error={true}
            errorMessages="単一エラーメッセージ"
            onChange={(event) => setValue(event.target.value)}
            value={value}
          ></DatePicker>
          <DatePicker
            name="multi-errors"
            {...args}
            error={true}
            errorMessages={['複数エラーメッセージ1', '複数エラーメッセージ2']}
            onChange={(event) => setValue(event.target.value)}
            value={value}
          ></DatePicker>
          <DatePicker
            name="notError"
            {...args}
            onChange={(event) => setValue(event.target.value)}
            value={value}
          ></DatePicker>
        </div>
      </>
    );
  },
};
