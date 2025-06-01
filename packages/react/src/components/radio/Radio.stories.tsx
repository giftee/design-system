import type { RadioProps } from '@/index';
import { Radio } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Radio',
  tags: ['autodocs'],
  component: Radio,
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
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: ({ ...args }: RadioProps) => (
    <div className="ab-flex ab-flex-column ab-gap-4">
      <div className="ab-flex ab-flex-row ab-gap-2">
        <Radio name="default" id="default" {...args}>
          Default
        </Radio>
      </div>
      <div className="ab-flex ab-flex-row ab-gap-2">
        <Radio name="hover" disabled={true} {...args}>
          Disabled
        </Radio>
      </div>
    </div>
  ),
};

export const Position: Story = {
  render: ({ ...args }: RadioProps) => (
    <div className="ab-flex ab-flex-column ab-gap-4">
      <Radio name="top" {...args} position="top">
        Top
      </Radio>
      <Radio name="right" {...args} position="right">
        Right
      </Radio>
      <Radio name="bottom" {...args} position="bottom">
        Bottom
      </Radio>
      <Radio name="left" {...args} position="left">
        Left
      </Radio>
    </div>
  ),
};

export const Icon: Story = {
  render: ({ ...args }: RadioProps) => (
    <Radio name="icon" {...args}>
      <div className="ab-flex ab-items-center">
        <img
          src="https://abukuma-css-storybook.netlify.app/assets/giftee-box-Bjg1pmYW.svg"
          className="ab-mr-1"
          style={{ height: '30px' }}
          alt="giftee Box"
          width={30}
          height={30}
        />
        Icon
      </div>
    </Radio>
  ),
};
