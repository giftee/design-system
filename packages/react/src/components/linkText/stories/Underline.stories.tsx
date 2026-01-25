import { meta, LinkText, type LinkTextProps, type Story } from './shared';

export default {
  ...meta,
  title: 'LinkText/Underline',
};

export const Underline: Story = {
  render: ({ ...args }: LinkTextProps) => (
    <>
      <div className="ab-flex ab-flex-row ab-gap-8">
        <LinkText {...args} underline={true}>
          Default Underline
        </LinkText>
        <LinkText {...args} underline={false}>
          No Underline
        </LinkText>
      </div>
    </>
  ),
};
