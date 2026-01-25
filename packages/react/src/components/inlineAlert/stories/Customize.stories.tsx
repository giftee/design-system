import {
  meta,
  InlineAlert,
  CircleInfo,
  CircleExclamation,
  type Story,
} from './shared';

export default {
  ...meta,
  title: 'InlineAlert/Customize',
};

export const Customize: Story = {
  render: ({ children, ...args }: InlineAlert.RootProps) => (
    <div className="ab-flex ab-flex-column ab-gap-8">
      <InlineAlert.Root {...args} variant="info">
        <InlineAlert.Title>
          <CircleInfo className="ab-Icon ab-Icon-medium ab-text-neutral" />
          titleのみ
        </InlineAlert.Title>
      </InlineAlert.Root>
      <InlineAlert.Root {...args} variant="info">
        <InlineAlert.Description>description のみ</InlineAlert.Description>
      </InlineAlert.Root>
      <InlineAlert.Root {...args} variant="info">
        <InlineAlert.Title>
          <CircleExclamation className="ab-Icon ab-Icon-medium ab-text-notice" />
          title, description 両方あり
        </InlineAlert.Title>
        <InlineAlert.Description>
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        </InlineAlert.Description>
      </InlineAlert.Root>
    </div>
  ),
};
