import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom';

import {
  Root,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  BodyRow,
  BodyCell,
} from './Index';

describe('Table', () => {
  test('テーブルをレンダリングする', () => {
    const { container } = render(
      <Root>
        <Header>
          <HeaderRow>
            <HeaderCell>ヘッダー1</HeaderCell>
            <HeaderCell>ヘッダー2</HeaderCell>
          </HeaderRow>
        </Header>
        <Body>
          <BodyRow>
            <BodyCell>セル1</BodyCell>
            <BodyCell>セル2</BodyCell>
          </BodyRow>
        </Body>
      </Root>,
    );

    const table = container.querySelector('.ab-Table');
    expect(table).toBeInTheDocument();
  });

  test('縞模様の行が正しくCSSクラスに反映される', () => {
    const { container } = render(
      <Root isStripe>
        <Header>
          <HeaderRow>
            <HeaderCell>ヘッダー</HeaderCell>
          </HeaderRow>
        </Header>
        <Body>
          <BodyRow>
            <BodyCell>セル</BodyCell>
          </BodyRow>
        </Body>
      </Root>,
    );

    const table = container.querySelector('.ab-Table');
    expect(table).toHaveClass('ab-Table-stripe');
  });

  test('選択可能な行が正しくCSSクラスに反映される', () => {
    const { container } = render(
      <Root isSelectable>
        <Header>
          <HeaderRow>
            <HeaderCell>ヘッダー</HeaderCell>
          </HeaderRow>
        </Header>
        <Body>
          <BodyRow>
            <BodyCell>セル</BodyCell>
          </BodyRow>
        </Body>
      </Root>,
    );

    const table = container.querySelector('.ab-Table');
    expect(table).toHaveClass('ab-Table-select');
  });

  test('ヘッダーが正しくレンダリングされる', () => {
    const { container } = render(
      <Root>
        <Header>
          <HeaderRow>
            <HeaderCell>ヘッダーセル</HeaderCell>
          </HeaderRow>
        </Header>
      </Root>,
    );

    const header = container.querySelector('.ab-Table-head');
    expect(header).toBeInTheDocument();
  });

  test('ヘッダー行が正しくレンダリングされる', () => {
    const { container } = render(
      <Root>
        <Header>
          <HeaderRow>
            <HeaderCell>ヘッダーセル</HeaderCell>
          </HeaderRow>
        </Header>
      </Root>,
    );

    const headerRow = container.querySelector('tr');
    expect(headerRow).toBeInTheDocument();
  });

  test('ヘッダーセルが正しくレンダリングされる', () => {
    const { getByText } = render(
      <Root>
        <Header>
          <HeaderRow>
            <HeaderCell>ヘッダーセル</HeaderCell>
          </HeaderRow>
        </Header>
      </Root>,
    );

    const headerCell = getByText('ヘッダーセル');
    expect(headerCell).toBeInTheDocument();
    expect(headerCell.closest('td')).toHaveClass('ab-Table-head-cell');
  });

  test('ボディが正しくレンダリングされる', () => {
    const { container } = render(
      <Root>
        <Body>
          <BodyRow>
            <BodyCell>ボディセル</BodyCell>
          </BodyRow>
        </Body>
      </Root>,
    );

    const body = container.querySelector('.ab-Table-body');
    expect(body).toBeInTheDocument();
  });

  test('ボディ行が正しくレンダリングされる', () => {
    const { container } = render(
      <Root>
        <Body>
          <BodyRow>
            <BodyCell>ボディセル</BodyCell>
          </BodyRow>
        </Body>
      </Root>,
    );

    const bodyRow = container.querySelector('.ab-Table-body-row');
    expect(bodyRow).toBeInTheDocument();
  });

  test('ボディセルが正しくレンダリングされる', () => {
    const { getByText } = render(
      <Root>
        <Body>
          <BodyRow>
            <BodyCell>ボディセル</BodyCell>
          </BodyRow>
        </Body>
      </Root>,
    );

    const bodyCell = getByText('ボディセル');
    expect(bodyCell).toBeInTheDocument();
    expect(bodyCell.closest('td')).toHaveClass('ab-Table-cell');
  });

  test('classNameプロパティが追加で指定できる（Root）', () => {
    const { container } = render(
      <Root className="custom-table-class">
        <Body>
          <BodyRow>
            <BodyCell>テスト</BodyCell>
          </BodyRow>
        </Body>
      </Root>,
    );

    const table = container.querySelector('.ab-Table');
    expect(table).toHaveClass('ab-Table', 'custom-table-class');
  });

  test('classNameプロパティが追加で指定できる（Header）', () => {
    const { container } = render(
      <Root>
        <Header className="custom-header-class">
          <HeaderRow>
            <HeaderCell>ヘッダー</HeaderCell>
          </HeaderRow>
        </Header>
      </Root>,
    );

    const header = container.querySelector('.ab-Table-head');
    expect(header).toHaveClass('ab-Table-head', 'custom-header-class');
  });

  test('classNameプロパティが追加で指定できる（HeaderRow）', () => {
    const { container } = render(
      <Root>
        <Header>
          <HeaderRow className="custom-header-row-class">
            <HeaderCell>ヘッダー</HeaderCell>
          </HeaderRow>
        </Header>
      </Root>,
    );

    const headerRow = container.querySelector('tr');
    expect(headerRow).toHaveClass('custom-header-row-class');
  });

  test('classNameプロパティが追加で指定できる（HeaderCell）', () => {
    const { getByText } = render(
      <Root>
        <Header>
          <HeaderRow>
            <HeaderCell className="custom-header-cell-class">
              カスタムヘッダー
            </HeaderCell>
          </HeaderRow>
        </Header>
      </Root>,
    );

    const headerCell = getByText('カスタムヘッダー').closest('td');
    expect(headerCell).toHaveClass(
      'ab-Table-head-cell',
      'custom-header-cell-class',
    );
  });

  test('classNameプロパティが追加で指定できる（Body）', () => {
    const { container } = render(
      <Root>
        <Body className="custom-body-class">
          <BodyRow>
            <BodyCell>セル</BodyCell>
          </BodyRow>
        </Body>
      </Root>,
    );

    const body = container.querySelector('.ab-Table-body');
    expect(body).toHaveClass('ab-Table-body', 'custom-body-class');
  });

  test('classNameプロパティが追加で指定できる（BodyRow）', () => {
    const { container } = render(
      <Root>
        <Body>
          <BodyRow className="custom-body-row-class">
            <BodyCell>セル</BodyCell>
          </BodyRow>
        </Body>
      </Root>,
    );

    const bodyRow = container.querySelector('.ab-Table-body-row');
    expect(bodyRow).toHaveClass('ab-Table-body-row', 'custom-body-row-class');
  });

  test('classNameプロパティが追加で指定できる（BodyCell）', () => {
    const { getByText } = render(
      <Root>
        <Body>
          <BodyRow>
            <BodyCell className="custom-body-cell-class">カスタムセル</BodyCell>
          </BodyRow>
        </Body>
      </Root>,
    );

    const bodyCell = getByText('カスタムセル').closest('td');
    expect(bodyCell).toHaveClass('ab-Table-cell', 'custom-body-cell-class');
  });
});
