import { meta, Typography, type TypographyProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Typography/Color',
};

export const Color: Story = {
  render: ({ ...args }: TypographyProps) => (
    <div className="ab-bg-rest-secondary">
      <Typography {...args} color="default">
        Default
      </Typography>
      <Typography {...args} color="secondary">
        Secondary
      </Typography>
      <Typography {...args} color="brand">
        Brand
      </Typography>
      <Typography {...args} color="contrast">
        Contrast
      </Typography>
      <Typography {...args} color="info">
        Info
      </Typography>
      <Typography {...args} color="notice">
        Notice
      </Typography>
      <Typography {...args} color="positive">
        Positive
      </Typography>
      <Typography {...args} color="negative">
        Negative
      </Typography>
    </div>
  ),
};
