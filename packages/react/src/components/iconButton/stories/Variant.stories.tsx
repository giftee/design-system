import { meta, IconButton, type IconButtonProps, type Story } from './shared';

export default {
  ...meta,
  title: 'IconButton/Variant',
};

export const Variant: Story = {
  render: ({ children, ...args }: IconButtonProps) => (
    <>
      <IconButton {...args} variant="default">
        {children}
      </IconButton>
      <IconButton {...args} variant="outlined">
        {children}
      </IconButton>
      <IconButton {...args} variant="neutral">
        {children}
      </IconButton>
      <IconButton {...args} variant="text">
        {children}
      </IconButton>
      <IconButton {...args} variant="negative">
        {children}
      </IconButton>
    </>
  ),
};
