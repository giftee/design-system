import { meta, Stepper, type StepperProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Stepper/Size',
};

export const Size: Story = {
  render: (args: StepperProps) => (
    <div className="ab-flex ab-gap-8">
      <div>
        <p className="ab-mb-2">small</p>
        <Stepper {...args} size="small" />
      </div>
      <div>
        <p className="ab-mb-2">medium</p>
        <Stepper {...args} size="medium" />
      </div>
    </div>
  ),
};
