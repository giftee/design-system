import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  direction: 'horizontal' | 'vertical';
};

export const meta: Meta = {
  parameters: {},
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
};

export type Story = StoryObj<Args>;

type ComponentArgs = Args & {
  legend: string;
  children: React.ReactNode;
  id?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
};

export const createComponent = ({
  direction = 'horizontal',
  legend,
  children,
  id = 'default',
}: ComponentArgs): string => {
  const directionClass =
    direction === 'vertical' ? `ab-Fieldset-${direction}` : '';
  const disabledClass = id === 'disabled' ? 'is-disabled' : '';

  return `
<fieldset id="${id}" class="ab-Fieldset ${directionClass} ${disabledClass}">
  <legend class="ab-Fieldset-legend">${legend}</legend>
  <div class="ab-Fieldset-content">${children}</div>
</fieldset>
  `;
};
