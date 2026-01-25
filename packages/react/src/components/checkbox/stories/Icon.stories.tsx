import { meta, Checkbox, type CheckboxProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Checkbox/Icon',
};

export const Icon: Story = {
  render: ({ ...args }: CheckboxProps) => (
    <Checkbox name="icon" {...args}>
      <div className="ab-flex ab-items-center">
        <img
          src="https://abukuma-css-storybook.netlify.app/assets/giftee-box-Bjg1pmYW.svg"
          className="ab-mr-1"
          style={{ height: '30px' }}
          alt="giftee Box"
          width={30}
          height={30}
        />
        Icon
      </div>
    </Checkbox>
  ),
};
