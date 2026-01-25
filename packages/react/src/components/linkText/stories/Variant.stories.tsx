import { meta, LinkText, type LinkTextProps, type Story } from './shared';

export default {
  ...meta,
  title: 'LinkText/Variant',
};

export const Variant: Story = {
  render: ({ ...args }: LinkTextProps) => (
    <div className="ab-flex ab-flex-row ab-gap-8">
      <LinkText {...args} variant="default">
        Default
      </LinkText>
      <LinkText {...args} variant="brand">
        Brand
      </LinkText>
    </div>
  ),
};
