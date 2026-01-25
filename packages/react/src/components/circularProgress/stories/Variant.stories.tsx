import { meta, CircularProgress, type CircularProgressProps, type Story } from './shared';

export default {
  ...meta,
  title: 'CircularProgress/Variant',
};

export const Variant: Story = {
  render: (args: CircularProgressProps) => (
    <div className="ab-bg-rest-secondary">
      <CircularProgress {...args} variant="brand"></CircularProgress>
      <CircularProgress {...args} variant="disabled"></CircularProgress>
    </div>
  ),
};
