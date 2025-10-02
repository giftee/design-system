import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi, describe, test, expect } from 'vitest';

import { Pagination } from './Index';

describe('Pagination', () => {
  test('ページネーションをレンダリングする', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Pagination page={1} count={5} onChange={handleChange} />,
    );

    const nav = container.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });

  test('現在のページに該当する数字はdefaultバリアントが適用される', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Pagination page={3} count={5} onChange={handleChange} />,
    );

    const buttons = container.querySelectorAll('button');
    const currentPageButton = Array.from(buttons).find(
      (button) => button.textContent === '3',
    );
    expect(currentPageButton).toHaveClass('ab-IconButton');
    expect(currentPageButton).not.toHaveClass('ab-IconButton-text');
  });

  test('現在のページ以外の数字はtextバリアントが適用される', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Pagination page={3} count={5} onChange={handleChange} />,
    );

    const buttons = container.querySelectorAll('button');
    const otherPageButton = Array.from(buttons).find(
      (button) => button.textContent === '2',
    );
    expect(otherPageButton).toHaveClass('ab-IconButton-text');
  });

  test('ナビゲーションボタンはoutlinedバリアントが適用される', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Pagination page={3} count={5} onChange={handleChange} />,
    );

    const buttons = container.querySelectorAll('button');
    const prevButton = buttons[0];
    const nextButton = buttons[buttons.length - 1];

    expect(prevButton).toHaveClass('ab-IconButton-outlined');
    expect(nextButton).toHaveClass('ab-IconButton-outlined');
  });

  test('先頭ページの場合、前へボタンがdisableになる', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Pagination page={1} count={5} onChange={handleChange} />,
    );

    const buttons = container.querySelectorAll('button');
    const prevButton = buttons[0];
    expect(prevButton).toBeDisabled();
  });

  test('最終ページの場合、次へボタンがdisableになる', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Pagination page={5} count={5} onChange={handleChange} />,
    );

    const buttons = container.querySelectorAll('button');
    const nextButton = buttons[buttons.length - 1];
    expect(nextButton).toBeDisabled();
  });

  test('先頭ページと最終ページが同じ場合、両方のボタンがdisableになる', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Pagination page={1} count={1} onChange={handleChange} />,
    );

    const buttons = container.querySelectorAll('button');
    const prevButton = buttons[0];
    const nextButton = buttons[buttons.length - 1];

    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });

  test('ページ番号をクリックするとonChangeが呼ばれる', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    const { container } = render(
      <Pagination page={1} count={5} onChange={handleChange} />,
    );

    const buttons = container.querySelectorAll('button');
    const page2Button = Array.from(buttons).find(
      (button) => button.textContent === '2',
    );

    await user.click(page2Button as HTMLElement);

    expect(handleChange).toHaveBeenCalledOnce();
    expect(handleChange.mock.calls[0][1]).toBe(2);
  });

  test('前へボタンをクリックするとonChangeが呼ばれる', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    const { container } = render(
      <Pagination page={3} count={5} onChange={handleChange} />,
    );

    const buttons = container.querySelectorAll('button');
    const prevButton = buttons[0];

    await user.click(prevButton);

    expect(handleChange).toHaveBeenCalledOnce();
    expect(handleChange.mock.calls[0][1]).toBe(2);
  });

  test('次へボタンをクリックするとonChangeが呼ばれる', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    const { container } = render(
      <Pagination page={3} count={5} onChange={handleChange} />,
    );

    const buttons = container.querySelectorAll('button');
    const nextButton = buttons[buttons.length - 1];

    await user.click(nextButton);

    expect(handleChange).toHaveBeenCalledOnce();
    expect(handleChange.mock.calls[0][1]).toBe(4);
  });

  test('ページ数が10の場合に最大9要素が表示される', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Pagination page={2} count={10} onChange={handleChange} />,
    );

    const allElements = container.querySelectorAll('button, span');
    expect(allElements.length).toBe(9);
  });

  test('ページ数が10で現在が5ページ目の場合、適切な要素が表示される', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Pagination page={5} count={10} onChange={handleChange} />,
    );

    const allElements = container.querySelectorAll('button, span');
    expect(allElements.length).toBe(9);

    const ellipses = Array.from(allElements).filter(
      (el) => el.textContent === '…',
    );
    expect(ellipses.length).toBe(2);
  });

  test('ページ数が10で現在が10ページ目の場合、適切な要素が表示される', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Pagination page={10} count={10} onChange={handleChange} />,
    );

    const allElements = container.querySelectorAll('button, span');
    expect(allElements.length).toBe(9);

    const buttons = container.querySelectorAll('button');
    const pageNumbers = Array.from(buttons)
      .map((button) => button.textContent)
      .filter((text) => /^\d+$/.test(text || ''));
    expect(pageNumbers).toContain('6');
    expect(pageNumbers).toContain('10');
  });
});
