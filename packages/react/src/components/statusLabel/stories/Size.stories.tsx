import { meta, StatusLabel, type StatusLabelProps, type Story } from './shared';

export default {
  ...meta,
  title: 'StatusLabel/Size',
};

export const Size: Story = {
  render: ({ children, ...args }: StatusLabelProps) => (
    <>
      <StatusLabel {...args} size="small">
        {children}
      </StatusLabel>
      <StatusLabel {...args} size="medium">
        {children}
      </StatusLabel>
      <StatusLabel {...args} size="large">
        {children}
      </StatusLabel>
    </>
  ),
};
