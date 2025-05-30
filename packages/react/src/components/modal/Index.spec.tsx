import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { describe, test, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

import { Root, Header, Body, Footer } from './Index';

describe('Modal', () => {
  test('モーダルをレンダリングする', () => {
    const { container } = render(
      <Root open={true}>
        <Header>モーダルヘッダー</Header>
        <Body>モーダル本文</Body>
        <Footer>モーダルフッター</Footer>
      </Root>,
    );

    const modal = container.querySelector('.ab-Modal');
    expect(modal).toBeInTheDocument();
  });

  test('モーダルのヘッダーが正しくレンダリングされる', () => {
    const { getByText } = render(
      <Root open={true}>
        <Header>モーダルヘッダー</Header>
        <Body>モーダル本文</Body>
      </Root>,
    );

    const header = getByText('モーダルヘッダー');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('ab-Modal-header');
  });

  test('モーダルの本文が正しくレンダリングされる', () => {
    const { getByText } = render(
      <Root open={true}>
        <Header>モーダルヘッダー</Header>
        <Body>モーダル本文</Body>
      </Root>,
    );

    const body = getByText('モーダル本文');
    expect(body).toBeInTheDocument();
    expect(body).toHaveClass('ab-Modal-body');
  });

  test('モーダルのフッターが正しくレンダリングされる', () => {
    const { getByText } = render(
      <Root open={true}>
        <Header>モーダルヘッダー</Header>
        <Body>モーダル本文</Body>
        <Footer>モーダルフッター</Footer>
      </Root>,
    );

    const footer = getByText('モーダルフッター');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('ab-Modal-footer');
  });

  test('openプロパティがfalseの場合、モーダルは表示されない', () => {
    const { container } = render(
      <Root open={false}>
        <Header>モーダルヘッダー</Header>
        <Body>モーダル本文</Body>
      </Root>,
    );

    const modal = container.querySelector('dialog[open]');
    expect(modal).not.toBeInTheDocument();
  });

  test('onCloseコールバックが呼び出される', () => {
    const handleClose = vi.fn();

    const { container } = render(
      <Root open={true} onClose={handleClose}>
        <Header>モーダルヘッダー</Header>
        <Body>モーダル本文</Body>
      </Root>,
    );

    const form = container.querySelector('form');
    fireEvent.submit(form as HTMLFormElement);

    expect(handleClose).toHaveBeenCalledOnce();
  });

  test('ダイアログの外側をクリックするとonCloseが呼び出される', () => {
    const handleClose = vi.fn();

    const { container } = render(
      <Root open={true} onClose={handleClose}>
        <Header>モーダルヘッダー</Header>
        <Body>モーダル本文</Body>
      </Root>,
    );

    const dialog = container.querySelector('dialog');
    fireEvent.click(dialog as HTMLDialogElement);

    expect(handleClose).toHaveBeenCalledOnce();
  });

  test('classNameプロパティが追加で指定できる（Root）', () => {
    const { container } = render(
      <Root open={true} className="custom-modal-class">
        <Body>モーダル本文</Body>
      </Root>,
    );

    const modal = container.querySelector('.ab-Modal');
    expect(modal).toHaveClass('ab-Modal', 'custom-modal-class');
  });

  test('classNameプロパティが追加で指定できる（Header）', () => {
    const { getByText } = render(
      <Root open={true}>
        <Header className="custom-header-class">カスタムヘッダー</Header>
        <Body>モーダル本文</Body>
      </Root>,
    );

    const header = getByText('カスタムヘッダー');
    expect(header).toHaveClass('ab-Modal-header', 'custom-header-class');
  });

  test('classNameプロパティが追加で指定できる（Body）', () => {
    const { getByText } = render(
      <Root open={true}>
        <Header>モーダルヘッダー</Header>
        <Body className="custom-body-class">カスタム本文</Body>
      </Root>,
    );

    const body = getByText('カスタム本文');
    expect(body).toHaveClass('ab-Modal-body', 'custom-body-class');
  });

  test('classNameプロパティが追加で指定できる（Footer）', () => {
    const { getByText } = render(
      <Root open={true}>
        <Header>モーダルヘッダー</Header>
        <Body>モーダル本文</Body>
        <Footer className="custom-footer-class">カスタムフッター</Footer>
      </Root>,
    );

    const footer = getByText('カスタムフッター');
    expect(footer).toHaveClass('ab-Modal-footer', 'custom-footer-class');
  });
});
