import type { Meta, StoryObj } from '@storybook/html';

export type Args = {};

type ComponentArgs = {
  buttonId: string;
  popoverId: string;
  positionClass: string;
};

export const meta: Meta<Args> = {
  argTypes: {},
  parameters: {},
};

export type Story = StoryObj<Args>;

export const createComponent = ({
  buttonId,
  popoverId,
  positionClass,
}: ComponentArgs): string => `
  <div class="ab-position-relative">
    <button
      id="${buttonId}"
      type="button"
      class="ab-Button"
      aria-expanded="false"
      aria-controls="${popoverId}"
    >
      Popover Source
    </button>
    <div id="${popoverId}" class="ab-Popover ${positionClass}" hidden>
      <nav aria-label="Popover links">
        <ul class="ab-Menu ab-Menu-small">
          <li class="ab-Menu-item">
            <a href="#" class="ab-Menu-item-link">MenuItem1</a>
          </li>
          <li class="ab-Menu-item">
            <a href="#" class="ab-Menu-item-link">MenuItem2</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
`;

export const interactionScript = `
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.ab-Button');

    buttons.forEach((button) => {
      if (!(button instanceof HTMLButtonElement)) return;

      const popoverId = button.getAttribute('aria-controls');
      if (!popoverId) return;

      const popover = document.getElementById(popoverId);
      if (!popover) return;

      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        button.setAttribute('aria-expanded', String(!isExpanded));
        popover.hidden = isExpanded;
        popover.classList.toggle('is-open', !isExpanded);
      });
    });
  });
</script>
`;
