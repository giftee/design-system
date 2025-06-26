import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';

import { DateTimePicker } from './Index';

describe('DateTimePicker', () => {
  test('DateTimePickerをレンダリングする', () => {
    const { container } = render(<DateTimePicker name="test" />);

    const datetimepicker = container.querySelector(
      'input[type="datetime-local"]',
    );
    expect(datetimepicker).toBeInTheDocument();
    expect(datetimepicker).toHaveClass('ab-DateTimePicker-input');
  });

  test('ラベルが正しく表示される', () => {
    const { getByText } = render(
      <DateTimePicker label="テストラベル" name="test" />,
    );

    const label = getByText('テストラベル');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('ab-Textfield-label');
  });

  test('必須フィールドが正しく表示される', () => {
    const { getByText } = render(
      <DateTimePicker label="テストラベル" name="test" required />,
    );

    const requiredLabel = getByText('必須');
    expect(requiredLabel).toBeInTheDocument();
  });

  test('エラー状態が正しくCSSクラスに反映される', () => {
    const { container } = render(<DateTimePicker name="test" error />);

    const datetimepickerContainer = container.querySelector('.ab-Textfield');
    expect(datetimepickerContainer).toHaveClass('is-error');
  });

  test('エラーメッセージ（文字列）が正しく表示される', () => {
    const { getByText } = render(
      <DateTimePicker name="test" error errorMessages="エラーメッセージ" />,
    );

    const errorMessage = getByText('エラーメッセージ');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('ab-Textfield-error-message');
  });

  test('エラーメッセージ（配列）が正しく表示される', () => {
    const { getByText } = render(
      <DateTimePicker
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
      <DateTimePicker name="test" helptext="ヘルプテキスト" />,
    );

    const helptext = getByText('ヘルプテキスト');
    expect(helptext).toBeInTheDocument();
    expect(helptext).toHaveClass('ab-Textfield-helptext');
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { container } = render(
      <DateTimePicker name="test" className="custom-class" />,
    );

    const datetimepickerContainer = container.querySelector('.ab-Textfield');
    expect(datetimepickerContainer).toHaveClass('ab-Textfield', 'custom-class');
  });
});
