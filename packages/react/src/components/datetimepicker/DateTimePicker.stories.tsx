import * as React from 'react';
import { DateTimePicker } from './Index';
import type { DateTimePickerProps } from './Index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'DateTimePicker',
  tags: ['autodocs'],
  component: DateTimePicker,
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
      description: 'DateTimePicker の name。label と input を紐づけるのに必須',
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
} satisfies Meta<typeof DateTimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: ({ ...args }: DateTimePickerProps) => {
    const [value, setValue] = React.useState('2024-01-01T12:00');

    return (
      <DateTimePicker
        name="base"
        {...args}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      ></DateTimePicker>
    );
  },
};

export const Error: Story = {
  render: ({ ...args }: DateTimePickerProps) => {
    const [value, setValue] = React.useState('2024-01-01T12:00');

    return (
      <>
        <div className="ab-flex ab-flex-column ab-gap-12">
          <DateTimePicker
            name="single-error"
            {...args}
            error={true}
            errorMessages="単一エラーメッセージ"
            onChange={(event) => setValue(event.target.value)}
            value={value}
          ></DateTimePicker>
          <DateTimePicker
            name="multi-errors"
            {...args}
            error={true}
            errorMessages={['複数エラーメッセージ1', '複数エラーメッセージ2']}
            onChange={(event) => setValue(event.target.value)}
            value={value}
          ></DateTimePicker>
          <DateTimePicker
            name="notError"
            {...args}
            onChange={(event) => setValue(event.target.value)}
            value={value}
          ></DateTimePicker>
        </div>
      </>
    );
  },
};
