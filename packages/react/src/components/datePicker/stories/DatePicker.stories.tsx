import { DatePicker } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DatePicker> = {
  title: 'React/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    helptext: {
      control: 'text',
    },
    error: {
      control: 'boolean',
    },
    errorMessages: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'birthdate',
    label: '生年月日',
  },
};

export const Required: Story = {
  args: {
    name: 'birthdate-required',
    label: '生年月日',
    required: true,
  },
};

export const WithHelptext: Story = {
  args: {
    name: 'birthdate-help',
    label: '生年月日',
    helptext: 'YYYY-MM-DD形式で入力してください',
  },
};

export const Error: Story = {
  args: {
    name: 'birthdate-error',
    label: '生年月日',
    required: true,
    error: true,
    errorMessages: '生年月日を入力してください',
  },
};

export const ErrorMultiple: Story = {
  args: {
    name: 'birthdate-error-multiple',
    label: '生年月日',
    required: true,
    error: true,
    errorMessages: ['生年月日を入力してください', '正しい日付形式で入力してください'],
  },
};

export const Disabled: Story = {
  args: {
    name: 'birthdate-disabled',
    label: '生年月日',
    disabled: true,
    value: '1990-01-01',
  },
};

export const WithValue: Story = {
  args: {
    name: 'birthdate-value',
    label: '生年月日',
    value: '1990-01-01',
  },
};

export const MinMax: Story = {
  args: {
    name: 'birthdate-minmax',
    label: '生年月日',
    min: '1900-01-01',
    max: '2024-12-31',
    helptext: '1900年1月1日から2024年12月31日までの日付を選択してください',
  },
};
