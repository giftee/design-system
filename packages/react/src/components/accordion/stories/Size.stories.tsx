import { meta, Accordion, type Story } from './shared';

export default {
  ...meta,
  title: 'Accordion/Size',
};

export const Size: Story = {
  render: () => (
    <>
      <div className="ab-mb-12">
        <Accordion.Root size="small">
          <Accordion.Summary>Small</Accordion.Summary>
          <Accordion.Content>
            Something small enough to escape casual notice.
          </Accordion.Content>
        </Accordion.Root>
      </div>
      <div className="ab-mb-12">
        <Accordion.Root size="medium">
          <Accordion.Summary>Medium(Default)</Accordion.Summary>
          <Accordion.Content>
            Something small enough to escape casual notice.
          </Accordion.Content>
        </Accordion.Root>
      </div>
    </>
  ),
};
