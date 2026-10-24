import { expect, within } from 'storybook/test';
import { meta, Divider, type Story } from './shared';

export default {
  ...meta,
  title: 'Divider/Interaction',
};

export const Orientation: Story = {
  render: (args) => (
    <>
      <Divider {...args} direction="horizontal" />
      <Divider {...args} direction="vertical" />
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [horizontal, vertical] = canvas.getAllByRole('separator');

    await expect(horizontal).not.toHaveAttribute('aria-orientation');
    await expect(vertical).toHaveAttribute('aria-orientation', 'vertical');
  },
};
