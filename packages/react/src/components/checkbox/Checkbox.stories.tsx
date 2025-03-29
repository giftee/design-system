import type { CheckboxProps } from '@/index';
import { Checkbox } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Checkbox',
  tags: ['autodocs'],
  component: Checkbox,
  args: {
    position: 'right',
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      table: {
        defaultValue: {
          summary: 'right',
        },
      },
      description: 'ラベル位置',
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
      description: 'Checkbox の name。label と input を紐づけるのに必須',
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
      description: '非活性',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: ({ ...args }: CheckboxProps) => (
    <>
      <div className="ab-m-4">
        <Checkbox name="base" {...args}>
          ラベル
        </Checkbox>
      </div>
    </>
  ),
};

export const Disabled: Story = {
  render: ({ ...args }: CheckboxProps) => (
    <>
      <div className="ab-m-4">
        <Checkbox name="base" {...args} disabled={false}>
          ラベル
        </Checkbox>
      </div>
      <div className="ab-m-4">
        <Checkbox name="base" {...args} disabled={true}>
          disabled
        </Checkbox>
      </div>
    </>
  ),
};

export const Position: Story = {
  render: ({ ...args }: CheckboxProps) => (
    <div className="ab-flex ab-flex-column ab-gap-4">
      <Checkbox name="top" {...args} position="top">
        Top
      </Checkbox>
      <Checkbox name="right" {...args} position="right">
        Right
      </Checkbox>
      <Checkbox name="bottom" {...args} position="bottom">
        Bottom
      </Checkbox>
      <Checkbox name="left" {...args} position="left">
        Left
      </Checkbox>
    </div>
  ),
};

export const Icon: Story = {
  render: ({ ...args }: CheckboxProps) => (
    <Checkbox name="icon" {...args}>
      <div className="ab-flex ab-items-center">
        <img
          src="https://abukuma-css-storybook.netlify.app/assets/giftee-box-Bjg1pmYW.svg"
          className="ab-mr-1"
          style={{ height: '30px' }}
          alt="giftee Box"
        />
        Icon
      </div>
    </Checkbox>
  ),
};
