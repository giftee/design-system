import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';

import { Stepper } from './Index';

describe('Stepper', () => {
  test('ステッパーをレンダリングする', () => {
    const { container } = render(
      <Stepper
        steps={[
          { label: 'ステップ1' },
          { label: 'ステップ2' },
          { label: 'ステップ3' },
        ]}
        currentStep={1}
      />
    );
    
    const stepper = container.querySelector('.ab-Stepper');
    expect(stepper).toBeInTheDocument();
  });

  test('現在のステップが正しく表示される', () => {
    const { container } = render(
      <Stepper
        steps={[
          { label: 'ステップ1' },
          { label: 'ステップ2' },
          { label: 'ステップ3' },
        ]}
        currentStep={1}
      />
    );
    
    const currentStep = container.querySelectorAll('.ab-Stepper-item')[1];
    expect(currentStep).toHaveClass('ab-Stepper-item-current');
  });

  test('完了したステップが正しく表示される', () => {
    const { container } = render(
      <Stepper
        steps={[
          { label: 'ステップ1' },
          { label: 'ステップ2' },
          { label: 'ステップ3' },
        ]}
        currentStep={1}
      />
    );
    
    const completedStep = container.querySelectorAll('.ab-Stepper-item-passed')[0];
    expect(completedStep).toBeInTheDocument();
  });

  test('方向プロパティが正しくCSSクラスに反映される', () => {
    const { container } = render(
      <Stepper
        steps={[
          { label: 'ステップ1' },
          { label: 'ステップ2' },
        ]}
        currentStep={1}
        direction="vertical"
      />
    );
    
    const stepper = container.querySelector('.ab-Stepper');
    expect(stepper).toHaveClass('ab-Stepper-vertical');
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { container } = render(
      <Stepper
        steps={[
          { label: 'ステップ1' },
          { label: 'ステップ2' },
        ]}
        currentStep={1}
        className="custom-class"
      />
    );
    
    const stepper = container.querySelector('.ab-Stepper');
    expect(stepper).toBeInTheDocument();
    expect(container.querySelector('.custom-class')).toBeNull();
  });
});
