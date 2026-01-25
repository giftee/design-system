import { meta, Textfield, type TextfieldProps, type Story } from './shared';

export default {
  ...meta,
  title: 'Textfield/SlotProps',
};

export const SlotProps: Story = {
  render: ({ ...args }: TextfieldProps) => (
    <>
      <div className="ab-flex ab-flex-column ab-gap-12">
        <Textfield
          name="slotProps"
          {...args}
          helptext="slotProps で input tag に ab-w-120 を設定しています"
          slotProps={{
            input: {
              className: 'ab-w-120',
            },
          }}
        />
        <Textfield
          name="slotProps"
          {...args}
          multiline={5}
          helptext="slotProps で textarea tag に ab-w-120 を設定しています"
          slotProps={{
            textarea: {
              className: 'ab-w-120',
            },
          }}
        />
      </div>
    </>
  ),
};
