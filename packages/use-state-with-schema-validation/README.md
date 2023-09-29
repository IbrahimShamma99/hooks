# use-state-with-schema-validation

## Motivation

With Schema you can force defined types,
since typescript in runtime will be plain js and types will not be strictly throw errors when type missmatch happens.

In this case I created useState hook that will force the type using json schema specifications.

## How to use

```tsx
import { useStateWithSchema } from "use-state-with-schema-validation";

function Component() {
  const [user, setUser] = useStateWithSchema<Record<"id" | "name", string>>(
    {
      type: "object",
      required: ["id", "name"],
    },
    {
      id: "11-22",
      name: "John Doe",
    }
  );

  // Will work fine!
  setUser({
    id: "11-22",
    name: "John Doe",
  });

  // Will throw error since the value does not align with defined schema above
  setUser({
    id: "11-22",
  });
}
```

Made with 💜 by <a href="https://github.com/ibrahimshamma99">ibrahim</a>
