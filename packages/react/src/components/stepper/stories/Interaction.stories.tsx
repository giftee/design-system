import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import { Button } from '@/index';
import { meta, Stepper, type Story } from './shared';

export default {
  ...meta,
  title: 'Stepper/Interaction',
};

export const CurrentStep: Story = {
  args: { currentStep: 2 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const items = canvas.getAllByRole('listitem');

    await expect(canvas.getByRole('list')).toBeInTheDocument();
    await expect(items).toHaveLength(5);

    await expect(items[2]).toHaveAttribute('aria-current', 'step');
    await expect(
      canvasElement.querySelectorAll('[aria-current="step"]'),
    ).toHaveLength(1);

    await expect(items[0]).not.toHaveAttribute('aria-current');
    await expect(items[1]).not.toHaveAttribute('aria-current');
    await expect(items[3]).not.toHaveAttribute('aria-current');
    await expect(items[4]).not.toHaveAttribute('aria-current');
  },
};

export const PassedSteps: Story = {
  args: { currentStep: 2 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const items = canvas.getAllByRole('listitem');

    await expect(canvas.getAllByRole('img', { name: '成功' })).toHaveLength(2);
    await expect(
      within(items[0]).getByRole('img', { name: '成功' }),
    ).toBeInTheDocument();
    await expect(
      within(items[1]).getByRole('img', { name: '成功' }),
    ).toBeInTheDocument();
    await expect(within(items[2]).queryByRole('img')).not.toBeInTheDocument();
    await expect(within(items[3]).queryByRole('img')).not.toBeInTheDocument();
    await expect(items[0]).toHaveTextContent('メールアドレス確認');
  },
};

export const NextStep: Story = {
  args: { currentStep: 0 },
  render: ({ currentStep, ...args }) => {
    const [step, setStep] = useState(currentStep);
    return (
      <div>
        <Stepper {...args} currentStep={step} />
        <Button onClick={() => setStep((prev) => prev + 1)}>次へ</Button>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const items = canvas.getAllByRole('listitem');
    const next = canvas.getByRole('button', { name: '次へ' });

    await expect(items[0]).toHaveAttribute('aria-current', 'step');
    await expect(
      canvas.queryByRole('img', { name: '成功' }),
    ).not.toBeInTheDocument();

    await userEvent.click(next);

    await expect(items[0]).not.toHaveAttribute('aria-current');
    await expect(items[1]).toHaveAttribute('aria-current', 'step');
    await expect(canvas.getAllByRole('img', { name: '成功' })).toHaveLength(1);

    await userEvent.click(next);

    await expect(items[1]).not.toHaveAttribute('aria-current');
    await expect(items[2]).toHaveAttribute('aria-current', 'step');
    await expect(canvas.getAllByRole('img', { name: '成功' })).toHaveLength(2);
  },
};
