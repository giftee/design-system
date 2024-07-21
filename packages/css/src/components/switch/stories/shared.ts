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

  return `
    <label id="${id}" class="ab-Switch-wrapper ${positionClass}">
      <div class="ab-Switch-label">${children}</div>
      <div class="ab-Switch">
        <input id="${id}" type="checkbox" class="ab-Switch-input" ${
          checked ? 'checked' : ''
        } ${id === 'disabled' ? 'disabled' : ''} />
        <span class="ab-Switch-slider"></span>
        <span class="ab-Switch-mark"></span>
      </div>
    </label>
  `;
};
