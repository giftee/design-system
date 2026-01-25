import { React, meta, DatePicker, type DatePickerProps, type Story } from './shared';

export default {
  ...meta,
  title: 'DatePicker/Base',
};

export const Base: Story = {
  render: ({ ...args }: DatePickerProps) => {
    const [value, setValue] = React.useState('2024-01-01');

    return (
      <DatePicker
        name="base"
        {...args}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      ></DatePicker>
    );
  },
};
