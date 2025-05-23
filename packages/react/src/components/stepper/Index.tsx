import { forwardRef } from 'react';
import { classNames } from '@/utils/classNames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

type Step = {
  /**
   * ステップのラベル
   */
  label: string;
};
const PASS_STATUSES = {
  CURRENT: 'current',
  PASSWED: 'passed',
};

export type StepperProps = ComponentPropsWithoutRef<'ol'> & {
  /**
   * 現在のステップ（0から始まる）
   */
  currentStep: number;
  /**
   * ステップ情報の配列
   */
  steps: Step[];
  /**
   * ステッパーの方向
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * ステッパーのサイズ
   * @default 'medium'
   */
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
      `ab-Stepper-${size}`,
    );

    return (
      <ol className={classes} ref={forwardedRef} {...rest}>
        {steps.map((step, i) => {
          const passStatus =
            i < currentStep
              ? PASS_STATUSES.PASSWED
              : i === currentStep
                ? PASS_STATUSES.CURRENT
                : undefined;

          return (
            <li
              key={step.label}
              className={classNames(
                'ab-Stepper-item',
                passStatus && `ab-Stepper-item-${passStatus}`,
              )}
              aria-current={
                passStatus === PASS_STATUSES.CURRENT ? 'step' : undefined
              }
            >
              <div
                className="ab-Stepper-marker"
                aria-label={
                  passStatus === PASS_STATUSES.PASSWED ? '成功' : undefined
                }
                role={passStatus === PASS_STATUSES.PASSWED ? 'img' : undefined}
                aria-hidden={passStatus !== PASS_STATUSES.PASSWED}
              >
                {size !== 'small' && passStatus !== PASS_STATUSES.PASSWED
                  ? i + 1
                  : null}
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
