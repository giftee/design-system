import { React, meta, Select, type SelectProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Select/Base',
};

export const Base: Story = {
  render: ({ ...args }: SelectProps) => {
    const [selectedOption, setSelectedOption] = React.useState('option1');

    return (
      <Select
        name="base"
        {...args}
        options={[
          { value: 'option1', label: 'Option1' },
          { value: 'option2', label: 'Option2' },
          { value: 'option3', label: 'Option3' },
        ]}
        onChange={(event) => setSelectedOption(event.target.value)}
        value={selectedOption}
      ></Select>
    );
  },
};
