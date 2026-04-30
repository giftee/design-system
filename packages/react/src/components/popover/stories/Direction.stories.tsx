import { useId } from 'react';
import { meta, PopOver, Button, PopOverMenu, type Story } from './shared';
import type { ComponentProps } from 'react';

export default {
  ...meta,
  title: 'PopOver/Direction',
};

type Variant = {
  placement: NonNullable<ComponentProps<typeof PopOver>['placement']>;
  align: NonNullable<ComponentProps<typeof PopOver>['align']>;
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
  const popoverId = useId();
  const label = align === 'center' ? placement : `${placement}-${align}`;

  return (
    <div className="ab-position-relative ab-inline-block ab-m-30">
      <Button aria-expanded aria-controls={popoverId}>
        {label}
      </Button>
      <PopOver id={popoverId} placement={placement} align={align} open>
        {PopOverMenu}
      </PopOver>
    </div>
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
