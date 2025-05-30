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
    legend: 'Default',
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
    legend: 'Hover',
    id: 'hover',
    children: `
      <div class="ab-Radio-wrapper position-right">
        <label for="hover-yes" class="ab-Radio-label">Yes</label>
        <div class="ab-Radio">
          <input
            id="hover-yes"
            name="radio-hover"
            class="ab-Radio-input"
            type="radio"
            checked="true"
            value="1"
          />
          <span class="ab-Radio-radio"></span>
        </div>
      </div>
      <div class="ab-Radio-wrapper position-right">
        <label for="hover-no" class="ab-Radio-label">No</label>
        <div class="ab-Radio">
          <input
            id="hover-no"
            name="radio-hover"
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
    legend: 'Focus',
    id: 'focus',
    children: `
      <div class="ab-Radio-wrapper position-right">
        <label for="focus-yes" class="ab-Radio-label">Yes</label>
        <div class="ab-Radio">
          <input
            id="focus-yes"
            name="radio-focus"
            class="ab-Radio-input"
            type="radio"
            checked="true"
            value="1"
          />
          <span class="ab-Radio-radio"></span>
        </div>
      </div>
      <div class="ab-Radio-wrapper position-right">
        <label for="focus-no" class="ab-Radio-label">No</label>
        <div class="ab-Radio">
          <input
            id="focus-no"
            name="radio-focus"
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
    legend: 'Active',
    id: 'active',
    children: `
      <div class="ab-Radio-wrapper position-right">
        <label for="active-yes" class="ab-Radio-label">Yes</label>
        <div class="ab-Radio">
          <input
            id="active-yes"
            name="radio-active"
            class="ab-Radio-input"
            type="radio"
            checked="true"
            value="1"
          />
          <span class="ab-Radio-radio"></span>
        </div>
      </div>
      <div class="ab-Radio-wrapper position-right">
        <label for="active-no" class="ab-Radio-label">No</label>
        <div class="ab-Radio">
          <input
            id="active-no"
            name="radio-active"
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
    legend: 'Disabled',
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
    `;
  },
  args: {
    direction: 'horizontal',
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focusVisible: '#focus',
    },
  },
};
