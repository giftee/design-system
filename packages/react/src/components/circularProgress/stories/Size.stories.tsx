import {
  meta,
  CircularProgress,
  type CircularProgressProps,
  type Story,
} from './shared';

export default {
  ...meta,
  title: 'CircularProgress/Size',
};

export const Size: Story = {
  render: (args: CircularProgressProps) => (
    <div className="ab-bg-rest-secondary">
      <CircularProgress {...args} size="xsmall"></CircularProgress>
      <CircularProgress {...args} size="small"></CircularProgress>
      <CircularProgress {...args} size="large"></CircularProgress>
      <CircularProgress {...args} size="xlarge"></CircularProgress>
    </div>
  ),
};
