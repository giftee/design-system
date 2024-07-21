// 複数の ref を 1 つのメモ化された関数にマージする hooks
// コンポーネント内部の ref と親コンポーネントから渡された ref をマージする際などに使用する
import * as React from 'react';

type ReactRef<T> = React.Ref<T> | React.MutableRefObject<T>;

/* eslint-disable @typescript-eslint/no-explicit-any */
function assignRef<T = any>(ref: ReactRef<T> | undefined, value: T) {
  if (ref == null) return;

  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  try {
    // @ts-expect-error こちらは MutableRefObject なので代入可能
    ref.current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}

export function useMergeRefs<T>(...refs: (ReactRef<T> | undefined)[]) {
  return React.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (node: T) => {
      refs.forEach((ref) => {
        if (ref) assignRef(ref, node);
      });
    };
  }, refs);
}
