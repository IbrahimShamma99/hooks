# use-counter-with-history

## How to use

```tsx
import { useCounterWithHistory } from "use-counter-with-history";

function Component() {
  const [counter, setCounter, { history, forward, backward, go }] =
    useCounterWithHistory(0);
}
```
