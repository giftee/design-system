import { meta, Button, type ButtonProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Button/Disabled',
};

export const Disabled: Story = {
  render: ({ children, ...args }: ButtonProps) => (
    <>
      <Button {...args} disabled={false}>
        {children}
      </Button>
      <Button {...args} disabled={true}>
        {children}
      </Button>
    </>
  ),
};
