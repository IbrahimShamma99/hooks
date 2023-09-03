import React from "react";
import { renderHook, screen } from "@testing-library/react";
import { useStateWithHistory } from "../";
import { act } from "react-dom/test-utils";

describe("Counter", () => {
  test("mounts a count of 0", async () => {
    const promise = Promise.resolve();
    const { result } = renderHook(() => useStateWithHistory<number>(0));
    expect(result.current[0]).toBe(0);
    await act(() => promise);
  });

  test("mounts a count of 0 and increments by one", async () => {
    const promise = Promise.resolve();
    const { result } = renderHook(() => useStateWithHistory<number>(0));
    act(() => result.current[1](result.current[0] + 1));
    expect(result.current[0]).toBe(1);
    await act(() => promise);
  });
});
