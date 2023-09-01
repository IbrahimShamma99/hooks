# react-fetch-watcher

## How to use

```tsx
import { useStateWithHistory } from "use-state-with-history";

function Component() {
  const [value, setValue, { history, forward, backward, go }] =
    useStateWithHistory<number>(0);
}
```
