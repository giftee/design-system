import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  fullWidth: boolean;
  position: 'left' | 'center';
  size: 'small' | 'medium';
};

export const meta: Meta<Args> = {
  parameters: {},
  argTypes: {
    fullWidth: {
      type: 'boolean',
    },
    position: {
      control: { type: 'select' },
      options: ['left', 'center'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
  },
};

export type Story = StoryObj<Args>;

type ComponentArgs = Args & {
  id?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
};

export const createComponent = ({
  size = 'small',
  fullWidth = false,
  position = 'left',
  id = 'default',
}: ComponentArgs): string => {
  const sizeClass = `ab-Tabs-${size}`;
  const fullWidthClass = fullWidth ? 'is-fullwidth' : '';
  const positionClass =
    position === 'left' ? 'is-left' : position === 'center' ? 'is-center' : '';

  return `<div class="ab-Tabs ${sizeClass} ${fullWidthClass} ${positionClass} ab-mb-4">
      <a id="${id}" href="#1" class="ab-Tabs-item ${
        id === 'disabled' && 'is-disabled'
      }">
        <span class="ab-Tabs-item-label">${id}</span>
      </a>
      <a id="${id}" href="#2" class="ab-Tabs-item is-selected ${
        id === 'disabled' && 'is-disabled'
      }">
        <span class="ab-Tabs-item-label">${id} Selected</span>
      </a>
    </div>`;
};
