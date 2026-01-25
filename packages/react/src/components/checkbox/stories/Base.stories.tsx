import { meta, Checkbox, type CheckboxProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Checkbox/Base',
};

export const Base: Story = {
  render: ({ ...args }: CheckboxProps) => (
    <>
      <div className="ab-m-4">
        <Checkbox name="base" {...args}>
          ラベル
        </Checkbox>
      </div>
    </>
  ),
};
