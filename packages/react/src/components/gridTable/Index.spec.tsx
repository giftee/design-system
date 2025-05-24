import { render } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';

import { Root, Header, HeaderCell, Body, BodyCell, Row, RowGroup } from './Index';

describe('GridTable', () => {
  test('グリッドテーブルをレンダリングする', () => {
    const { container } = render(
      <Root columnsCount={3}>
        <Header>
          <Row>
            <HeaderCell>ヘッダー1</HeaderCell>
            <HeaderCell>ヘッダー2</HeaderCell>
            <HeaderCell>ヘッダー3</HeaderCell>
          </Row>
        </Header>
        <Body>
          <Row>
            <BodyCell>セル1</BodyCell>
            <BodyCell>セル2</BodyCell>
            <BodyCell>セル3</BodyCell>
          </Row>
        </Body>
      </Root>
    );
    
    const gridTable = container.querySelector('.ab-GridTable');
    expect(gridTable).toBeInTheDocument();
  });

  test('列数プロパティが正しく設定される', () => {
    const { container } = render(
      <Root columnsCount={4}>
        <Header>
          <Row>
            <HeaderCell>ヘッダー1</HeaderCell>
            <HeaderCell>ヘッダー2</HeaderCell>
            <HeaderCell>ヘッダー3</HeaderCell>
            <HeaderCell>ヘッダー4</HeaderCell>
          </Row>
        </Header>
      </Root>
    );
    
    const gridTable = container.querySelector('.ab-GridTable');
    expect(gridTable).toHaveStyle('--ab-gridtable-columns-count: 4');
  });

  test('ヘッダーセルのテキスト配置が正しくCSSクラスに反映される', () => {
    const { getByText } = render(
      <Root columnsCount={3}>
        <Header>
          <Row>
            <HeaderCell align="center">中央揃え</HeaderCell>
          </Row>
        </Header>
      </Root>
    );
    
    const headerCell = getByText('中央揃え').closest('.ab-GridTable-head-cell');
    expect(headerCell).toHaveClass('ab-text-center');
  });

  test('ボディセルのテキスト配置が正しくCSSクラスに反映される', () => {
    const { getByText } = render(
      <Root columnsCount={3}>
        <Body>
          <Row>
            <BodyCell align="right">右揃え</BodyCell>
          </Row>
        </Body>
      </Root>
    );
    
    const bodyCell = getByText('右揃え').closest('.ab-GridTable-cell');
    expect(bodyCell).toHaveClass('ab-text-right');
  });

  test('行グループが正しくレンダリングされる', () => {
    const { container } = render(
      <Root columnsCount={3}>
        <Body>
          <RowGroup columnStart={1} columnEnd={3}>
            <Row>
              <BodyCell>グループセル</BodyCell>
            </Row>
          </RowGroup>
        </Body>
      </Root>
    );
    
    const rowGroup = container.querySelector('.ab-GridTable-rowgroup');
    expect(rowGroup).toBeInTheDocument();
    expect(rowGroup).toHaveStyle('--ab-gridtable-column-start: 1');
    expect(rowGroup).toHaveStyle('--ab-gridtable-column-end: 3');
  });

  test('classNameプロパティが追加で指定できる（Root）', () => {
    const { container } = render(
      <Root columnsCount={3} className="custom-class">
        <Body>
          <Row>
            <BodyCell>テスト</BodyCell>
          </Row>
        </Body>
      </Root>
    );
    
    const gridTable = container.querySelector('.ab-GridTable');
    expect(gridTable).toHaveClass('ab-GridTable', 'custom-class');
  });

  test('classNameプロパティが追加で指定できる（Header）', () => {
    const { container } = render(
      <Root columnsCount={3}>
        <Header className="custom-header-class">
          <Row>
            <HeaderCell>ヘッダー</HeaderCell>
          </Row>
        </Header>
      </Root>
    );
    
    const header = container.querySelector('.ab-GridTable-head');
    expect(header).toHaveClass('ab-GridTable-head', 'custom-header-class');
  });

  test('classNameプロパティが追加で指定できる（Body）', () => {
    const { container } = render(
      <Root columnsCount={3}>
        <Body className="custom-body-class">
          <Row>
            <BodyCell>セル</BodyCell>
          </Row>
        </Body>
      </Root>
    );
    
    const body = container.querySelector('.ab-GridTable-body');
    expect(body).toHaveClass('ab-GridTable-body', 'custom-body-class');
  });
});
