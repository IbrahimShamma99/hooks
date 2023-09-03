import { useCallback, useState, SetStateAction, Dispatch, useRef } from "react";

type UseStateWithHistoryProps<T> = [
  T,
  Dispatch<SetStateAction<T>>,
  {
    history: Array<T>;
    forward: () => void;
    backward: () => void;
    go: (index: number) => void;
  }
];

export function useStateWithHistory<T>(
  defaultValue: T
): UseStateWithHistoryProps<T> {
  const [value, setValue] = useState<T>(defaultValue);
  const historyRef = useRef<Array<T>>([value]);
  const pointerRef = useRef<number>(0);

  const set = useCallback(
    (newValue: SetStateAction<T>) => {
      const nextValue =
        typeof newValue === "function"
          ? (newValue as (value: T) => T)(value)
          : newValue;

      if (nextValue !== value) {
        setValue(nextValue);
        pointerRef.current++;
        historyRef.current = historyRef.current.shiftWithValue(
          pointerRef.current,
          nextValue
        );
      }
    },
    [value]
  );

  return [
    value,
    set,
    {
      history: historyRef.current,
      forward: useCallback(() => {
        if (pointerRef.current === historyRef.current.length - 1) {
          return;
        }
        pointerRef.current++;
        setValue(historyRef.current[pointerRef.current]);
      }, []),
      backward: useCallback(() => {
        if (pointerRef.current === 0) {
          return;
        }
        pointerRef.current--;
        setValue(historyRef.current[pointerRef.current]);
      }, []),
      go: useCallback((index: number) => {
        if (
          index < 0 ||
          index > historyRef.current.length - 1 ||
          index === pointerRef.current
        ) {
          throw new Error("Invalid index");
        }
        pointerRef.current = index;
        setValue(historyRef.current[pointerRef.current]);
      }, []),
    },
  ];
}

export default useStateWithHistory;
