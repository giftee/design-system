import { meta, Textfield, type TextfieldProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Textfield/Base',
};

export const Base: Story = {
  render: ({ ...args }: TextfieldProps) => (
    <Textfield name="base" {...args}></Textfield>
  ),
};
