import { meta, PopOver, PopOverMenu, type Story } from './shared';
import type { ComponentProps } from 'react';

export default {
  ...meta,
  title: 'PopOver/Direction',
};

type Variant = {
  placement: NonNullable<ComponentProps<typeof PopOver.Content>['placement']>;
  align: NonNullable<ComponentProps<typeof PopOver.Content>['align']>;
};

const groups: { heading: string; variants: Variant[] }[] = [
  {
    heading: 'PopOver top',
    variants: [
      { placement: 'top', align: 'center' },
      { placement: 'top', align: 'start' },
      { placement: 'top', align: 'end' },
    ],
  },
  {
    heading: 'PopOver bottom',
    variants: [
      { placement: 'bottom', align: 'center' },
      { placement: 'bottom', align: 'start' },
      { placement: 'bottom', align: 'end' },
    ],
  },
  {
    heading: 'PopOver left',
    variants: [
      { placement: 'left', align: 'center' },
      { placement: 'left', align: 'start' },
      { placement: 'left', align: 'end' },
    ],
  },
  {
    heading: 'PopOver right',
    variants: [
      { placement: 'right', align: 'center' },
      { placement: 'right', align: 'start' },
      { placement: 'right', align: 'end' },
    ],
  },
];

const Demo = ({ placement, align }: Variant) => {
  const label = align === 'center' ? placement : `${placement}-${align}`;

  return (
    <PopOver.Root
      className="ab-m-30"
      defaultOpen
    >
      <PopOver.Trigger className="ab-Button">{label}</PopOver.Trigger>
      <PopOver.Content placement={placement} align={align}>
        {PopOverMenu}
      </PopOver.Content>
    </PopOver.Root>
  );
};

export const Direction: Story = {
  render: () => (
    <div>
      {groups.map((group) => (
        <section key={group.heading}>
          <h2 className="ab-text-headline-m ab-mb-30">{group.heading}</h2>
          <div className="ab-flex ab-flex-justify-around">
            {group.variants.map((variant) => (
              <Demo
                key={`${variant.placement}-${variant.align}`}
                placement={variant.placement}
                align={variant.align}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};
