import type { TypographyProps } from '@/index';
import { Typography } from '@/index';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Typography',
  tags: ['autodocs'],
  component: Typography,
  args: {
    variant: 'headline-l',
    fontWeight: 'normal',
    color: 'default',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'headline-l',
        'headline-m',
        'headline-s',
        'body-m',
        'body-s',
        'body-xs',
      ],
      table: {
        defaultValue: {
          summary: 'body-m',
        },
      },
      description: '種類',
    },
    fontWeight: {
      control: { type: 'select' },
      options: ['normal', 'bold'],
      table: {
        defaultValue: {
          summary: 'normal',
        },
      },
      description: 'font-weight',
    },
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'secondary',
        'brand',
        'contrast',
        'info',
        'notice',
        'positive',
        'negative',
      ],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
      description: 'color',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Weight: Story = {
  render: ({ ...args }: TypographyProps) => (
    <>
      <Typography {...args} fontWeight="bold">
        Bold
      </Typography>
      <Typography {...args} fontWeight="normal">
        Normal
      </Typography>
    </>
  ),
};

export const Color: Story = {
  render: ({ ...args }: TypographyProps) => (
    <div className="ab-bg-rest-secondary">
      <Typography {...args} color="default">
        Default
      </Typography>
      <Typography {...args} color="secondary">
        Secondary
      </Typography>
      <Typography {...args} color="brand">
        Brand
      </Typography>
      <Typography {...args} color="contrast">
        Contrast
      </Typography>
      <Typography {...args} color="info">
        Info
      </Typography>
      <Typography {...args} color="notice">
        Notice
      </Typography>
      <Typography {...args} color="positive">
        Positive
      </Typography>
      <Typography {...args} color="negative">
        Negative
      </Typography>
    </div>
  ),
};

export const Component: Story = {
  render: ({ ...args }: TypographyProps) => (
    <>
      <Typography {...args} component="p">
        任意のHTMLタグを指定できます。
      </Typography>
    </>
  ),
};
