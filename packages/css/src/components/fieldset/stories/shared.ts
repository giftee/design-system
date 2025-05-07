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
};

export const createComponent = ({
  direction = 'horizontal',
  legend,
  children,
}: ComponentArgs): string => {
  const directionClass =
    direction === 'vertical' ? `ab-Fieldset-${direction}` : '';
  console.log('direction', direction);
  console.log('directionClass', directionClass);

  return `
<fieldset class="ab-Fieldset ${directionClass}">
  <legend class="ab-Fieldset-legend">${legend}</legend>
  <div class="ab-Fieldset-content">${children}</div>
</fieldset>
  `;
};
