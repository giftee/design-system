import { meta, LinkText, type LinkTextProps, type Story } from './shared';

export default {
  ...meta,
  title: 'LinkText/Disabled',
};

export const Disabled: Story = {
  render: ({ ...args }: LinkTextProps) => (
    <>
      <div className="ab-flex ab-flex-row ab-gap-8">
        <LinkText {...args} variant="default" disabled={false}>
          Default
        </LinkText>
        <LinkText {...args} variant="default" disabled={true}>
          Default Disabled
        </LinkText>
      </div>
      <div className="ab-flex ab-flex-row ab-gap-8">
        <LinkText {...args} variant="brand" disabled={false}>
          Brand
        </LinkText>
        <LinkText {...args} variant="brand" disabled={true}>
          Brand Disabled
        </LinkText>
      </div>
    </>
  ),
};
