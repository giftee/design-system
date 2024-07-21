import { meta } from './shared';
import type { Story } from './shared';
import { angleDown } from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/Select/State',
};

export const State: Story = {
  render: (args) => {
    return `
<div id="default" class="ab-Textfield ab-mb-8">
  <label for="default" class="ab-Textfield-label">
    Default
    ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
  </label>
  <button
    id="default"
    name="field"
    class="ab-Textfield-picker ab-w-128"
  >
    <span class="ab-Textfield-picker-label">select</span>
    ${angleDown('ab-Textfield-picker-icon ab-Icon ab-Icon-small')}
  </button>
  <div class="ab-Textfield-helptext">default</div>
</div>
<div id="hover" class="ab-Textfield ab-mb-8">
  <label for="hover" class="ab-Textfield-label">
    Hover
    ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
  </label>
  <button
    id="hover"
    name="field"
    class="ab-Textfield-picker ab-w-128"
  >
    <span class="ab-Textfield-picker-label">select</span>
    ${angleDown('ab-Textfield-picker-icon ab-Icon ab-Icon-small')}
  </button>
  <div class="ab-Textfield-helptext">hover</div>
</div>
<div id="active" class="ab-Textfield ab-mb-8">
  <label for="active" class="ab-Textfield-label">
    Active
    ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
  </label>
  <button
    id="active"
    name="field"
    class="ab-Textfield-picker ab-w-128"
  >
    <span class="ab-Textfield-picker-label">select</span>
    ${angleDown('ab-Textfield-picker-icon ab-Icon ab-Icon-small')}
  </button>
  <div class="ab-Textfield-helptext">active</div>
</div>
<div id="focus" class="ab-Textfield ab-mb-8">
  <label for="focus" class="ab-Textfield-label">
    Focus
    ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
  </label>
  <button
    id="focus"
    name="field"
    class="ab-Textfield-picker ab-w-128"
  >
    <span class="ab-Textfield-picker-label">select</span>
    ${angleDown('ab-Textfield-picker-icon ab-Icon ab-Icon-small')}
  </button>
  <div class="ab-Textfield-helptext">focus</div>
</div>
<div id="disabled" class="ab-Textfield is-disabled ab-mb-8">
  <label for="disabled" class="ab-Textfield-label">
    Disabled
    ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
  </label>
  <button
    id="disabled"
    name="field"
    class="ab-Textfield-picker ab-w-128"
  >
    <span class="ab-Textfield-picker-label">select</span>
    ${angleDown('ab-Textfield-picker-icon ab-Icon ab-Icon-small')}
  </button>
  <div class="ab-Textfield-helptext">disabled</div>
</div>
<div id="error" class="ab-Textfield is-error ab-mb-8">
  <label for="error" class="ab-Textfield-label">
    Error
    ${args.required ? `<div class="ab-StatusLabel">必須</div>` : ''}
  </label>
  <button
    id="error"
    name="field"
    class="ab-Textfield-picker ab-w-128"
  >
    <span class="ab-Textfield-picker-label">select</span>
    ${angleDown('ab-Textfield-picker-icon ab-Icon ab-Icon-small')}
  </button>
  <div class="ab-Textfield-helptext">error</div>
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
