import {
  meta,
  InlineAlert,
  CircleInfo,
  CircleExclamation,
  TriangleExclamation,
  CircleCheck,
  type Story,
} from './shared';

export default {
  ...meta,
  title: 'InlineAlert/Variant',
};

export const Variant: Story = {
  render: ({ children, ...args }: InlineAlert.RootProps) => (
    <div className="ab-flex ab-flex-column ab-gap-8">
      <InlineAlert.Root {...args} variant="neutral">
        <InlineAlert.Title>
          <CircleInfo className="ab-Icon ab-Icon-medium ab-text-neutral" />
          Neutral
        </InlineAlert.Title>
        <InlineAlert.Description>
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        </InlineAlert.Description>
      </InlineAlert.Root>
      <InlineAlert.Root {...args} variant="info">
        <InlineAlert.Title>
          <CircleInfo className="ab-Icon ab-Icon-medium ab-text-info" />
          Info
        </InlineAlert.Title>
        <InlineAlert.Description>
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        </InlineAlert.Description>
      </InlineAlert.Root>
      <InlineAlert.Root {...args} variant="notice">
        <InlineAlert.Title>
          <CircleExclamation className="ab-Icon ab-Icon-medium ab-text-notice" />
          Notice
        </InlineAlert.Title>
        <InlineAlert.Description>
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        </InlineAlert.Description>
      </InlineAlert.Root>
      <InlineAlert.Root {...args} variant="negative">
        <InlineAlert.Title>
          <TriangleExclamation className="ab-Icon ab-Icon-medium ab-text-negative" />
          Negative
        </InlineAlert.Title>
        <InlineAlert.Description>
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        </InlineAlert.Description>
      </InlineAlert.Root>
      <InlineAlert.Root {...args} variant="positive">
        <InlineAlert.Title>
          <CircleCheck className="ab-Icon ab-Icon-medium ab-text-positive" />
          Positive
        </InlineAlert.Title>
        <InlineAlert.Description>
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        </InlineAlert.Description>
      </InlineAlert.Root>
    </div>
  ),
};
