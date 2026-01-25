import { meta, Typography, type Story } from './shared';

export default {
  ...meta,
  title: 'Typography/Variant',
};

export const Variant: Story = {
  render: () => (
    <>
      <Typography variant="headline-l">Headline-L（大見出し）</Typography>
      <Typography variant="headline-m">Headline-M（中見出し）</Typography>
      <Typography variant="headline-s">Headline-S（小見出し）</Typography>
      <Typography variant="body-m">Body-M（文章）</Typography>
      <Typography variant="body-s">Body-S（補足）</Typography>
      <Typography variant="body-xs">Body-XS（補足）</Typography>
    </>
  ),
};
