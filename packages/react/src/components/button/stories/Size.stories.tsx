import { meta, Button, type ButtonProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Button/Size',
};

export const Size: Story = {
  render: ({ children, ...args }: ButtonProps) => (
    <>
      <Button {...args} size="xsmall">
        {children}
      </Button>
      <Button {...args} size="small">
        {children}
      </Button>
      <Button {...args} size="large">
        {children}
      </Button>
    </>
  ),
};
