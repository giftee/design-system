import { meta, Typography, type TypographyProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Typography/Component',
};

export const Component: Story = {
  render: ({ ...args }: TypographyProps) => (
    <>
      <Typography {...args} component="p">
        任意のHTMLタグを指定できます。
      </Typography>
    </>
  ),
};
