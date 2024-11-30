import { useMemo, useState } from "react";

type InitialState = boolean | (() => boolean);

/**
 * A hook to manage a boolean state.
 * @param initialState The initial state of the boolean.
 * @returns A tuple containing the boolean state and an object with callbacks to manipulate the state.
 * @example
 * const [value, setTrue, setFalse, toggle] = useBoolean();
 */
export const useBoolean = (initialState: InitialState = false) => {
  const [value, setValue] = useState(initialState);
  const callbacks = useMemo(
    () => [
      () => setValue(true),
      () => setValue(false),
      () => setValue(prev => !prev),
    ],
    []
  );
  return [value, ...callbacks] as const;
};
