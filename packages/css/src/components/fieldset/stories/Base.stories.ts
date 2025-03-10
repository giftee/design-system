import type { StoryObj } from '@storybook/html';
import { meta } from './shared';

export default {
  ...meta,
  title: 'Component/Fieldset/Base',
};

type Story = StoryObj;

export const Default: Story = {
  render: () => `
<div class="ab-m-4">
  <fieldset class="ab-Fieldset">
    <legend class="ab-Fieldset-legend">RadioGroup</legend>
    <div class="ab-Fieldset-content">
      <div class="ab-Radio-wrapper position-right">
        <label for="yes" class="ab-Radio-label">Yes</label>
        <div class="ab-Radio">
          <input
            id="yes"
            name="radio-sample"
            class="ab-Radio-input"
            type="radio"
            checked="true"
            value="1"
          />
          <span class="ab-Radio-radio"></span>
        </div>
      </div>
      <div class="ab-Radio-wrapper position-right">
        <label for="no" class="ab-Radio-label">No</label>
        <div class="ab-Radio">
          <input
            id="no"
            name="radio-sample"
            class="ab-Radio-input"
            type="radio"
            value="0"
          />
          <span class="ab-Radio-radio"></span>
        </div>
      </div>
    </div>
  </fieldset>
</div>
<div class="ab-m-4">
  <fieldset class="ab-Fieldset">
    <legend class="ab-Fieldset-legend">CheckboxGroup</legend>
    <div class="ab-Fieldset-content">
      <div class="ab-Checkbox-wrapper position-right">
        <label for="hoge" class="ab-Checkbox-label">Hoge</label>
        <div class="ab-Checkbox">
          <input
            id="hoge"
            name="checkbox-sample"
            class="ab-Checkbox-input"
            type="checkbox"
            value="0"
          />
          <span class="ab-Checkbox-box"></span>
        </div>
      </div>
      <div class="ab-Checkbox-wrapper position-right">
        <label for="fuga" class="ab-Checkbox-label">Fuga</label>
        <div class="ab-Checkbox">
          <input
            id="fuga"
            name="checkbox-sample"
            class="ab-Checkbox-input"
            type="checkbox"
            value="1"
          />
          <span class="ab-Checkbox-box"></span>
        </div>
      </div>
    </div>
  </fieldset>
</div>
  `,
};
