import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';

import { DatePicker } from './Index';

describe('DatePicker', () => {
  test('DatePickerをレンダリングする', () => {
    const { container } = render(<DatePicker name="test" />);

    const datepicker = container.querySelector('input[type="date"]');
    expect(datepicker).toBeInTheDocument();
    expect(datepicker).toHaveClass('ab-DatePicker-input');
  });

  test('ラベルが正しく表示される', () => {
    const { getByText } = render(
      <DatePicker label="テストラベル" name="test" />,
    );

    const label = getByText('テストラベル');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('ab-Textfield-label');
  });

  test('必須フィールドが正しく表示される', () => {
    const { getByText } = render(
      <DatePicker label="テストラベル" name="test" required />,
    );

    const requiredLabel = getByText('必須');
    expect(requiredLabel).toBeInTheDocument();
  });

  test('エラー状態が正しくCSSクラスに反映される', () => {
    const { container } = render(<DatePicker name="test" error />);

    const datepickerContainer = container.querySelector('.ab-Textfield');
    expect(datepickerContainer).toHaveClass('is-error');
  });

  test('エラーメッセージ（文字列）が正しく表示される', () => {
    const { getByText } = render(
      <DatePicker name="test" error errorMessages="エラーメッセージ" />,
    );

    const errorMessage = getByText('エラーメッセージ');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('ab-Textfield-error-message');
  });

  test('エラーメッセージ（配列）が正しく表示される', () => {
    const { getByText } = render(
      <DatePicker
        name="test"
        error
        errorMessages={['エラーメッセージ1', 'エラーメッセージ2']}
      />,
    );

    const errorMessage1 = getByText('エラーメッセージ1');
    const errorMessage2 = getByText('エラーメッセージ2');
    expect(errorMessage1).toBeInTheDocument();
    expect(errorMessage2).toBeInTheDocument();
    expect(errorMessage1).toHaveClass('ab-Textfield-error-message');
    expect(errorMessage2).toHaveClass('ab-Textfield-error-message');
  });

  test('ヘルプテキストが正しく表示される', () => {
    const { getByText } = render(
      <DatePicker name="test" helptext="ヘルプテキスト" />,
    );

    const helptext = getByText('ヘルプテキスト');
    expect(helptext).toBeInTheDocument();
    expect(helptext).toHaveClass('ab-Textfield-helptext');
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { container } = render(
      <DatePicker name="test" className="custom-class" />,
    );

    const datepickerContainer = container.querySelector('.ab-Textfield');
    expect(datepickerContainer).toHaveClass('ab-Textfield', 'custom-class');
  });
});
