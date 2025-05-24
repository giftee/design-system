import '@testing-library/jest-dom';

declare global {
  namespace Vi {
    interface Assertion {
      toBeInTheDocument(): void;
      toHaveClass(...classNames: string[]): void;
      toBeDisabled(): void;
      toBeChecked(): void;
      toHaveAttribute(attr: string, value?: string): void;
      toHaveStyle(style: string): void;
    }
  }
}
