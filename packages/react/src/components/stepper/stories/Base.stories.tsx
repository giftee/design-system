import { meta, Stepper, type StepperProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Stepper/Base',
};

export const Base: Story = {
  render: (args: StepperProps) => (
    <div className="ab-m-8">
      <Stepper {...args} />
    </div>
  ),
};
