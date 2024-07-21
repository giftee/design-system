import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  checked: boolean;
  position: 'top' | 'left' | 'right' | 'bottom';
};

export const meta: Meta<Args> = {
  argTypes: {
    checked: {
      type: 'boolean',
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'left', 'right', 'bottom'],
    },
  },
  parameters: {},
};

export type Story = StoryObj<Args>;

type ComponentArgs = Args & {
  children?: React.ReactNode;
  id?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
};

export const createComponent = ({
  checked = false,
  children = '',
  position = 'right',
  id = 'default',
}: ComponentArgs): string => {
  const positionClass = `position-${position}`;

  return `<div id="${id}" class="ab-Radio-wrapper ${positionClass} ${
    id === 'disabled' && 'is-disabled'
  }">
  <label for="${id}" class="ab-Radio-label">${children}</label>
  <div class="ab-Radio">
    <input type="radio" id="${id}" ${
      checked && 'checked=true'
    } class="ab-Radio-input" />
    <span class="ab-Radio-radio"></span>
  </div>
</div>`;
};
