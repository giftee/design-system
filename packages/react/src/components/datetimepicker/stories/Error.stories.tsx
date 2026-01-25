import { React, meta, DateTimePicker, type DateTimePickerProps, type Story } from './shared';

export default {
  ...meta,
  title: 'DateTimePicker/Error',
};

export const Error: Story = {
  render: ({ ...args }: DateTimePickerProps) => {
    const [value, setValue] = React.useState('2024-01-01T12:00');

    return (
      <>
        <div className="ab-flex ab-flex-column ab-gap-12">
          <DateTimePicker
            name="single-error"
            {...args}
            error={true}
            errorMessages="単一エラーメッセージ"
            onChange={(event) => setValue(event.target.value)}
            value={value}
          ></DateTimePicker>
          <DateTimePicker
            name="multi-errors"
            {...args}
            error={true}
            errorMessages={['複数エラーメッセージ1', '複数エラーメッセージ2']}
            onChange={(event) => setValue(event.target.value)}
            value={value}
          ></DateTimePicker>
          <DateTimePicker
            name="notError"
            {...args}
            onChange={(event) => setValue(event.target.value)}
            value={value}
          ></DateTimePicker>
        </div>
      </>
    );
  },
};
