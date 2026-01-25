import {
  React,
  meta,
  DatePicker,
  type DatePickerProps,
  type Story,
} from './shared';

export default {
  ...meta,
  title: 'DatePicker/Error',
};

export const Error: Story = {
  render: ({ ...args }: DatePickerProps) => {
    const [value, setValue] = React.useState('2024-01-01');

    return (
      <>
        <div className="ab-flex ab-flex-column ab-gap-12">
          <DatePicker
            name="single-error"
            {...args}
            error={true}
            errorMessages="単一エラーメッセージ"
            onChange={(event) => setValue(event.target.value)}
            value={value}
          ></DatePicker>
          <DatePicker
            name="multi-errors"
            {...args}
            error={true}
            errorMessages={['複数エラーメッセージ1', '複数エラーメッセージ2']}
            onChange={(event) => setValue(event.target.value)}
            value={value}
          ></DatePicker>
          <DatePicker
            name="notError"
            {...args}
            onChange={(event) => setValue(event.target.value)}
            value={value}
          ></DatePicker>
        </div>
      </>
    );
  },
};
