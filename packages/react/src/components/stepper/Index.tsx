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

/**
 *
 * Docs:
 *
 * - [Stepper](https://abukuma.netlify.app/react/component/stepper)
 *
 * GitHub:
 *
 * - [Stepper](https://github.com/giftee/design-system/tree/main/packages/react/src/components/stepper)
 */
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
              {passStatus === PASS_STATUSES.PASSWED ? (
                <div
                  className="ab-Stepper-marker"
                  aria-label="成功"
                  role="img"
                />
              ) : (
                <div className="ab-Stepper-marker" aria-hidden="true">
                  {size !== 'small' ? i + 1 : null}
                </div>
              )}
              <div className="ab-Stepper-label">{step.label}</div>
            </li>
          );
        })}
      </ol>
    );
  },
);

Stepper.displayName = 'Stepper';
