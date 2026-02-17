import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';

import { Textfield } from './Index';

describe('Textfield', () => {
  test('テキストフィールドをレンダリングする', () => {
    const { getByRole } = render(
      <Textfield name="test">テストフィールド</Textfield>,
    );

    const textfield = getByRole('textbox');
    expect(textfield).toBeInTheDocument();
    expect(textfield).toHaveClass('ab-Textfield-input');
  });

  test('ラベルが正しく表示される', () => {
    const { getByText } = render(
      <Textfield label="テストラベル" name="test" />,
    );

    const label = getByText('テストラベル');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('ab-Textfield-label');
  });

  test('必須フィールドが正しく表示される', () => {
    const { getByText } = render(
      <Textfield label="テストラベル" name="test" required />,
    );

    const requiredLabel = getByText('必須');
    expect(requiredLabel).toBeInTheDocument();
  });

  test('エラー状態が正しくCSSクラスに反映される', () => {
    const { container } = render(<Textfield name="test" error />);

    const textfieldContainer = container.querySelector('.ab-Textfield');
    expect(textfieldContainer).toHaveClass('is-error');
  });

  test('エラーメッセージ（文字列）が正しく表示される', () => {
    const { getByText } = render(
      <Textfield name="test" error errorMessages="エラーメッセージ" />,
    );

    const errorMessage = getByText('エラーメッセージ');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('ab-Textfield-error-message');
  });

  test('エラーメッセージ（配列）が正しく表示される', () => {
    const { getByText } = render(
      <Textfield
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
      <Textfield name="test" helptext="ヘルプテキスト" />,
    );

    const helptext = getByText('ヘルプテキスト');
    expect(helptext).toBeInTheDocument();
    expect(helptext).toHaveClass('ab-Textfield-helptext');
  });

  test('無効化状態が正しくCSSクラスに反映される', () => {
    const { container } = render(<Textfield name="test" disabled />);

    const textfieldContainer = container.querySelector('.ab-Textfield');
    expect(textfieldContainer).toHaveClass('is-disabled');
  });

  test('マルチライン入力が正しくレンダリングされる', () => {
    const { container } = render(<Textfield name="test" multiline={3} />);

    const textarea = container.querySelector('textarea');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveClass('ab-Textfield-textarea');
    expect(textarea).toHaveAttribute('rows', '3');
  });

  test('リサイズプロパティが正しくCSSクラスに反映される', () => {
    const { container } = render(
      <Textfield name="test" multiline={3} resize="vertical" />,
    );

    const textfieldContainer = container.querySelector('.ab-Textfield');
    expect(textfieldContainer).toHaveClass('resize-vertical');
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { container } = render(
      <Textfield name="test" className="custom-class" />,
    );

    const textfieldContainer = container.querySelector('.ab-Textfield');
    expect(textfieldContainer).toHaveClass('ab-Textfield', 'custom-class');
  });

  test('slotPropsが正しく適用される（input）', () => {
    const { getByRole } = render(
      <Textfield
        name="test"
        slotProps={{
          input: {
            placeholder: 'テストプレースホルダー',
            className: 'custom-input-class',
          },
        }}
      />,
    );

    const input = getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'テストプレースホルダー');
    expect(input).toHaveClass('ab-Textfield-input', 'custom-input-class');
  });

  test('slotPropsが正しく適用される（textarea）', () => {
    const { container } = render(
      <Textfield
        name="test"
        multiline={3}
        slotProps={{
          textarea: {
            placeholder: 'テストプレースホルダー',
            className: 'custom-textarea-class',
          },
        }}
      />,
    );

    const textarea = container.querySelector('textarea');
    expect(textarea).toHaveAttribute('placeholder', 'テストプレースホルダー');
    expect(textarea).toHaveClass(
      'ab-Textfield-textarea',
      'custom-textarea-class',
    );
  });

  test('エラーメッセージのアクセシビリティ属性が正しく設定される（単一）', () => {
    const { getByRole, getByText } = render(
      <Textfield id="test" name="test" error errorMessages="エラーメッセージ" />,
    );

    const input = getByRole('textbox');
    const errorMessage = getByText('エラーメッセージ');

    expect(input).toHaveAttribute('aria-describedby', 'test-error');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(errorMessage).toHaveAttribute('id', 'test-error');
    expect(errorMessage).toHaveAttribute('role', 'alert');
  });

  test('エラーメッセージのアクセシビリティ属性が正しく設定される（複数）', () => {
    const { getByRole, getByText } = render(
      <Textfield id="test" name="test" error errorMessages={['エラー1', 'エラー2']} />,
    );

    const input = getByRole('textbox');
    const errorMessage1 = getByText('エラー1');
    const errorMessage2 = getByText('エラー2');

    expect(input).toHaveAttribute(
      'aria-describedby',
      'test-error-0 test-error-1',
    );
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(errorMessage1).toHaveAttribute('id', 'test-error-0');
    expect(errorMessage2).toHaveAttribute('id', 'test-error-1');
  });

  test('ヘルプテキストのアクセシビリティ属性が正しく設定される', () => {
    const { getByRole, getByText } = render(
      <Textfield id="test" name="test" helptext="ヘルプテキスト" />,
    );

    const input = getByRole('textbox');
    const helptext = getByText('ヘルプテキスト');

    expect(input).toHaveAttribute('aria-describedby', 'test-helptext');
    expect(helptext).toHaveAttribute('id', 'test-helptext');
  });

  test('ヘルプテキストとエラーメッセージの両方がある場合のアクセシビリティ属性', () => {
    const { getByRole, getByText } = render(
      <Textfield
        id="test"
        name="test"
        helptext="ヘルプテキスト"
        error
        errorMessages="エラーメッセージ"
      />,
    );

    const input = getByRole('textbox');
    const helptext = getByText('ヘルプテキスト');
    const errorMessage = getByText('エラーメッセージ');

    expect(input).toHaveAttribute(
      'aria-describedby',
      'test-error test-helptext',
    );
    expect(helptext).toHaveAttribute('id', 'test-helptext');
    expect(errorMessage).toHaveAttribute('id', 'test-error');
  });
});
