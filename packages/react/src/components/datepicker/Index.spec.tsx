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

  test('エラーメッセージのアクセシビリティ属性が正しく設定される（単一）', () => {
    const { container, getByText } = render(
      <DatePicker
        id="test-single-error"
        name="test"
        error
        errorMessages="エラーメッセージ"
      />,
    );

    const input = container.querySelector('input[type="date"]');
    const errorMessage = getByText('エラーメッセージ');

    expect(input).toHaveAttribute(
      'aria-describedby',
      'test-single-error-error',
    );
    expect(input).toHaveAttribute(
      'aria-errormessage',
      'test-single-error-error',
    );
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(errorMessage).toHaveAttribute('id', 'test-single-error-error');
    expect(errorMessage).toHaveAttribute('role', 'alert');
  });

  test('エラーメッセージのアクセシビリティ属性が正しく設定される（複数）', () => {
    const { container, getByText } = render(
      <DatePicker
        id="test-multi-error"
        name="test"
        error
        errorMessages={['エラー1', 'エラー2']}
      />,
    );

    const input = container.querySelector('input[type="date"]');
    const errorMessage1 = getByText('エラー1');
    const errorMessage2 = getByText('エラー2');

    expect(input).toHaveAttribute(
      'aria-describedby',
      'test-multi-error-error-0 test-multi-error-error-1',
    );
    expect(input).toHaveAttribute(
      'aria-errormessage',
      'test-multi-error-error-0 test-multi-error-error-1',
    );
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(errorMessage1).toHaveAttribute('id', 'test-multi-error-error-0');
    expect(errorMessage2).toHaveAttribute('id', 'test-multi-error-error-1');
  });

  test('ヘルプテキストのアクセシビリティ属性が正しく設定される', () => {
    const { container, getByText } = render(
      <DatePicker
        id="test-helptext-field"
        name="test"
        helptext="ヘルプテキスト"
      />,
    );

    const input = container.querySelector('input[type="date"]');
    const helptext = getByText('ヘルプテキスト');

    expect(input).toHaveAttribute(
      'aria-describedby',
      'test-helptext-field-helptext',
    );
    expect(helptext).toHaveAttribute('id', 'test-helptext-field-helptext');
  });

  test('ヘルプテキストとエラーメッセージの両方がある場合のアクセシビリティ属性', () => {
    const { container, getByText } = render(
      <DatePicker
        id="test-both"
        name="test"
        helptext="ヘルプテキスト"
        error
        errorMessages="エラーメッセージ"
      />,
    );

    const input = container.querySelector('input[type="date"]');
    const helptext = getByText('ヘルプテキスト');
    const errorMessage = getByText('エラーメッセージ');

    expect(input).toHaveAttribute(
      'aria-describedby',
      'test-both-error test-both-helptext',
    );
    expect(input).toHaveAttribute('aria-errormessage', 'test-both-error');
    expect(helptext).toHaveAttribute('id', 'test-both-helptext');
    expect(errorMessage).toHaveAttribute('id', 'test-both-error');
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { container } = render(
      <DatePicker name="test" className="custom-class" />,
    );

    const datepickerContainer = container.querySelector('.ab-Textfield');
    expect(datepickerContainer).toHaveClass('ab-Textfield', 'custom-class');
  });
});
