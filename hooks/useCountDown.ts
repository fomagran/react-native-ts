import { useEffect, useRef, useState } from "react";

export function useCountDown(idx: number, initialCount: number) {
  const [countDown, setCountDown] = useState(initialCount);
  const intervalRef = useRef<number>();

  useEffect(() => {
    if (idx == -1) return;

    intervalRef.current = window.setInterval(() => {
      setCountDown((count) => {
        console.log(count);

        return count - 1;
      });
    }, 50);
    return cleanUp;
  }, [idx]);

  useEffect(() => {
    setCountDown(initialCount);
  }, [initialCount]);

  useEffect(() => {
    if (countDown == 0) {
      cleanUp();
    }
  }, [countDown]);

  const cleanUp = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  return countDown;
}
