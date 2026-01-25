import { meta, Accordion, type Story } from './shared';

export default {
  ...meta,
  title: 'Accordion/Base',
};

export const Base: Story = {
  render: ({ ...args }: Accordion.RootProps) => (
    <Accordion.Root {...args}>
      <Accordion.Summary>Summary</Accordion.Summary>
      <Accordion.Content>
        Something small enough to escape casual notice.
      </Accordion.Content>
    </Accordion.Root>
  ),
};
