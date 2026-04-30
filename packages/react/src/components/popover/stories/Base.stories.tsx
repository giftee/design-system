import { useId, useState } from 'react';
import { meta, PopOver, Button, PopOverMenu, type Story } from './shared';

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
      <div className="ab-position-relative ab-inline-block">
        <Button
          aria-expanded={open}
          aria-controls={popoverId}
          onClick={() => setOpen((value) => !value)}
        >
          Popover Source
        </Button>
        <PopOver {...args} id={popoverId} open={open}>
          {PopOverMenu}
        </PopOver>
      </div>
    );
  },
};
