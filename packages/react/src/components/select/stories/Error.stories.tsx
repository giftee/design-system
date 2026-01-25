import { React, meta, Select, type SelectProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Select/Error',
};

export const Error: Story = {
  render: ({ ...args }: SelectProps) => {
    const [selectedOption, setSelectedOption] = React.useState('option1');

    return (
      <>
        <div className="ab-flex ab-flex-column ab-gap-12">
          <Select
            name="single-error"
            {...args}
            error={true}
            errorMessages="単一エラーメッセージ"
            options={[
              { value: 'option1', label: 'Option1' },
              { value: 'option2', label: 'Option2' },
              { value: 'option3', label: 'Option3' },
            ]}
            onChange={(event) => setSelectedOption(event.target.value)}
            value={selectedOption}
          ></Select>
          <Select
            name="multi-errors"
            {...args}
            error={true}
            errorMessages={['複数エラーメッセージ1', '複数エラーメッセージ2']}
            options={[
              { value: 'option1', label: 'Option1' },
              { value: 'option2', label: 'Option2' },
              { value: 'option3', label: 'Option3' },
            ]}
            onChange={(event) => setSelectedOption(event.target.value)}
            value={selectedOption}
          ></Select>
          <Select
            name="notError"
            {...args}
            options={[
              { value: 'option1', label: 'Option1' },
              { value: 'option2', label: 'Option2' },
              { value: 'option3', label: 'Option3' },
            ]}
            onChange={(event) => setSelectedOption(event.target.value)}
            value={selectedOption}
          ></Select>
        </div>
      </>
    );
  },
};
