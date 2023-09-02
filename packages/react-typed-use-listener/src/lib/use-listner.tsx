import {
  useCallback,
  useEffect,
  useState,
  SetStateAction,
  Dispatch,
  useRef,
} from "react";

export type UseListenerProps<V> = {
  eventName: keyof WindowEventMap;
  callback: (ev: V) => any;
};

export function useListener<V extends WindowEventMap[keyof WindowEventMap]>(
  props: UseListenerProps<V>
): void {
  const { eventName, callback } = props;

  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const listener = (event: any) => {
      callbackRef.current(event);
    };
    window.addEventListener(eventName, listener);
    return () => {
      window.removeEventListener(eventName, listener);
    };
  }, [eventName]);
}
