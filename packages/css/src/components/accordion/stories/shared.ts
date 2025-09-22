import type { Meta, StoryObj } from '@storybook/html';

export type Args = {
  size: 'small' | 'medium';
};

export const meta: Meta<Args> = {
  parameters: {},
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
  },
};

export type Story = StoryObj<Args>;

type ComponentArgs = Args & {
  summary?: string;
  details?: string;
  id?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
};

export const createComponent = ({
  size = 'medium',
  summary = 'summary',
  details = 'Something small enough to escape casual notice.',
  id = 'default',
}: ComponentArgs): string => {
  const sizeClass = `ab-Accordion-${size}`;
  const disabledClass = id === 'disabled' ? 'is-disabled' : '';

  return `<details id=${id} class="ab-Accordion ${sizeClass} ${disabledClass}">
      <summary class="ab-Accordion-summary">${summary}</summary>
      <div class="ab-Accordion-content">
        ${details}
      </div>
    </details>`;
};
