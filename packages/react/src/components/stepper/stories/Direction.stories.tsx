import { meta, Stepper, type StepperProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Stepper/Direction',
};

export const Direction: Story = {
  render: (args: StepperProps) => (
    <div className="ab-flex ab-gap-8">
      <div>
        <p className="ab-mb-2">Horizontal</p>
        <Stepper {...args} direction="horizontal" />
      </div>
      <div>
        <p className="ab-mb-2">Vertical</p>
        <Stepper {...args} direction="vertical" />
      </div>
    </div>
  ),
};
