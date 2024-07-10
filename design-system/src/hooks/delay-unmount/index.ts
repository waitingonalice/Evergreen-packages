import { useEffect, useState } from "react";

export const useDelayUnmount = (
  isMounted: boolean,
  delayTime: number,
  mountDelay?: boolean
) => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (mountDelay) {
      timeout = setTimeout(() => {
        setRender(isMounted);
      }, delayTime);
      return () => clearTimeout(timeout);
    }

    if (isMounted) setRender(true);
    timeout = setTimeout(() => {
      if (!isMounted) setRender(false);
    }, delayTime);

    return () => clearTimeout(timeout);
  }, [isMounted]);
  return render;
};
