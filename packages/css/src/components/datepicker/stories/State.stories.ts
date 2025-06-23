import type { Meta } from '@storybook/html';
import { meta, type Args, type Story } from './shared';

const createComponent = (args: Args) => {
  const { required, disabledType } = args;
  const isDisabledClass = disabledType === 'class';
  const isDisabledAttribute = disabledType === 'attribute';

  return `
    <div class="ab-Textfield ${isDisabledClass ? 'is-disabled' : ''}">
      <label for="datepicker" class="ab-Textfield-label">
        生年月日
        ${required ? '<span class="ab-StatusLabel ab-StatusLabel-primary">必須</span>' : ''}
      </label>
      <span class="ab-DatePicker">
        <input
          id="datepicker"
          name="datepicker"
          type="date"
          class="ab-DatePicker-input"
          ${isDisabledAttribute ? 'disabled' : ''}
          ${required ? 'required' : ''}
        />
        <svg
          class="ab-DatePicker-icon"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
        </svg>
      </span>
    </div>
  `;
};

export default {
  title: 'CSS/DatePicker/State',
  ...meta,
} as Meta<Args>;

export const Default: Story = {
  render: createComponent,
  args: {
    required: false,
  },
};

export const Required: Story = {
  render: createComponent,
  args: {
    required: true,
  },
};

export const DisabledClass: Story = {
  render: createComponent,
  args: {
    required: false,
    disabledType: 'class',
  },
};

export const DisabledAttribute: Story = {
  render: createComponent,
  args: {
    required: false,
    disabledType: 'attribute',
  },
};

export const Error: Story = {
  render: () => `
    <div class="ab-Textfield is-error">
      <label for="datepicker-error" class="ab-Textfield-label">
        生年月日
        <span class="ab-StatusLabel ab-StatusLabel-primary">必須</span>
      </label>
      <span class="ab-DatePicker">
        <input
          id="datepicker-error"
          name="datepicker-error"
          type="date"
          class="ab-DatePicker-input"
          required
        />
        <svg
          class="ab-DatePicker-icon"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
        </svg>
      </span>
      <div class="ab-Textfield-error-message">生年月日を入力してください</div>
    </div>
  `,
};

export const WithHelptext: Story = {
  render: () => `
    <div class="ab-Textfield">
      <label for="datepicker-help" class="ab-Textfield-label">
        生年月日
      </label>
      <span class="ab-DatePicker">
        <input
          id="datepicker-help"
          name="datepicker-help"
          type="date"
          class="ab-DatePicker-input"
        />
        <svg
          class="ab-DatePicker-icon"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
        </svg>
      </span>
      <div class="ab-Textfield-helptext">YYYY-MM-DD形式で入力してください</div>
    </div>
  `,
};
