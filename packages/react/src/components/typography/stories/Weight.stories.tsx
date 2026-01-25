import { meta, Typography, type TypographyProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Typography/Weight',
};

export const Weight: Story = {
  render: ({ ...args }: TypographyProps) => (
    <>
      <Typography {...args} fontWeight="bold">
        Bold
      </Typography>
      <Typography {...args} fontWeight="normal">
        Normal
      </Typography>
    </>
  ),
};
