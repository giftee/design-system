type Falsy = boolean | undefined | null | 0;

export const classNames = (...classes: (string | Falsy)[]): string =>
  classes.filter(Boolean).join(' ');
