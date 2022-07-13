/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export const useDebouncedValue = (input: string = '', time: number = 500) => {
  const [devouncedValue, setDevouncedValue] = useState<string>(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDevouncedValue(input);
    }, time);

    return () => {
      // Each time input change it cleans the timeout
      clearTimeout(timeout);
    };
  }, [input]);

  return devouncedValue;
};
