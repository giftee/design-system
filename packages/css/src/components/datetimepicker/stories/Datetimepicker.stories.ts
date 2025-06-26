import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/DateTimePicker/State',
};

export const State: Story = {
  render: (args) => {
    return `
<div id="default" class="ab-Textfield ab-mb-8">
  <label for="default" class="ab-Textfield-label">
    Default
    ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
  </label>
  <span class="ab-DateTimePicker">
    <input type="datetime-local" name="default" id="default" class="ab-DateTimePicker-input" />
  </span>
  <div class="ab-Textfield-helptext">default</div>
</div>
<div id="hover" class="ab-Textfield ab-mb-8">
  <label for="hover" class="ab-Textfield-label">
    Hover
    ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
  </label>
  <span class="ab-DateTimePicker">
    <input type="datetime-local" name="hover" id="hover" class="ab-DateTimePicker-input" />
  </span>
  <div class="ab-Textfield-helptext">hover</div>
</div>
<div id="active" class="ab-Textfield ab-mb-8">
  <label for="active" class="ab-Textfield-label">
    Active
    ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
  </label>
  <span class="ab-DateTimePicker">
    <input type="datetime-local" name="active" id="active" class="ab-DateTimePicker-input" />
  </span>
  <div class="ab-Textfield-helptext">active</div>
</div>
<div id="focus" class="ab-Textfield ab-mb-8">
  <label for="focus" class="ab-Textfield-label">
    Focus
    ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
  </label>
  <span class="ab-DateTimePicker">
    <input type="datetime-local" name="focus" id="focus" class="ab-DateTimePicker-input" />
  </span>
  <div class="ab-Textfield-helptext">focus</div>
</div>
<div class="ab-Textfield is-disabled ab-mb-8">
  <label for="disabled" class="ab-Textfield-label">
    Disabled
    ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
  </label>
  <span class="ab-DateTimePicker">
    <input type="datetime-local" name="disabled" id="disabled" disabled class="ab-DateTimePicker-input" />
  </span>
  <div class="ab-Textfield-helptext">disabled</div>
</div>
<div id="error" class="ab-Textfield is-error ab-mb-8">
  <label for="error" class="ab-Textfield-label">
    Error
    ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
  </label>
  <span class="ab-DateTimePicker">
    <input type="datetime-local" name="error" id="error" class="ab-DateTimePicker-input" />
  </span>
  <div class="ab-Textfield-error-message">error</div>
  <div class="ab-Textfield-error-message">error</div>
  <div class="ab-Textfield-helptext">helptext</div>
</div>
  `;
  },
  args: {
    required: false,
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
