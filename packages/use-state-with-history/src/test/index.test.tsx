import React from "react";
import { renderHook, screen } from "@testing-library/react";
import { useStateWithHistory } from "../";
import { act } from "react-dom/test-utils";

describe("Counter", () => {
  test("mounts a count of 0", async () => {
    const promise = Promise.resolve();
    const { result } = renderHook(() => useStateWithHistory<number>());

    const [value, setValue] = result.current;

    expect(value).toBe(0);
    await act(() => promise);
  });

  test("mounts a count of 0 and increments by one", async () => {
    const promise = Promise.resolve();
    const { result } = renderHook(() => useStateWithHistory<number>(0));

    const [value, setValue] = result.current;

    act(() => setValue(value + 1));
    expect(result.current[0]).toBe(1);
    await act(() => promise);
  });

  test("increments by one two times start with zero", async () => {
    const promise = Promise.resolve();
    const { result } = renderHook(() => useStateWithHistory<number>(0));
    const [value, setValue] = result.current;
    act(() => {
      setValue(value + 1);
    });

    act(() => {
      setValue(value + 1);
    });
    expect(value).toBe(2);
    await act(() => promise);
  });

  test("increments by one two times start with zero then goes back by 1 step", async () => {
    const promise = Promise.resolve();
    const { result } = renderHook(() => useStateWithHistory<number>(0));
    act(() => {
      result.current[1](result.current[0] + 1);
    });
    act(() => {
      result.current[1](result.current[0] + 1);
    });

    act(() => {
      result.current[2].backward();
    });
    expect(result.current[0]).toBe(1);
    await act(() => promise);
  });

  test("increments by one two times start with zero then goes back by 2 steps and one forward", async () => {
    const promise = Promise.resolve();
    const { result } = renderHook(() => useStateWithHistory<number>(0));
    act(() => {
      result.current[1](result.current[0] + 1);
    });
    act(() => {
      result.current[1](result.current[0] + 1);
    });

    act(() => {
      result.current[2].backward();
    });

    act(() => {
      result.current[2].backward();
    });

    act(() => {
      result.current[2].forward();
    });
    expect(result.current[0]).toBe(1);
    await act(() => promise);
  });

  test("increments by one two times start with zero then goes back by 2 steps and one forward then goes to 0", async () => {
    const promise = Promise.resolve();
    const { result } = renderHook(() => useStateWithHistory<number>(0));
    act(() => {
      result.current[1](result.current[0] + 1);
    });
    act(() => {
      result.current[1](result.current[0] + 1);
    });

    act(() => {
      result.current[2].backward();
    });

    act(() => {
      result.current[2].backward();
    });

    act(() => {
      result.current[2].forward();
    });
    act(() => {
      result.current[2].go(0);
    });
    expect(result.current[0]).toBe(0);
    await act(() => promise);
  });
});
