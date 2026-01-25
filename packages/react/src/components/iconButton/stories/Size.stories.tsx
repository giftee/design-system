import { meta, IconButton, type IconButtonProps, type Story } from './shared';

export default {
  ...meta,
  title: 'IconButton/Size',
};

export const Size: Story = {
  render: ({ children, ...args }: IconButtonProps) => (
    <>
      <IconButton {...args} size="small">
        {children}
      </IconButton>
      <IconButton {...args} size="large">
        {children}
      </IconButton>
    </>
  ),
};
