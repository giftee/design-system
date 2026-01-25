import { meta, Checkbox, type CheckboxProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Checkbox/Disabled',
};

export const Disabled: Story = {
  render: ({ ...args }: CheckboxProps) => (
    <>
      <div className="ab-m-4">
        <Checkbox name="base" {...args} disabled={false}>
          ラベル
        </Checkbox>
      </div>
      <div className="ab-m-4">
        <Checkbox name="base" {...args} disabled={true}>
          disabled
        </Checkbox>
      </div>
    </>
  ),
};
