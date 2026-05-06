import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

import * as PopOver from './Index';

describe('PopOver', () => {
  test('PopOver.RootとしてRootコンポーネントを参照できる', () => {
    const { container } = render(<PopOver.Root>content</PopOver.Root>);

    expect(container.firstChild).toHaveClass(
      'ab-position-relative',
      'ab-inline-block',
    );
  });

  test('PopOver.TriggerとしてTriggerコンポーネントを参照できる', () => {
    const { getByRole } = render(
      <PopOver.Root>
        <PopOver.Trigger>trigger</PopOver.Trigger>
      </PopOver.Root>,
    );

    expect(getByRole('button', { name: 'trigger' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  test('PopOver.ContentとしてContentコンポーネントを参照できる', () => {
    const { container } = render(
      <PopOver.Root defaultOpen>
        <PopOver.Content>content</PopOver.Content>
      </PopOver.Root>,
    );

    const content = container.querySelector('.ab-Popover');

    expect(content).toHaveClass('is-open');
    expect(content).not.toHaveAttribute('hidden');
  });

  test('RootなしでContentを使うとエラーになる', () => {
    expect(() => render(<PopOver.Content>content</PopOver.Content>)).toThrow();
  });

  test('Triggerをクリックするとポップオーバーが開く', async () => {
    const user = userEvent.setup();
    const { container, getByRole } = render(
      <PopOver.Root>
        <PopOver.Trigger>trigger</PopOver.Trigger>
        <PopOver.Content>content</PopOver.Content>
      </PopOver.Root>,
    );

    await user.click(getByRole('button', { name: 'trigger' }));

    expect(container.querySelector('.ab-Popover')).toHaveClass('is-open');
    expect(container.querySelector('.ab-Popover')).not.toHaveAttribute(
      'hidden',
    );
  });

  test('開いている状態でTriggerをクリックすると閉じる', async () => {
    const user = userEvent.setup();
    const { container, getByRole } = render(
      <PopOver.Root defaultOpen>
        <PopOver.Trigger>trigger</PopOver.Trigger>
        <PopOver.Content>content</PopOver.Content>
      </PopOver.Root>,
    );

    await user.click(getByRole('button', { name: 'trigger' }));

    expect(container.querySelector('.ab-Popover')).not.toHaveClass('is-open');
    expect(container.querySelector('.ab-Popover')).toHaveAttribute('hidden');
  });

  test('Escapeキーで閉じてフォーカスがTriggerに戻る', async () => {
    const user = userEvent.setup();
    const { container, getByRole } = render(
      <PopOver.Root defaultOpen>
        <PopOver.Trigger>trigger</PopOver.Trigger>
        <PopOver.Content>content</PopOver.Content>
      </PopOver.Root>,
    );

    await user.keyboard('{Escape}');

    expect(container.querySelector('.ab-Popover')).not.toHaveClass('is-open');
    expect(getByRole('button', { name: 'trigger' })).toHaveFocus();
  });

  test('Root外をクリックすると閉じる', async () => {
    const user = userEvent.setup();
    const { container, getByRole } = render(
      <div>
        <PopOver.Root defaultOpen>
          <PopOver.Trigger>trigger</PopOver.Trigger>
          <PopOver.Content>content</PopOver.Content>
        </PopOver.Root>
        <button>outside</button>
      </div>,
    );

    await user.click(getByRole('button', { name: 'outside' }));

    expect(container.querySelector('.ab-Popover')).not.toHaveClass('is-open');
  });

  test('onOpenChangeが開閉時に呼ばれる', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    const { getByRole } = render(
      <PopOver.Root onOpenChange={onOpenChange}>
        <PopOver.Trigger>trigger</PopOver.Trigger>
        <PopOver.Content>content</PopOver.Content>
      </PopOver.Root>,
    );

    await user.click(getByRole('button', { name: 'trigger' }));
    expect(onOpenChange).toHaveBeenCalledWith(true);

    await user.click(getByRole('button', { name: 'trigger' }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
