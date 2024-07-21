import type { DividerProps } from '@/index';
import { Divider } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Divider',
  tags: ['autodocs'],
  component: Divider,
  args: {
    direction: 'horizontal',
    size: 'small',
  },
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      table: {
        defaultValue: {
          summary: 'horizontal',
        },
      },
      description: '方向',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: {
          summary: 'small',
        },
      },
      description: 'サイズ',
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: ({ ...args }: DividerProps) => <Divider {...args}></Divider>,
};

export const Direction: Story = {
  render: ({ ...args }: DividerProps) => (
    <div>
      <div className="ab-flex ab-flex-column ab-gap-8 ab-mb-8">
        Y<Divider {...args} direction="horizontal"></Divider>Y
      </div>
      <div className="ab-flex ab-gap-8">
        X<Divider {...args} direction="vertical"></Divider>X
      </div>
    </div>
  ),
};

export const Size: Story = {
  render: ({ ...args }: DividerProps) => (
    <div className="ab-flex ab-flex-column ab-gap-8">
      <Divider {...args} size="small"></Divider>
      <Divider {...args} size="medium"></Divider>
      <Divider {...args} size="large"></Divider>
    </div>
  ),
};
