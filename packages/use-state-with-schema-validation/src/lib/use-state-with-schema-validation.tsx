import { useCallback, useState, SetStateAction, Dispatch, useRef } from "react";
import { validator, JSONSchemaType } from "@library/utils";

type UseStateWithSchemaProps<T> = [T | undefined, Dispatch<SetStateAction<T>>];

export function useStateWithSchema<T>(
  schema: JSONSchemaType<T>,
  defaultValue?: T
): UseStateWithSchemaProps<T> {
  const schemaValidator = validator<T>(schema);
  let value: T | undefined,
    setValue:
      | Dispatch<SetStateAction<T>>
      | Dispatch<SetStateAction<T | undefined>>;

  if (defaultValue) {
    [value, setValue] = useState<T>(defaultValue);
  } else {
    [value, setValue] = useState<T>();
  }

  const set = useCallback(
    (newValue: SetStateAction<T>) => {
      const nextValue =
        typeof newValue === "function"
          ? (newValue as (newValueProp: T) => T)(value as T)
          : newValue;

      if (!schemaValidator(nextValue)) {
        throw new Error("New Value does it align with provided schema");
      }

      if (nextValue !== value) {
        setValue(nextValue);
      }
    },
    [value]
  );

  return [value, set];
}

export default useStateWithSchema;
