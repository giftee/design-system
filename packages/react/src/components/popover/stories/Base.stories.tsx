import { useId, useState } from 'react';
import { meta, PopOver, PopOverMenu, type Story } from './shared';

export default {
  ...meta,
  title: 'PopOver/Base',
};

export const Base: Story = {
  args: {
    open: false,
    placement: 'bottom',
  },

  render: (args) => {
    const [open, setOpen] = useState(args.open ?? false);
    const popoverId = useId();

    return (
      <PopOver.Root open={open} onOpenChange={setOpen} popoverId={popoverId}>
        <PopOver.Trigger className="ab-Button">Popover Source</PopOver.Trigger>
        <PopOver.Content {...args} open={open}>
          {PopOverMenu}
        </PopOver.Content>
      </PopOver.Root>
    );
  },
};
