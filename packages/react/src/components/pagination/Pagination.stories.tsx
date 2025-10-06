import { useState } from 'react';
import type { PaginationProps } from '@/index';
import { Pagination } from '@/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Pagination',
  tags: ['autodocs'],
  component: Pagination,
  args: {
    currentPage: 1,
    totalPage: 10,
  },
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: '現在のページ',
    },
    totalPage: {
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
    const [page, setPage] = useState(args.currentPage);
    return (
      <Pagination
        {...args}
        currentPage={page}
        onChange={(event, value) => {
          setPage(value);
          args.onChange?.(event, value);
        }}
      />
    );
  },
  args: {
    currentPage: 5,
    totalPage: 10,
    onChange: () => {},
  },
};

export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPage: 1,
    onChange: () => {},
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 3,
    totalPage: 5,
    onChange: () => {},
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPage: 10,
    onChange: () => {},
  },
};
