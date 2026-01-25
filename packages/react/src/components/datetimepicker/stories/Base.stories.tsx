import { React, meta, DateTimePicker, type DateTimePickerProps, type Story } from './shared';

export default {
  ...meta,
  title: 'DateTimePicker/Base',
};

export const Base: Story = {
  render: ({ ...args }: DateTimePickerProps) => {
    const [value, setValue] = React.useState('2024-01-01T12:00');

    return (
      <DateTimePicker
        name="base"
        {...args}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      ></DateTimePicker>
    );
  },
};
