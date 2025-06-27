import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';

import { Radio, Checkbox } from '@/index';
import { Fieldset } from './Index';

describe('Fieldset', () => {
  test('フィールドセットをレンダリングする', () => {
    const { container } = render(
      <Fieldset title="フィールドセットタイトル">
        フィールドセットの内容
      </Fieldset>,
    );

    const fieldset = container.querySelector('.ab-Fieldset');
    expect(fieldset).toBeInTheDocument();
  });

  test('方向プロパティが正しくCSSクラスに反映される', () => {
    const { container } = render(
      <Fieldset direction="vertical" title="縦方向">
        縦並びの内容
      </Fieldset>,
    );

    const fieldset = container.querySelector('.ab-Fieldset');
    expect(fieldset).toHaveClass('ab-Fieldset-vertical');
  });

  test('タイトルが正しく表示される', () => {
    const { getByText } = render(
      <Fieldset title="フィールドセットタイトル">
        フィールドセットの内容
      </Fieldset>,
    );

    const legend = getByText('フィールドセットタイトル');
    expect(legend).toBeInTheDocument();
    expect(legend).toHaveClass('ab-Fieldset-legend');
  });

  test('コンテンツが正しく表示される', () => {
    const { getByText } = render(
      <Fieldset title="フィールドセットタイトル">
        フィールドセットの内容
      </Fieldset>,
    );

    const content = getByText('フィールドセットの内容');
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('ab-Fieldset-content');
  });

  test('titleがない場合はレジェンド要素が表示されない', () => {
    const { container } = render(
      <Fieldset>フィールドセットの内容のみ</Fieldset>,
    );

    const legend = container.querySelector('.ab-Fieldset-legend');
    expect(legend).not.toBeInTheDocument();
  });

  test('disabledプロパティが正しく動作する', () => {
    const { container } = render(
      <Fieldset disabled title="無効化フィールドセット">
        <Radio name="test-radio" value="radio">
          Radio Option
        </Radio>
        <Checkbox name="test-checkbox" value="checkbox">
          Checkbox Option
        </Checkbox>
      </Fieldset>,
    );

    const fieldset = container.querySelector('.ab-Fieldset');
    expect(fieldset).toBeDisabled();

    const radioInput = container.querySelector('input[type="radio"]');
    const checkboxInput = container.querySelector('input[type="checkbox"]');

    expect(radioInput).toBeDisabled();
    expect(checkboxInput).toBeDisabled();
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { container } = render(
      <Fieldset className="custom-class" title="タイトル">
        内容
      </Fieldset>,
    );

    const fieldset = container.querySelector('.ab-Fieldset');
    expect(fieldset).toHaveClass('ab-Fieldset', 'custom-class');
  });
});
