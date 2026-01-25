import { meta, Radio, type RadioProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Radio/Base',
};

export const Base: Story = {
  render: ({ ...args }: RadioProps) => (
    <div className="ab-flex ab-flex-column ab-gap-4">
      <div className="ab-flex ab-flex-row ab-gap-2">
        <Radio name="default" id="default" {...args}>
          Default
        </Radio>
      </div>
      <div className="ab-flex ab-flex-row ab-gap-2">
        <Radio name="hover" disabled={true} {...args}>
          Disabled
        </Radio>
      </div>
    </div>
  ),
};
