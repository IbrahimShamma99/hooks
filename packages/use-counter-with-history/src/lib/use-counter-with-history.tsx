import { useStateWithHistory } from "use-state-with-history";

export function useCounterWithHistory(initialValue: number) {
  const [count, setCount, { backward, forward, go, history }] =
    useStateWithHistory<number>(initialValue);

  return [count, setCount, { backward, forward, go, history }];
}

export default useCounterWithHistory;
