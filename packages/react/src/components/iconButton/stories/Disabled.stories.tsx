import { meta, IconButton, type IconButtonProps, type Story } from './shared';

export default {
  ...meta,
  title: 'IconButton/Disabled',
};

export const Disabled: Story = {
  render: ({ children, ...args }: IconButtonProps) => (
    <>
      <IconButton {...args} disabled={false}>
        {children}
      </IconButton>
      <IconButton {...args} disabled={true}>
        {children}
      </IconButton>
    </>
  ),
};
