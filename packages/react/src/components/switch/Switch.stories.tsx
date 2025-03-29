import type { SwitchProps } from '@/index';
import { Switch } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Switch',
  tags: ['autodocs'],
  component: Switch,
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
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: ({ ...args }: SwitchProps) => (
    <div className="ab-flex ab-flex-column ab-gap-4">
      <div className="ab-flex ab-flex-row ab-gap-2">
        <Switch id="default" {...args}>
          Default
        </Switch>
      </div>
      <div className="ab-flex ab-flex-row ab-gap-2">
        <Switch disabled={true} {...args}>
          Disabled
        </Switch>
      </div>
    </div>
  ),
};

export const Position: Story = {
  render: ({ ...args }: SwitchProps) => (
    <div className="ab-flex ab-flex-column ab-gap-4">
      <Switch {...args} position="top">
        Top
      </Switch>
      <Switch {...args} position="right">
        Right
      </Switch>
      <Switch {...args} position="bottom">
        Bottom
      </Switch>
      <Switch {...args} position="left">
        Left
      </Switch>
    </div>
  ),
};
