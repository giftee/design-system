import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';

import { Select } from './Index';

describe('Select', () => {
  const stringOptions = ['オプション1', 'オプション2', 'オプション3'];
  const objectOptions = [
    { value: 'value1', label: 'ラベル1' },
    { value: 'value2', label: 'ラベル2' },
    { value: 'value3', label: 'ラベル3', key: 'custom-key' }
  ];

  test('セレクトをレンダリングする', () => {
    const { getByRole } = render(<Select name="test" options={stringOptions} />);
    
    const select = getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select).toHaveClass('ab-Select-input');
  });

  test('文字列オプションが正しくレンダリングされる', () => {
    const { getAllByRole } = render(<Select name="test" options={stringOptions} />);
    
    const options = getAllByRole('option');
    expect(options).toHaveLength(3);
    expect(options[0]).toHaveTextContent('オプション1');
    expect(options[0]).toHaveValue('オプション1');
    expect(options[1]).toHaveTextContent('オプション2');
    expect(options[1]).toHaveValue('オプション2');
    expect(options[2]).toHaveTextContent('オプション3');
    expect(options[2]).toHaveValue('オプション3');
  });

  test('オブジェクトオプションが正しくレンダリングされる', () => {
    const { getAllByRole } = render(<Select name="test" options={objectOptions} />);
    
    const options = getAllByRole('option');
    expect(options).toHaveLength(3);
    expect(options[0]).toHaveTextContent('ラベル1');
    expect(options[0]).toHaveValue('value1');
    expect(options[1]).toHaveTextContent('ラベル2');
    expect(options[1]).toHaveValue('value2');
    expect(options[2]).toHaveTextContent('ラベル3');
    expect(options[2]).toHaveValue('value3');
  });

  test('ラベルが正しく表示される', () => {
    const { getByText } = render(
      <Select label="テストラベル" name="test" options={stringOptions} />
    );
    
    const label = getByText('テストラベル');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('ab-Textfield-label');
  });

  test('必須フィールドが正しく表示される', () => {
    const { getByText } = render(
      <Select label="テストラベル" name="test" options={stringOptions} required />
    );
    
    const requiredLabel = getByText('必須');
    expect(requiredLabel).toBeInTheDocument();
  });

  test('エラー状態が正しくCSSクラスに反映される', () => {
    const { container } = render(<Select name="test" options={stringOptions} error />);
    
    const selectContainer = container.querySelector('.ab-Textfield');
    expect(selectContainer).toHaveClass('is-error');
  });

  test('エラーメッセージ（文字列）が正しく表示される', () => {
    const { getByText } = render(
      <Select name="test" options={stringOptions} error errorMessages="エラーメッセージ" />
    );
    
    const errorMessage = getByText('エラーメッセージ');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('ab-Textfield-error-message');
  });

  test('エラーメッセージ（配列）が正しく表示される', () => {
    const { getByText } = render(
      <Select 
        name="test" 
        options={stringOptions}
        error 
        errorMessages={['エラーメッセージ1', 'エラーメッセージ2']} 
      />
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
      <Select name="test" options={stringOptions} helptext="ヘルプテキスト" />
    );
    
    const helptext = getByText('ヘルプテキスト');
    expect(helptext).toBeInTheDocument();
    expect(helptext).toHaveClass('ab-Textfield-helptext');
  });

  test('無効化状態が正しくCSSクラスに反映される', () => {
    const { container } = render(
      <Select name="test" options={stringOptions} disabled />
    );
    
    const selectContainer = container.querySelector('.ab-Textfield');
    expect(selectContainer).toHaveClass('is-disabled');
  });

  test('classNameプロパティが追加で指定できる', () => {
    const { container } = render(
      <Select name="test" options={stringOptions} className="custom-class" />
    );
    
    const selectContainer = container.querySelector('.ab-Textfield');
    expect(selectContainer).toHaveClass('ab-Textfield', 'custom-class');
  });
});
