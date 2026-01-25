import { meta, Button, type ButtonProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Button/Component',
};

export const Component: Story = {
  render: ({ children, ...args }: ButtonProps) => (
    <>
      <Button {...args} component="a" href="/path">
        {children}
      </Button>
    </>
  ),
};
