import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  checked: boolean;
  position: 'top' | 'left' | 'right' | 'bottom';
};

export const meta: Meta<Args> = {
  parameters: {},
  argTypes: {
    checked: {
      type: 'boolean',
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'left', 'right', 'bottom'],
    },
  },
};

export type Story = StoryObj<Args>;

type ComponentArgs = Args & {
  children?: React.ReactNode;
  id?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
  name?: string;
};

export const createComponent = ({
  checked = false,
  children = '',
  position = 'right',
  id = 'default',
  name = '',
}: ComponentArgs): string => {
  const positionClass = `position-${position}`;

  return `<div id="${id}" class="ab-Checkbox-wrapper ${positionClass} ${
    id === 'disabled' ? 'is-disabled' : ''
  }">
  <label for="${name}" class="ab-Checkbox-label">${children}</label>
  <div class="ab-Checkbox">
    <input type="checkbox" name="${name}" id="${name}" ${
      checked ? 'checked' : ''
    } class="ab-Checkbox-input" />
    <span class="ab-Checkbox-box"></span>
  </div>
</div>`;
};
