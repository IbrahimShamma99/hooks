import React from "react";
import { renderHook } from "@testing-library/react";
import { useStateWithSchema } from "..";
import { act } from "react-dom/test-utils";

describe("State Schema Validation", () => {

  test("mounts state with counter state", async () => {
    const promise = Promise.resolve();
    const { result } = renderHook(() =>
      useStateWithSchema<number>(
        {
          type: "number",
        },
        0
      )
    );
    act(() => result.current[1](1));
    act(() => result.current[1]((prev) => prev + 1));
    expect(result.current[0]).toBe(2);
    await act(() => promise);
  });

  test("mounts state with string state", async () => {
    const promise = Promise.resolve();
    const { result } = renderHook(() =>
      useStateWithSchema<string>(
        {
          type: "string",
        },
        "abc"
      )
    );
    act(() => result.current[1]((prev) => `${prev}d`));
    expect(result.current[0]).toBe("abcd");
    await act(() => promise);
  });


  test("mounts state with Record data", async () => {
    const promise = Promise.resolve();
    const { result } = renderHook(() =>
      useStateWithSchema<number>(
        {
          type: "number"
        },
        0
      )
    );
    act(() => result.current[1](1));
    act(() => result.current[1]((prev) => prev + 1));
    expect(result.current[0]).toBe(2);
    await act(() => promise);
  });

});
