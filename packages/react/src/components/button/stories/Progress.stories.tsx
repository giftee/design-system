import {
  meta,
  Button,
  CircularProgress,
  type ButtonProps,
  type Story,
} from './shared';

export default {
  ...meta,
  title: 'Button/Progress',
};

export const Progress: Story = {
  render: ({ children, ...args }: ButtonProps) => (
    <>
      <Button {...args} size="xsmall" disabled={true} aria-label="読み込み中">
        <CircularProgress variant="disabled" size="xsmall"></CircularProgress>
      </Button>
      <Button {...args} size="small" disabled={true} aria-label="読み込み中">
        <CircularProgress variant="disabled" size="small"></CircularProgress>
      </Button>
      <Button {...args} size="large" disabled={true} aria-label="読み込み中">
        <CircularProgress variant="disabled" size="large"></CircularProgress>
      </Button>
    </>
  ),
};
