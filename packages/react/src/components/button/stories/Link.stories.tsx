import { meta, Button, type ButtonProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Button/Link',
};

export const Link: Story = {
  render: ({ children, ...args }: ButtonProps) => (
    <>
      <Button {...args} href="/">
        {children}
      </Button>
    </>
  ),
};
