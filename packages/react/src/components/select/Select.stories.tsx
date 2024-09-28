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
