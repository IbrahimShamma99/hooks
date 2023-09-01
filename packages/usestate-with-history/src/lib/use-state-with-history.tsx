import { useEffect, useState } from "react";
import { handleOperation, listen } from "@utils";

export interface History {
  input: RequestInfo | URL;
  init?: RequestInit | undefined;
}

export function useNetworkWatcher(): History[] {
  const [history, setHistory] = useState<History[]>([]);
  const updateHistory = (newHistory: History) => {
    setHistory((prevousHistory: History[]) => [...prevousHistory, newHistory]);
  };

  useEffect(() => {
    window.fetch = new Proxy(window.fetch, {
      apply: async function (
        target,
        that,
        // eslint-disable-next-line unicorn/prevent-abbreviations
        args: [input: RequestInfo | URL, init?: RequestInit | undefined]
      ) {
        await handleOperation("fetch", {
          input: args[0],
          init: args[1],
        });
        const temporary = target.apply(that, args);
        return temporary;
      },
    });
    listen(
      "fetch",
      ({ input, init }: { input: RequestInfo; init?: RequestInit }) => {
        updateHistory({ input, init });
      }
    );
  }, []);

  return history;
}

export default useNetworkWatcher;
