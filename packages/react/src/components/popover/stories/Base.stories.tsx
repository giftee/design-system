import { meta, PopOver, PopOverMenu, type Story } from './shared';

export default {
  ...meta,
  title: 'PopOver/Base',
};

export const Base: Story = {
  args: {
    placement: 'bottom',
  },

  render: (args) => (
    <PopOver.Root>
      <PopOver.Trigger className="ab-Button">Popover Source</PopOver.Trigger>
      <PopOver.Content {...args}>{PopOverMenu}</PopOver.Content>
    </PopOver.Root>
  ),
};
