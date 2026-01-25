import { meta, Skeleton, type SkeletonProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Skeleton/Variant',
};

export const Variant: Story = {
  render: (args: SkeletonProps) => (
    <div>
      <div>
        <span className="ab-text-body-m ab-font-bold">text</span>
        <br />
        <div className="ab-flex ab-flex-column ab-gap-4">
          <Skeleton {...args} variant="text" />
          <Skeleton {...args} variant="text" />
        </div>
        <br />
      </div>
      <div>
        <span className="ab-text-body-m ab-font-bold">circular</span>
        <br />
        <div className="ab-flex ab-gap-4">
          <Skeleton {...args} variant="circular" width={48} height={48} />
          <Skeleton {...args} variant="circular" width={48} height={48} />
        </div>
        <br />
      </div>
      <div>
        <span className="ab-text-body-m ab-font-bold">rectangular</span>
        <br />
        <div className="ab-flex ab-gap-4">
          <Skeleton {...args} variant="rectangular" width={280} height={212} />
          <Skeleton {...args} variant="rectangular" width={280} height={212} />
        </div>
      </div>
      <br />
    </div>
  ),
};
