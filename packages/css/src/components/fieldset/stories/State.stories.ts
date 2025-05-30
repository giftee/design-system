import { meta, createComponent, Story } from './shared';

export default {
  ...meta,
  title: 'Component/Fieldset/State',
};

export const State: Story = {
  render: (args) => {
    return `
<div class="ab-m-4">
  ${createComponent({
    ...args,
    legend: 'Default - Radio',
    id: 'default',
    children: `
      <div class="ab-Radio-wrapper position-right">
        <label for="default-yes" class="ab-Radio-label">Yes</label>
        <div class="ab-Radio">
          <input
            id="default-yes"
            name="radio-default"
            class="ab-Radio-input"
            type="radio"
            checked="true"
            value="1"
          />
          <span class="ab-Radio-radio"></span>
        </div>
      </div>
      <div class="ab-Radio-wrapper position-right">
        <label for="default-no" class="ab-Radio-label">No</label>
        <div class="ab-Radio">
          <input
            id="default-no"
            name="radio-default"
            class="ab-Radio-input"
            type="radio"
            value="0"
          />
          <span class="ab-Radio-radio"></span>
        </div>
      </div>
    `,
  })}
</div>
<div class="ab-m-4">
  ${createComponent({
    ...args,
    legend: 'Disabled - Radio',
    id: 'disabled',
    children: `
      <div class="ab-Radio-wrapper position-right">
        <label for="disabled-yes" class="ab-Radio-label">Yes</label>
        <div class="ab-Radio">
          <input
            id="disabled-yes"
            name="radio-disabled"
            class="ab-Radio-input"
            type="radio"
            checked="true"
            value="1"
            disabled
          />
          <span class="ab-Radio-radio"></span>
        </div>
      </div>
      <div class="ab-Radio-wrapper position-right">
        <label for="disabled-no" class="ab-Radio-label">No</label>
        <div class="ab-Radio">
          <input
            id="disabled-no"
            name="radio-disabled"
            class="ab-Radio-input"
            type="radio"
            value="0"
            disabled
          />
          <span class="ab-Radio-radio"></span>
        </div>
      </div>
    `,
  })}
</div>
<div class="ab-m-4">
  ${createComponent({
    ...args,
    legend: 'Default - Checkbox',
    id: 'default',
    children: `
      <div class="ab-Checkbox-wrapper position-right">
        <label for="default-hoge" class="ab-Checkbox-label">Hoge</label>
        <div class="ab-Checkbox">
          <input
            id="default-hoge"
            name="checkbox-default"
            class="ab-Checkbox-input"
            type="checkbox"
            checked="true"
            value="0"
          />
          <span class="ab-Checkbox-box"></span>
        </div>
      </div>
      <div class="ab-Checkbox-wrapper position-right">
        <label for="default-fuga" class="ab-Checkbox-label">Fuga</label>
        <div class="ab-Checkbox">
          <input
            id="default-fuga"
            name="checkbox-default"
            class="ab-Checkbox-input"
            type="checkbox"
            value="1"
          />
          <span class="ab-Checkbox-box"></span>
        </div>
      </div>
    `,
  })}
</div>
<div class="ab-m-4">
  ${createComponent({
    ...args,
    legend: 'Disabled - Checkbox',
    id: 'disabled',
    children: `
      <div class="ab-Checkbox-wrapper position-right">
        <label for="disabled-hoge" class="ab-Checkbox-label">Hoge</label>
        <div class="ab-Checkbox">
          <input
            id="disabled-hoge"
            name="checkbox-disabled"
            class="ab-Checkbox-input"
            type="checkbox"
            checked="true"
            value="0"
            disabled
          />
          <span class="ab-Checkbox-box"></span>
        </div>
      </div>
      <div class="ab-Checkbox-wrapper position-right">
        <label for="disabled-fuga" class="ab-Checkbox-label">Fuga</label>
        <div class="ab-Checkbox">
          <input
            id="disabled-fuga"
            name="checkbox-disabled"
            class="ab-Checkbox-input"
            type="checkbox"
            value="1"
            disabled
          />
          <span class="ab-Checkbox-box"></span>
        </div>
      </div>
    `,
  })}
</div>
    `;
  },
  args: {
    direction: 'horizontal',
  },
  parameters: {},
};
