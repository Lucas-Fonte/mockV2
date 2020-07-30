import {
  useState, useEffect, Dispatch, SetStateAction,
} from 'react';

type Response<StateType> = [
  StateType,
    Dispatch<SetStateAction<StateType>>
];

function usePersistedState<StateType>(key: string, initialState: StateType): Response<StateType> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
