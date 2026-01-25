import { meta, StatusLabel, type StatusLabelProps, type Story } from './shared';

export default {
  ...meta,
  title: 'StatusLabel/Variant',
};

export const Variant: Story = {
  render: ({ children, ...args }: StatusLabelProps) => (
    <>
      <StatusLabel {...args} variant="primary">
        {children}
      </StatusLabel>
      <StatusLabel {...args} variant="outlined">
        {children}
      </StatusLabel>
      <StatusLabel {...args} variant="neutral">
        {children}
      </StatusLabel>
      <StatusLabel {...args} variant="info">
        {children}
      </StatusLabel>
      <StatusLabel {...args} variant="notice">
        {children}
      </StatusLabel>
      <StatusLabel {...args} variant="positive">
        {children}
      </StatusLabel>
      <StatusLabel {...args} variant="negative">
        {children}
      </StatusLabel>
      <StatusLabel {...args} variant="disabled">
        {children}
      </StatusLabel>
    </>
  ),
};
