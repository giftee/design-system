import { useState } from 'react';
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
    checked: {
      control: 'boolean',
      description: 'チェック状態',
    },
    disabled: {
      control: 'boolean',
      description: '無効状態',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

const InteractiveSwitch = ({ id, disabled, position, children }: Partial<SwitchProps>) => {
  const [checked, setChecked] = useState(false);
  
  return (
    <Switch 
      id={id} 
      checked={checked} 
      onChange={(e) => setChecked(e.target.checked)} 
      disabled={disabled}
      position={position}
    >
      {children}
    </Switch>
  );
};

export const Base: Story = {
  render: ({ ...args }: SwitchProps) => (
    <div className="ab-flex ab-flex-column ab-gap-4">
      <div className="ab-flex ab-flex-row ab-gap-2">
        <InteractiveSwitch id="default" {...args}>
          Default
        </InteractiveSwitch>
      </div>
      <div className="ab-flex ab-flex-row ab-gap-2">
        <InteractiveSwitch disabled={true} {...args}>
          Disabled
        </InteractiveSwitch>
      </div>
    </div>
  ),
};

export const Position: Story = {
  render: ({ ...args }: SwitchProps) => (
    <div className="ab-flex ab-flex-column ab-gap-4">
      <InteractiveSwitch {...args} position="top">
        Top
      </InteractiveSwitch>
      <InteractiveSwitch {...args} position="right">
        Right
      </InteractiveSwitch>
      <InteractiveSwitch {...args} position="bottom">
        Bottom
      </InteractiveSwitch>
      <InteractiveSwitch {...args} position="left">
        Left
      </InteractiveSwitch>
    </div>
  ),
};
