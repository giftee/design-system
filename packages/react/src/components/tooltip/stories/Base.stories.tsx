import { meta, Tooltip, type TooltipProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Tooltip/Base',
};

export const Base: Story = {
  render: ({ ...args }: TooltipProps) => (
    <Tooltip {...args}>ホバーしてください</Tooltip>
  ),
};
