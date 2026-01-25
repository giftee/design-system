import { meta, Accordion, type Story } from './shared';

export default {
  ...meta,
  title: 'Accordion/Disabled',
};

export const Disabled: Story = {
  render: ({ ...args }: Accordion.RootProps) => (
    <div>
      <Accordion.Root {...args} disabled={false}>
        <Accordion.Summary>Summary</Accordion.Summary>
        <Accordion.Content>
          Something small enough to escape casual notice.
        </Accordion.Content>
      </Accordion.Root>
      <Accordion.Root {...args} disabled={true}>
        <Accordion.Summary>Disabled Summary</Accordion.Summary>
        <Accordion.Content>
          Something small enough to escape casual notice.
        </Accordion.Content>
      </Accordion.Root>
    </div>
  ),
};
