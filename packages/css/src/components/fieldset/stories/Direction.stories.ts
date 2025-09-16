import { meta, createComponent, Story } from './shared';

export default {
  ...meta,
  title: 'Component/Fieldset/Direction',
};

export const Direction: Story = {
  render: (args) => `
<div class="ab-m-4">
  ${createComponent({
    ...args,
    legend: 'Horizontal',
    direction: 'horizontal',
    children: `
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
      `,
  })}
</div>
<div class="ab-m-4">
  ${createComponent({
    ...args,
    legend: 'Vertical',
    direction: 'vertical',
    children: `
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
      `,
  })}
</div>
  `,
};
