# use-async

## How to use

```tsx
import { useAsync } from "use-async-2";

function Component() {
  const { value, loading, error } = useAsync<number>(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    });
  });
}
```
