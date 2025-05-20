import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

type Step = {
  label: string;
}

export type StepperProps = ComponentPropsWithoutRef<'ol'> & {
  currentStep: number;
  steps: Step[];
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'medium';
};

export const Stepper = forwardRef<ElementRef<'ol'>, StepperProps>(
  (
    {
      currentStep,
      steps,
      direction = 'horizontal',
      size = 'medium',
      className,
      ...rest
    },
    forwardedRef,
  ) => {

    const classes = classNames(
      'ab-Stepper',
      `ab-Stepper-${direction}`,
      `ab-Stepper-${size}`
    );

    return (
      <ol className={classes} ref={forwardedRef} {...rest}>
        {steps.map((step, i) => {
          const status =
          i < currentStep
              ? 'passed'
              : i === currentStep
              ? 'current'
              : undefined;

          return (
            <li
              key={step.label}
              className={classNames(
                'ab-Stepper-item',
                status && `ab-Stepper-item-${status}`,
              )}
              aria-current={status === 'current' ? 'step' : undefined}
            >
              <div className="ab-Stepper-marker" aria-hidden={status === 'passed'}>
              {size !== 'small' && status !== 'passed' ? i + 1 : null}
              </div>
              <div className="ab-Stepper-label">{step.label}</div>
            </li>
          );
        })}
      </ol>
    );
  },
);

Stepper.displayName = 'Stepper';
