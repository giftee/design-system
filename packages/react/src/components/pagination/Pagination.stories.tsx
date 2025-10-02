import { useState } from 'react';
import type { PaginationProps } from '@/index';
import { Pagination } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Pagination',
  tags: ['autodocs'],
  component: Pagination,
  args: {
    page: 1,
    count: 10,
  },
  argTypes: {
    page: {
      control: { type: 'number', min: 1 },
      description: '現在のページ',
    },
    count: {
      control: { type: 'number', min: 1 },
      description: 'ページの総数',
    },
    onChange: {
      action: 'onChange',
      description: 'ページ変更時のコールバック関数',
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ManyPages: Story = {
  render: (args: PaginationProps) => {
    const [page, setPage] = useState(args.page);
    return (
      <Pagination
        {...args}
        page={page}
        onChange={(event, value) => {
          setPage(value);
          args.onChange?.(event, value);
        }}
      />
    );
  },
  args: {
    page: 5,
    count: 10,
    onChange: () => {},
  },
};

export const SinglePage: Story = {
  args: {
    page: 1,
    count: 1,
    onChange: () => {},
  },
};

export const FewPages: Story = {
  args: {
    page: 3,
    count: 5,
    onChange: () => {},
  },
};

export const LastPage: Story = {
  args: {
    page: 10,
    count: 10,
    onChange: () => {},
  },
};
