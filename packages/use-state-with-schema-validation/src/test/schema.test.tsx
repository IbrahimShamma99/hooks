import React from "react";
import { renderHook, screen } from "@testing-library/react";
import { useStateWithSchema } from "../";
import { act } from "react-dom/test-utils";

describe("State Schema Validation", () => {
  test("mounts a count of 0 and increments by one", async () => {
    const promise = Promise.resolve();
    const { result } = renderHook(() =>
      useStateWithSchema<number>(
        {
          type: ["string", "number"],
        },
        0
      )
    );

    act(() => result.current[1]((prev) => prev + 1));
    expect(result.current[0]).toBe(1);
    await act(() => promise);
  });
});
