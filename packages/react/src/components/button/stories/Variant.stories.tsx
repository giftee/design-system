import { meta, Button, type ButtonProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Button/Variant',
};

export const Variant: Story = {
  render: ({ children, ...args }: ButtonProps) => (
    <>
      <Button {...args} variant="default">
        {children}
      </Button>
      <Button {...args} variant="outlined">
        {children}
      </Button>
      <Button {...args} variant="neutral">
        {children}
      </Button>
      <Button {...args} variant="negative">
        {children}
      </Button>
      <Button {...args} variant="text">
        {children}
      </Button>
    </>
  ),
};
