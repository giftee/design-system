import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';

import { Radio, Checkbox } from '@/index';
import { Root, Legend, Content } from './Index';

describe('Fieldset', () => {
  test('フィールドセットをレンダリングする', () => {
    const { container } = render(
      <Root>
        <Legend>フィールドセットタイトル</Legend>
        <Content>フィールドセットの内容</Content>
      </Root>,
    );

    const fieldset = container.querySelector('.ab-Fieldset');
    expect(fieldset).toBeInTheDocument();
  });

  test('方向プロパティが正しくCSSクラスに反映される', () => {
    const { container } = render(
      <Root direction="vertical">
        <Legend>縦方向</Legend>
        <Content>縦並びの内容</Content>
      </Root>,
    );

    const fieldset = container.querySelector('.ab-Fieldset');
    expect(fieldset).toHaveClass('ab-Fieldset-vertical');
  });

  test('レジェンドが正しく表示される', () => {
    const { getByText } = render(
      <Root>
        <Legend>フィールドセットタイトル</Legend>
        <Content>フィールドセットの内容</Content>
      </Root>,
    );

    const legend = getByText('フィールドセットタイトル');
    expect(legend).toBeInTheDocument();
    expect(legend).toHaveClass('ab-Fieldset-legend');
  });

  test('コンテンツが正しく表示される', () => {
    const { getByText } = render(
      <Root>
        <Legend>フィールドセットタイトル</Legend>
        <Content>フィールドセットの内容</Content>
      </Root>,
    );

    const content = getByText('フィールドセットの内容');
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('ab-Fieldset-content');
  });

  test('disabledプロパティが正しく動作する', () => {
    const { container } = render(
      <Root disabled>
        <Legend>無効化フィールドセット</Legend>
        <Content>
          <Radio name="test-radio" value="radio">
            Radio Option
          </Radio>
          <Checkbox name="test-checkbox" value="checkbox">
            Checkbox Option
          </Checkbox>
        </Content>
      </Root>,
    );

    const fieldset = container.querySelector('.ab-Fieldset');
    expect(fieldset).toBeDisabled();

    const radioInput = container.querySelector('input[type="radio"]');
    const checkboxInput = container.querySelector('input[type="checkbox"]');

    expect(radioInput).toBeDisabled();
    expect(checkboxInput).toBeDisabled();
  });

  test('classNameプロパティが追加で指定できる（Root）', () => {
    const { container } = render(
      <Root className="custom-class">
        <Legend>タイトル</Legend>
        <Content>内容</Content>
      </Root>,
    );

    const fieldset = container.querySelector('.ab-Fieldset');
    expect(fieldset).toHaveClass('ab-Fieldset', 'custom-class');
  });

  test('classNameプロパティが追加で指定できる（Legend）', () => {
    const { getByText } = render(
      <Root>
        <Legend className="custom-legend-class">カスタムタイトル</Legend>
        <Content>内容</Content>
      </Root>,
    );

    const legend = getByText('カスタムタイトル');
    expect(legend).toHaveClass('ab-Fieldset-legend', 'custom-legend-class');
  });

  test('classNameプロパティが追加で指定できる（Content）', () => {
    const { getByText } = render(
      <Root>
        <Legend>タイトル</Legend>
        <Content className="custom-content-class">カスタム内容</Content>
      </Root>,
    );

    const content = getByText('カスタム内容');
    expect(content).toHaveClass('ab-Fieldset-content', 'custom-content-class');
  });
});
